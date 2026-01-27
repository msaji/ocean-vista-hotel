document.addEventListener('DOMContentLoaded', () => {
    // --- DATA ---
    const reservations = [
        { id: 1, guestName: 'Michael Saji', confirmationCode: '#A735B', roomType: 'Suite King', nights: 1, guestCount: 4, rowColor: 'var(--color-row1)', icon: 'fa-sun' },
        { id: 2, guestName: 'David Lee & Sarah Brown', confirmationCode: '#A70B', roomType: 'Deluxe Queen', nights: 1, guestCount: 9, rowColor: 'var(--color-row2)', icon: 'fa-ship' },
        { id: 3, guestName: 'David Lee', confirmationCode: '#700B', roomType: 'Premier Suite', nights: 3, guestCount: 5, rowColor: 'var(--color-row3)', icon: 'fa-cloud' },
        { id: 4, guestName: 'James Wilson', confirmationCode: '#EXETUBLE', roomType: 'Standard King', nights: 4, guestCount: 1, rowColor: 'var(--color-row4)', icon: 'fa-palm-tree' },
        { id: 5, guestName: 'Jenjamin Green', confirmationCode: '#A728IE', roomType: 'Junior Suite', nights: 3, guestCount: 3, rowColor: 'var(--color-row5)', icon: 'fa-treasure-chest' },
        { id: 6, guestName: 'Emily Clark', confirmationCode: '#C123D', roomType: 'Standard Queen', nights: 2, guestCount: 1, rowColor: 'var(--color-row1)', icon: 'fa-star' },
        { id: 7, guestName: 'Michael Scott', confirmationCode: '#D456E', roomType: 'Presidential Suite', nights: 1, guestCount: 2, rowColor: 'var(--color-row2)', icon: 'fa-crown' },
        { id: 8, guestName: 'Jessica Day', confirmationCode: '#F789G', roomType: 'Loft', nights: 5, guestCount: 1, rowColor: 'var(--color-row3)', icon: 'fa-couch' },
        { id: 9, guestName: 'Walter White', confirmationCode: '#H012I', roomType: 'Standard King', nights: 3, guestCount: 2, rowColor: 'var(--color-row4)', icon: 'fa-flask' },
        { id: 10, guestName: 'Liz Lemon', confirmationCode: '#J345K', roomType: 'Deluxe King', nights: 2, guestCount: 1, rowColor: 'var(--color-row5)', icon: 'fa-pencil-alt' },
        { id: 11, guestName: 'Ron Swanson', confirmationCode: '#L678M', roomType: 'Cabin', nights: 7, guestCount: 1, rowColor: 'var(--color-row1)', icon: 'fa-tree' },
        { id: 12, guestName: 'Arya Stark', confirmationCode: '#N901O', roomType: 'Single', nights: 1, guestCount: 1, rowColor: 'var(--color-row2)', icon: 'fa-user-ninja' },
        { id: 13, guestName: 'Sherlock Holmes', confirmationCode: '#P234Q', roomType: 'Study', nights: 4, guestCount: 2, rowColor: 'var(--color-row3)', icon: 'fa-search' },
        { id: 14, guestName: 'Dana Scully', confirmationCode: '#R567S', roomType: 'Standard Queen', nights: 2, guestCount: 1, rowColor: 'var(--color-row4)', icon: 'fa-satellite' },
        { id: 15, guestName: 'Fox Mulder', confirmationCode: '#T890U', roomType: 'Standard Queen', nights: 2, guestCount: 1, rowColor: 'var(--color-row5)', icon: 'fa-pastafarianism' },
        { id: 16, guestName: 'Gung Gung and Poh Poh', confirmationCode: '#GGPP1', roomType: 'Deluxe King', nights: 50, guestCount: 2, rowColor: 'var(--color-row1)', icon: 'fa-users' }
    ];

    // --- ELEMENTS ---
    const dateTimeElement = document.getElementById('datetime');
    const checkInListElement = document.getElementById('check-in-list');

    const checkInModal = document.getElementById('check-in-modal');
    const roomsModal = document.getElementById('rooms-modal');
    const upgradeModal = document.getElementById('upgrade-modal');
    const modals = [checkInModal, roomsModal, upgradeModal];

    const checkInModalText = document.getElementById('check-in-modal-text');
    const confirmCheckInBtn = document.getElementById('confirm-check-in-btn');

    const availableRoomsBtn = document.getElementById('available-rooms-btn');
    const upgradeRoomBtn = document.getElementById('upgrade-room-btn');
    const digitalKeyLink = document.getElementById('digital-key-link');
    const mobileAccessLink = document.getElementById('mobile-access-link');

    let activeReservationId = null;

    // --- CLOCK ---
    function updateTime() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
        dateTimeElement.textContent = now.toLocaleDateString('en-US', options);
    }
    setInterval(updateTime, 1000);
    updateTime();

    // --- RENDER RESERVATIONS ---
    function renderReservations() {
        checkInListElement.innerHTML = '';
        reservations.forEach(res => {
            if (!document.getElementById(`res-${res.id}`)) { // Avoid re-rendering
                const row = document.createElement('div');
                row.className = 'reservation-row';
                row.id = `res-${res.id}`;
                row.style.backgroundColor = res.rowColor;
                row.dataset.reservationId = res.id;

                row.innerHTML = `
                    <div class="guest-info">
                        <p class="guest-name">${res.guestName}</p>
                        <p class="conf-code">CONFIRMATION: ${res.confirmationCode}, ${res.guestCount} GUESTS</p>
                    </div>
                    <div class="room-info">
                        <p class="details">${res.roomType}, ${res.nights} NIGHTS</p>
                    </div>
                    <div class="icon">
                        <i class="fas ${res.icon}"></i>
                    </div>
                `;
                checkInListElement.appendChild(row);
                row.addEventListener('click', () => openCheckInModal(res.id));
            }
        });
    }

    // --- MODAL LOGIC ---
    function openModal(modal) {
        modal.style.display = 'flex';
    }

    function closeModal(modal) {
        modal.style.display = 'none';
    }

    modals.forEach(modal => {
        const closeBtn = modal.querySelector('.close-btn');
        closeBtn.addEventListener('click', () => closeModal(modal));
    });

    window.addEventListener('click', (event) => {
        modals.forEach(modal => {
            if (event.target == modal) {
                closeModal(modal);
            }
        });
    });

    // --- CHECK-IN FLOW ---
    function openCheckInModal(reservationId) {
        const reservation = reservations.find(r => r.id === reservationId);
        if (reservation) {
            activeReservationId = reservationId;
            checkInModalText.textContent = `Ready to check in ${reservation.guestName}? Room: ${reservation.roomType}`;
            openModal(checkInModal);
        }
    }

    confirmCheckInBtn.addEventListener('click', () => {
        if (activeReservationId) {
            const rowToRemove = document.getElementById(`res-${activeReservationId}`);
            if (rowToRemove) {
                rowToRemove.remove();
            }
            // Optional: Remove from array as well
            const indexToRemove = reservations.findIndex(r => r.id === activeReservationId);
            if (indexToRemove > -1) {
                reservations.splice(indexToRemove, 1);
            }
            activeReservationId = null;
            closeModal(checkInModal);
        }
    });

    // --- FOOTER EVENT LISTENERS ---
    availableRoomsBtn.addEventListener('click', () => openModal(roomsModal));
    upgradeRoomBtn.addEventListener('click', () => openModal(upgradeModal));

    digitalKeyLink.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Digital Room Key link clicked.');
    });

    mobileAccessLink.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Mobile Access link clicked.');
    });

    // --- INITIALIZE ---
    renderReservations();
});
