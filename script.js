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
    if (!dateTimeElement) console.error('Element #datetime not found.');

    const checkInListElement = document.getElementById('check-in-list');
    if (!checkInListElement) console.error('Element #check-in-list not found.');

    const checkInModal = document.getElementById('check-in-modal');
    if (!checkInModal) console.error('Element #check-in-modal not found.');
    const roomsModal = document.getElementById('rooms-modal');
    if (!roomsModal) console.error('Element #rooms-modal not found.');
    const upgradeModal = document.getElementById('upgrade-modal');
    if (!upgradeModal) console.error('Element #upgrade-modal not found.');
    const barcodeModal = document.getElementById('barcode-modal');
    if (!barcodeModal) console.error('Element #barcode-modal not found.');
    const reservationActionModal = document.getElementById('reservation-action-modal');
    if (!reservationActionModal) console.error('Element #reservation-action-modal not found.');
    const mobileAccessInputModal = document.getElementById('mobile-access-input-modal');
    if (!mobileAccessInputModal) console.error('Element #mobile-access-input-modal not found.');
    const earlyCheckinInputModal = document.getElementById('early-checkin-input-modal');
    if (!earlyCheckinInputModal) console.error('Element #early-checkin-input-modal not found.');
    const earlyCheckinDetailsModal = document.getElementById('early-checkin-details-modal');
    if (!earlyCheckinDetailsModal) console.error('Element #early-checkin-details-modal not found.');
    const mobilePlannerModal = document.getElementById('mobile-planner-modal');
    if (!mobilePlannerModal) console.error('Element #mobile-planner-modal not found.');
    const modals = [checkInModal, roomsModal, upgradeModal, barcodeModal, reservationActionModal, mobileAccessInputModal, earlyCheckinInputModal, earlyCheckinDetailsModal, mobilePlannerModal].filter(Boolean); // Filter out nulls

    const checkInModalText = document.getElementById('check-in-modal-text');
    if (!checkInModalText) console.error('Element #check-in-modal-text not found.');
    const confirmCheckInBtn = document.getElementById('confirm-check-in-btn');
    if (!confirmCheckInBtn) console.error('Element #confirm-check-in-btn not found.');
    const idCheckNote = document.getElementById('id-check-note');
    if (!idCheckNote) console.error('Element #id-check-note not found.');
    const plannerContent = document.getElementById('planner-content');
    if (!plannerContent) console.error('Element #planner-content not found.');

    const earlyCheckinBtn = document.getElementById('early-checkin-btn');
    if (!earlyCheckinBtn) console.error('Element #early-checkin-btn not found.');
    const earlyCheckinForm = document.getElementById('early-checkin-form');
    if (!earlyCheckinForm) console.error('Element #early-checkin-form not found.');
    const earlyCheckinNameInput = document.getElementById('early-checkin-name-input');
    if (!earlyCheckinNameInput) console.error('Element #early-checkin-name-input not found.');
    const earlyCheckinError = document.getElementById('early-checkin-error');
    if (!earlyCheckinError) console.error('Element #early-checkin-error not found.');
    const earlyCheckinDetails = document.getElementById('early-checkin-details');
    if (!earlyCheckinDetails) console.error('Element #early-checkin-details not found.');
    const confirmEarlyCheckinBtn = document.getElementById('confirm-early-checkin-btn');
    if (!confirmEarlyCheckinBtn) console.error('Element #confirm-early-checkin-btn not found.');

    const availableRoomsBtn = document.getElementById('available-rooms-btn');
    if (!availableRoomsBtn) console.error('Element #available-rooms-btn not found.');
    const upgradeRoomBtn = document.getElementById('upgrade-room-btn');
    if (!upgradeRoomBtn) console.error('Element #upgrade-room-btn not found.');
    const digitalKeyLink = document.getElementById('digital-key-link');
    if (!digitalKeyLink) console.error('Element #digital-key-link not found.');
    const mobileAccessLink = document.getElementById('mobile-access-link');
    if (!mobileAccessLink) console.error('Element #mobile-access-link not found.');

    const reservationActionText = document.getElementById('reservation-action-text');
    if (!reservationActionText) console.error('Element #reservation-action-text not found.');
    const viewItineraryBtn = document.getElementById('view-itinerary-btn');
    if (!viewItineraryBtn) console.error('Element #view-itinerary-btn not found.');
    const proceedToCheckinBtn = document.getElementById('proceed-to-checkin-btn');
    if (!proceedToCheckinBtn) console.error('Element #proceed-to-checkin-btn not found.');

    const findReservationForm = document.getElementById('find-reservation-form');
    if (!findReservationForm) console.error('Element #find-reservation-form not found.');
    const reservationNameInput = document.getElementById('reservation-name-input');
    if (!reservationNameInput) console.error('Element #reservation-name-input not found.');
    const reservationError = document.getElementById('reservation-error');
    if (!reservationError) console.error('Element #reservation-error not found.');

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
                row.addEventListener('click', () => openReservationActionModal(res.id));
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

    function openReservationActionModal(reservationId) {
        const reservation = reservations.find(r => r.id === reservationId);
        if (reservation) {
            activeReservationId = reservationId;
            reservationActionText.textContent = `What would you like to do for ${reservation.guestName}?`;
            openModal(reservationActionModal);
        }
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
    viewItineraryBtn.addEventListener('click', () => {
        closeModal(reservationActionModal);
        if (activeReservationId) {
            const reservation = reservations.find(r => r.id === activeReservationId);
            if (reservation) {
                displayPlanner(reservation);
            }
        }
    });

    proceedToCheckinBtn.addEventListener('click', () => {
        closeModal(reservationActionModal);
        if (activeReservationId) {
            openCheckInModal(activeReservationId);
        }
    });

    function openCheckInModal(reservationId) {
        const reservation = reservations.find(r => r.id === reservationId);
        if (reservation) {
            activeReservationId = reservationId;
            checkInModalText.textContent = `Ready to check in ${reservation.guestName}? Room: ${reservation.roomType}`;
            idCheckNote.style.display = 'block'; // Ensure the note is visible
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
            idCheckNote.style.display = 'none'; // Hide the ID check note after check-in
        }
    });

    // --- FOOTER EVENT LISTENERS ---
    earlyCheckinBtn.addEventListener('click', () => {
        openModal(earlyCheckinInputModal);
        earlyCheckinError.style.display = 'none'; // Hide previous errors
        earlyCheckinNameInput.value = ''; // Clear input
    });

    earlyCheckinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchName = earlyCheckinNameInput.value.trim().toLowerCase();
        const foundReservation = reservations.find(res => res.guestName.toLowerCase().includes(searchName));

        if (foundReservation) {
            closeModal(earlyCheckinInputModal);
            // Display details in earlyCheckinDetailsModal
            earlyCheckinDetails.innerHTML = `
                <h2>Early Check-in for ${foundReservation.guestName}</h2>
                <p><strong>Confirmation:</strong> ${foundReservation.confirmationCode}</p>
                <p><strong>Room Type:</strong> ${foundReservation.roomType}</p>
                <p><strong>Guests:</strong> ${foundReservation.guestCount}</p>
                <p style="color: red; font-weight: bold; margin-bottom: 15px;">Please verify guest's ID before proceeding!</p>
            `;
            activeReservationId = foundReservation.id; // Set active reservation for confirmation
            openModal(earlyCheckinDetailsModal);
        } else {
            earlyCheckinError.textContent = `Reservation for "${earlyCheckinNameInput.value}" not found.`;
            earlyCheckinError.style.display = 'block';
        }
    });

    confirmEarlyCheckinBtn.addEventListener('click', () => {
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
            closeModal(earlyCheckinDetailsModal);
            // Optionally, show a success message
            alert('Early Check-in successful!');
        }
    });

    availableRoomsBtn.addEventListener('click', () => openModal(roomsModal));
    upgradeRoomBtn.addEventListener('click', () => openModal(upgradeModal));

    digitalKeyLink.addEventListener('click', (e) => {
        e.preventDefault();
        // Use the first reservation's conf code as an example
        const sampleCode = reservations.length > 0 ? reservations[0].confirmationCode : "A1B2C3D4";
        JsBarcode("#barcode", sampleCode.replace('#', ''), {
            format: "CODE128",
            lineColor: "#000",
            width: 2,
            height: 100,
            displayValue: true
        });
        openModal(barcodeModal);
    });

    mobileAccessLink.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(mobileAccessInputModal);
        reservationError.style.display = 'none'; // Hide previous errors
        reservationNameInput.value = ''; // Clear input
    });

    findReservationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchName = reservationNameInput.value.trim().toLowerCase();
        const foundReservation = reservations.find(res => res.guestName.toLowerCase().includes(searchName));

        if (foundReservation) {
            closeModal(mobileAccessInputModal);
            displayPlanner(foundReservation);
        } else {
            reservationError.textContent = `Reservation for "${reservationNameInput.value}" not found.`;
            reservationError.style.display = 'block';
        }
    });

    // --- HELPER FUNCTIONS ---
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function displayPlanner(reservation) {
        const checkInDate = new Date();
        const checkOutDate = new Date();
        checkOutDate.setDate(checkOutDate.getDate() + reservation.nights);

        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const checkInDateFormatted = checkInDate.toLocaleDateString('en-US', options);
        const checkOutDateFormatted = checkOutDate.toLocaleDateString('en-US', options);

        let scheduleHtml = '<h4>Your Itinerary:</h4><ul id="planner-schedule">';
        const baseDailyActivities = [
            `Morning yoga on the beach, followed by a delicious breakfast buffet.`,
            `Explore the local marine life with a snorkeling trip to Coral Reef.`,
            `Relax by the infinity pool with a refreshing tropical drink.`,
            `Visit the historic lighthouse and enjoy panoramic ocean views.`,
            `Indulge in a rejuvenating spa treatment at the Ocean Spa.`,
            `Sunset cruise with live music and cocktails.`,
            `Enjoy a game of beach volleyball or build sandcastles.`,
            `Experience a guided tour of the nearby eco-park.`,
            `Evening entertainment: live band at the beach bar.`,
            `Learn to surf with an introductory lesson.`,
            `Private dining experience under the stars.`,
            `Kayaking or paddleboarding along the serene coastline.`,
            `Explore the local markets and discover unique souvenirs.`,
            `Cooking class featuring traditional island cuisine.`,
            `Stargazing session with a resident astronomer.`,
            `Relax with a good book at the resort library.`,
            `Early morning dolphin watching tour.`,
            `Fitness center workout followed by a healthy smoothie.`,
            `Photography workshop to capture the beauty of Ocean Vista.`,
            `Take a leisurely stroll along the boardwalk.`,
            `Eating dim sum at the hotel's specialty restaurant.`,
            `Hang out with friends at the poolside lounge.`,
            `Eating spicy hot cheetos while watching the sunset.`,
            `Going for hikes on scenic coastal trails.`,
            `Doing cartwheels in the gym (with proper supervision, of course!).`,
            `Go to the mall for some retail therapy.`,
            `Relax in the hotel with a good book or movie.`,
            `Go to the beach and soak up the sun.`,
            `Go to the spa for a relaxing massage.`,
            `Have teatime in the hotel's elegant lounge.`,
            `Go to a nice dinner at the hotel's restaurant.`
        ];

        // Create a shuffled copy of activities for this specific planner generation
        const shuffledActivities = shuffleArray([...baseDailyActivities]);

        for (let i = 0; i < reservation.nights; i++) {
            const dayDate = new Date(checkInDate);
            dayDate.setDate(checkInDate.getDate() + i);
            const dayDateFormatted = dayDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
            // Use modulo operator to cycle through shuffled activities if nights > activities count
            const activity = shuffledActivities[i % shuffledActivities.length];
            scheduleHtml += `<li><strong>${dayDateFormatted}:</strong> ${activity}</li>`;
        }
        scheduleHtml += `<li><strong>${checkOutDateFormatted} (Check-out):</strong> Enjoy breakfast, prepare for departure.</li>`;
        scheduleHtml += '</ul>';


        plannerContent.innerHTML = `
            <h2>${reservation.guestName}'s Stay Planner</h2>
            <p><strong>Confirmation:</strong> ${reservation.confirmationCode}</p>
            <p><strong>Room Type:</strong> ${reservation.roomType}</p>
            <p><strong>Guests:</strong> ${reservation.guestCount}</p>
            <p><strong>Nights:</strong> ${reservation.nights}</p>
            <p><strong>Check-in:</strong> ${checkInDateFormatted}</p>
            <p><strong>Check-out:</strong> ${checkOutDateFormatted}</p>
            ${scheduleHtml}
        `;
        openModal(mobilePlannerModal);
    }

    // --- INITIALIZE ---
    renderReservations();
});
