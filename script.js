document.addEventListener('DOMContentLoaded', () => {
    // --- DATA ---
    const reservations = [
        { id: 1, guestName: 'Michael Saji', confirmationCode: '#A735B', roomNumber: 501, roomType: 'Suite King', nights: 1, guestCount: 4, phone: '555-0101', email: 'michael.saji@example.com', rowColor: 'var(--color-row1)', icon: 'fa-sun' },
        { id: 2, guestName: 'David Lee & Sarah Brown', confirmationCode: '#A70B', roomNumber: 304, roomType: 'Deluxe Queen', nights: 1, guestCount: 9, phone: '555-0102', email: 'david.lee.sarah.brown@example.com', rowColor: 'var(--color-row2)', icon: 'fa-ship' },
        { id: 3, guestName: 'David Lee', confirmationCode: '#700B', roomNumber: 502, roomType: 'Premier Suite', nights: 3, guestCount: 5, phone: '555-0103', email: 'david.lee@example.com', rowColor: 'var(--color-row3)', icon: 'fa-cloud' },
        { id: 4, guestName: 'James Wilson', confirmationCode: '#EXETUBLE', roomNumber: 112, roomType: 'Standard King', nights: 4, guestCount: 1, phone: '555-0104', email: 'james.wilson@example.com', rowColor: 'var(--color-row4)', icon: 'fa-palm-tree' },
        { id: 5, guestName: 'Jenjamin Green', confirmationCode: '#A728IE', roomNumber: 405, roomType: 'Junior Suite', nights: 3, guestCount: 3, phone: '555-0105', email: 'jenjamin.green@example.com', rowColor: 'var(--color-row5)', icon: 'fa-treasure-chest' },
        { id: 6, guestName: 'Emily Clark', confirmationCode: '#C123D', roomNumber: 108, roomType: 'Standard Queen', nights: 2, guestCount: 1, phone: '555-0106', email: 'emily.clark@example.com', rowColor: 'var(--color-row1)', icon: 'fa-star' },
        { id: 7, guestName: 'Michael Scott', confirmationCode: '#D456E', roomNumber: 801, roomType: 'Presidential Suite', nights: 1, guestCount: 2, phone: '555-0107', email: 'michael.scott@example.com', rowColor: 'var(--color-row2)', icon: 'fa-crown' },
        { id: 8, guestName: 'Jessica Day', confirmationCode: '#F789G', roomNumber: 610, roomType: 'Loft', nights: 5, guestCount: 1, phone: '555-0108', email: 'jessica.day@example.com', rowColor: 'var(--color-row3)', icon: 'fa-couch' },
        { id: 9, guestName: 'Walter White', confirmationCode: '#H012I', roomNumber: 115, roomType: 'Standard King', nights: 3, guestCount: 2, phone: '555-0109', email: 'walter.white@example.com', rowColor: 'var(--color-row4)', icon: 'fa-flask' },
        { id: 10, guestName: 'Liz Lemon', confirmationCode: '#J345K', roomNumber: 307, roomType: 'Deluxe King', nights: 2, guestCount: 1, phone: '555-0110', email: 'liz.lemon@example.com', rowColor: 'var(--color-row5)', icon: 'fa-pencil-alt' },
        { id: 11, guestName: 'Ron Swanson', confirmationCode: '#L678M', roomNumber: 701, roomType: 'Cabin', nights: 7, guestCount: 1, phone: '555-0111', email: 'ron.swanson@example.com', rowColor: 'var(--color-row1)', icon: 'fa-tree' },
        { id: 12, guestName: 'Arya Stark', confirmationCode: '#N901O', roomNumber: 104, roomType: 'Single', nights: 1, guestCount: 1, phone: '555-0112', email: 'arya.stark@example.com', rowColor: 'var(--color-row2)', icon: 'fa-user-ninja' },
        { id: 13, guestName: 'Sherlock Holmes', confirmationCode: '#P234Q', roomNumber: 221, roomType: 'Study', nights: 4, guestCount: 2, phone: '555-0113', email: 'sherlock.holmes@example.com', rowColor: 'var(--color-row3)', icon: 'fa-search' },
        { id: 14, guestName: 'Dana Scully', confirmationCode: '#R567S', roomNumber: 118, roomType: 'Standard Queen', nights: 2, guestCount: 1, phone: '555-0114', email: 'dana.scully@example.com', rowColor: 'var(--color-row4)', icon: 'fa-satellite' },
        { id: 15, guestName: 'Fox Mulder', confirmationCode: '#T890U', roomNumber: 119, roomType: 'Standard Queen', nights: 2, guestCount: 1, phone: '555-0115', email: 'fox.mulder@example.com', rowColor: 'var(--color-row5)', icon: 'fa-pastafarianism' },
        { id: 16, guestName: 'Gung Gung and Poh Poh', confirmationCode: '#GGPP1', roomNumber: 310, roomType: 'Deluxe King', nights: 50, guestCount: 2, phone: '555-0116', email: 'gung.gung.and.poh.poh@example.com', rowColor: 'var(--color-row1)', icon: 'fa-users' },
		{ id: 17, guestName: 'Evelyn Holman', confirmationCode: '#148EH', roomNumber: 408, roomType: 'Junior Suite', nights: 21, guestCount: 1, phone: '555-0117', email: 'evelyn.holman@example.com', rowColor: 'var(--color-row5)', icon: 'fa-book' },
        { id: 18, guestName: 'Kai-Mah', confirmationCode: '#KM18A', roomNumber: 312, roomType: 'Deluxe Queen', nights: 3, guestCount: 1, phone: '555-0118', email: 'kai.mah@example.com', rowColor: 'var(--color-row3)', icon: 'fa-star' }
	];

    // A copy of the full guest list. Checking in removes a guest from the
    // list on screen, but they still need their key and their planner.
    const allGuests = [...reservations];

    // Find a guest by name: an exact name first, then part of a name
    function findGuest(name) {
        const searchName = name.trim().toLowerCase();
        return allGuests.find(g => g.guestName.toLowerCase() === searchName)
            || allGuests.find(g => g.guestName.toLowerCase().includes(searchName));
    }

    // --- ELEMENTS ---
    const dateTimeElement = document.getElementById('datetime');
    const checkInListElement = document.getElementById('check-in-list');
    const checkInModal = document.getElementById('check-in-modal');
    const roomsModal = document.getElementById('rooms-modal');
    const upgradeModal = document.getElementById('upgrade-modal');
    const barcodeModal = document.getElementById('barcode-modal');
    const mobileAccessInputModal = document.getElementById('mobile-access-input-modal');
    const mobilePlannerModal = document.getElementById('mobile-planner-modal');
    const checkedInModal = document.getElementById('checked-in-modal');
    const newReservationModal = document.getElementById('new-reservation-modal');
    const modals = [checkInModal, roomsModal, upgradeModal, barcodeModal, mobileAccessInputModal, mobilePlannerModal, checkedInModal, newReservationModal];
    const checkInModalText = document.getElementById('check-in-modal-text');
    const confirmCheckInBtn = document.getElementById('confirm-check-in-btn');
    const contactInfoBtn = document.getElementById('contact-info-btn');
    const contactInfo = document.getElementById('contact-info');
    const plannerContent = document.getElementById('planner-content');
    const availableRoomsBtn = document.getElementById('available-rooms-btn');
    const upgradeRoomBtn = document.getElementById('upgrade-room-btn');
    const checkedInBtn = document.getElementById('checked-in-btn');
    const checkedInList = document.getElementById('checked-in-list');
    const digitalKeyLink = document.getElementById('digital-key-link');
    const mobileAccessLink = document.getElementById('mobile-access-link');
    const findReservationForm = document.getElementById('find-reservation-form');
    const reservationNameInput = document.getElementById('reservation-name-input');
    const reservationError = document.getElementById('reservation-error');
    const confirmationMsg = document.getElementById('confirmation-message'); // New element

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
                        <p class="details">ROOM ${res.roomNumber} &middot; ${res.roomType}, ${res.nights} NIGHTS</p>
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
        if (closeBtn) {
            closeBtn.addEventListener('click', () => closeModal(modal));
        }
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
            checkInModalText.textContent = `Ready to check in ${reservation.guestName}? Room ${reservation.roomNumber} (${reservation.roomType})`;

            // Hide any contact info shown for the last guest
            contactInfo.style.display = 'none';
            contactInfo.innerHTML = '';
            openModal(checkInModal);
        }
    }

    // Show the guest's phone and email
    contactInfoBtn.addEventListener('click', () => {
        const guest = allGuests.find(g => g.id === activeReservationId);
        if (!guest) return;
        contactInfo.innerHTML = `
            <p><i class="fas fa-phone"></i> <strong>Phone:</strong> ${guest.phone}</p>
            <p><i class="fas fa-envelope"></i> <strong>Email:</strong> ${guest.email}</p>
            <p><i class="fas fa-users"></i> <strong>Guests:</strong> ${guest.guestCount}</p>
        `;
        contactInfo.style.display = 'block';
    });

    confirmCheckInBtn.addEventListener('click', () => {
        // 4. Display confirmation message
        confirmationMsg.textContent = 'Check-in Successful!';
        confirmationMsg.classList.add('show');

        // 5. Hide confirmation message after 2 seconds
        setTimeout(() => {
            confirmationMsg.classList.remove('show');
            closeModal(checkInModal);

            if (activeReservationId) {
                const rowToRemove = document.getElementById(`res-${activeReservationId}`);
                if (rowToRemove) {
                    // 1. Start fade-out animation
                    rowToRemove.classList.add('fade-out');

                    // 2. Wait for the animation to complete (0.5s defined in CSS)
                    setTimeout(() => {
                        // 3. Perform removal and update state
                        rowToRemove.remove();

                        // Remove from array as well
                        const indexToRemove = reservations.findIndex(r => r.id === activeReservationId);
                        if (indexToRemove > -1) {
                            reservations.splice(indexToRemove, 1);
                        }
                        updateCheckedInCount();
                        activeReservationId = null;
                    }, 500);
                }
            }
        }, 2000);
    });

    // --- FOOTER EVENT LISTENERS ---
    availableRoomsBtn.addEventListener('click', () => openModal(roomsModal));

    // --- ADD A NEW RESERVATION ---
    const addReservationBtn = document.getElementById('add-reservation-btn');
    const newReservationForm = document.getElementById('new-reservation-form');
    const newGuestNameInput = document.getElementById('new-guest-name-input');

    // The new booking gets a surprise room. The first digit of the room is its floor.
    const newRoomChoices = [
        { roomType: 'Standard King', floor: 1 },
        { roomType: 'Standard Queen', floor: 1 },
        { roomType: 'Deluxe King', floor: 3 },
        { roomType: 'Junior Suite', floor: 4 }
    ];
    const newIcons = ['fa-umbrella-beach', 'fa-fish', 'fa-anchor', 'fa-sun', 'fa-star', 'fa-heart'];

    function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)];
    }

    // Make a code like "#K7Q2M" that no other guest has
    function makeConfirmationCode() {
        const letters = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
        let code;
        do {
            code = '#';
            for (let i = 0; i < 5; i++) code += pickRandom(letters.split(''));
        } while (allGuests.some(g => g.confirmationCode === code));
        return code;
    }

    // Find the first free room on a floor, e.g. 101, 102, 103...
    function findFreeRoom(floor) {
        let room = floor * 100 + 1;
        while (allGuests.some(g => g.roomNumber === room)) room++;
        return room;
    }

    addReservationBtn.addEventListener('click', () => {
        newGuestNameInput.value = '';
        openModal(newReservationModal);
        newGuestNameInput.focus();
    });

    newReservationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const choice = pickRandom(newRoomChoices);
        const newId = Math.max(0, ...allGuests.map(g => g.id)) + 1;

        const newReservation = {
            id: newId,
            guestName: newGuestNameInput.value.trim(),
            confirmationCode: makeConfirmationCode(),
            roomNumber: findFreeRoom(choice.floor),
            roomType: choice.roomType,
            nights: 1 + Math.floor(Math.random() * 5), // 1 to 5 nights
            guestCount: 1,
            phone: `555-01${String(newId % 100).padStart(2, '0')}`,
            email: (newGuestNameInput.value.toLowerCase().match(/[a-z]+/g) || ['guest']).join('.') + '@example.com',
            rowColor: `var(--color-row${(newId % 5) + 1})`,
            icon: pickRandom(newIcons)
        };

        // Add it to both lists: the one on screen and the full guest book
        reservations.push(newReservation);
        allGuests.push(newReservation);

        closeModal(newReservationModal);
        renderReservations();

        // Scroll to the new booking and make it glow
        const newRow = document.getElementById(`res-${newId}`);
        newRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
        newRow.classList.add('new-row');
    });

    // --- CHECKED-IN GUESTS ---
    // A guest has checked in if they are in the full guest list
    // but no longer in the list on screen.
    function getCheckedInGuests() {
        return allGuests.filter(g => !reservations.includes(g));
    }

    function updateCheckedInCount() {
        checkedInBtn.textContent = `CHECKED-IN GUESTS: ${getCheckedInGuests().length}`;
    }

    checkedInBtn.addEventListener('click', () => {
        const guests = getCheckedInGuests();
        checkedInList.innerHTML = '';

        if (guests.length === 0) {
            checkedInList.innerHTML = '<li>No guests have checked in yet.</li>';
        } else {
            guests.forEach(g => {
                const item = document.createElement('li');
                item.innerHTML = `<i class="fas ${g.icon}"></i> <strong>${g.guestName}</strong> &middot; Room ${g.roomNumber}, ${g.roomType}, ${g.nights} NIGHTS`;
                checkedInList.appendChild(item);
            });
        }
        openModal(checkedInModal);
    });

    // --- UPGRADE MODAL LOGIC ---
    let upgradeState = {
        step: 'selection', // 'selection', 'confirmation', 'details'
        selectedRoom: null,
        selectedReservationId: null,
        detailsText: ''
    };

    // These parts only exist after initializeUpgradeModal() builds the window,
    // so we look them up there instead of when the page first loads.
    let upgradeConfirmationText = null;
    let upgradeDetailsTextarea = null;
    let upgradeConfirmBtn = null;
    let upgradeNextBtn = null;
    let upgradeMessage = null;

    function initializeUpgradeModal(reservationId) {
        upgradeState.selectedReservationId = reservationId;
        upgradeState.step = 'selection';
        upgradeState.selectedRoom = null;
        upgradeState.detailsText = '';

        // Build the upgrade window
        upgradeModal.innerHTML = `
            <div class="modal-content">
                <span class="close-btn">&times;</span>
                <h3>Upgrade Room</h3>
                <div id="room-options-container">
                    <p>Pick the room you'd like to upgrade to:</p>
                    <button class="room-option" data-room="Standard">Standard</button>
                    <button class="room-option" data-room="Suite">Suite</button>
                    <button class="room-option" data-room="Deluxe">Deluxe</button>
                </div>
                <div id="upgrade-step-content" style="display: none;">
                    <p id="upgrade-confirmation-text"></p>
                    <textarea id="upgrade-details-textarea" placeholder="Enter special requests..."></textarea>
                    <div class="modal-actions">
                        <button id="upgrade-next-btn">Next</button>
                        <button id="upgrade-confirm-btn" style="display: none;">Confirm Upgrade</button>
                        <button class="secondary-btn">Cancel</button>
                    </div>
                </div>
                <div id="upgrade-message" class="confirmation-message"></div>
            </div>
        `;

        // Now that the window is built, find its parts
        upgradeConfirmationText = document.getElementById('upgrade-confirmation-text');
        upgradeDetailsTextarea = document.getElementById('upgrade-details-textarea');
        upgradeConfirmBtn = document.getElementById('upgrade-confirm-btn');
        upgradeNextBtn = document.getElementById('upgrade-next-btn');
        upgradeMessage = document.getElementById('upgrade-message');

        upgradeModal.querySelector('.close-btn').addEventListener('click', () => closeModal(upgradeModal));
        upgradeModal.querySelectorAll('.room-option').forEach(button => {
            button.addEventListener('click', handleRoomSelection);
        });
        upgradeNextBtn.addEventListener('click', handleNextStep);
        upgradeConfirmBtn.addEventListener('click', handleFinalConfirmation);
        upgradeModal.querySelector('.secondary-btn').addEventListener('click', () => closeModal(upgradeModal));

        renderUpgradeStep();
    }

    function handleRoomSelection(e) {
        upgradeState.selectedRoom = e.target.dataset.room;
        upgradeState.step = 'confirmation';
        renderUpgradeStep();
    }

    function handleNextStep() {
        if (upgradeState.step === 'confirmation') {
            upgradeState.step = 'details';
            renderUpgradeStep();
        }
    }

    function handleFinalConfirmation() {
        upgradeState.step = 'complete';
        upgradeState.detailsText = upgradeDetailsTextarea.value;

        const finalRoom = upgradeState.selectedRoom;
        const reservation = reservations.find(r => r.id === upgradeState.selectedReservationId);

        if (reservation) {
            // 1. Update room type
            reservation.roomType = finalRoom;
            // 2. Add a bonus night
            reservation.nights += 1;
            // 3. Turn the row purple to show it was upgraded
            reservation.rowColor = 'var(--color-upgrade-success)';

            // 4. Show a success message inside the upgrade window
            document.getElementById('upgrade-step-content').style.display = 'none';
            upgradeMessage.textContent = `SUCCESS! Room upgraded to ${finalRoom}. Stay extended by 1 night.`;
            upgradeMessage.classList.add('show');

            // 5. After 2 seconds, close the window and redraw the guest list
            setTimeout(() => {
                upgradeMessage.classList.remove('show');
                closeModal(upgradeModal);
                renderReservations();
            }, 2000);
        } else {
            alert("Error: Could not find reservation to update.");
            closeModal(upgradeModal);
        }
    }

    function renderUpgradeStep() {
        const stepContent = document.getElementById('upgrade-step-content');
        const roomOptions = document.getElementById('room-options-container');

        // Start with the room choices showing and everything else hidden
        roomOptions.style.display = 'block';
        stepContent.style.display = 'none';
        upgradeConfirmationText.style.display = 'none';
        upgradeDetailsTextarea.style.display = 'none';
        upgradeNextBtn.style.display = 'none';
        upgradeConfirmBtn.style.display = 'none';

        switch (upgradeState.step) {
            case 'selection':
                break;
            case 'confirmation':
                roomOptions.style.display = 'none';
                stepContent.style.display = 'block';
                upgradeConfirmationText.textContent = `Are you sure you want to upgrade to ${upgradeState.selectedRoom}?`;
                upgradeConfirmationText.style.display = 'block';
                upgradeNextBtn.style.display = 'inline-block';
                break;
            case 'details':
                roomOptions.style.display = 'none';
                stepContent.style.display = 'block';
                upgradeDetailsTextarea.style.display = 'block';
                upgradeConfirmBtn.style.display = 'inline-block';
                break;
        }
    }

    // Attach this handler to the upgrade button
    upgradeRoomBtn.addEventListener('click', () => {
        const code = prompt("Please enter the confirmation code for the reservation you wish to upgrade:");
        if (!code) return; // User cancelled

        const formattedCode = code.startsWith('#') ? code : `#${code}`;

        const reservation = reservations.find(res => res.confirmationCode === formattedCode);

        if (reservation) {
            activeReservationId = reservation.id;
            initializeUpgradeModal(reservation.id);
            openModal(upgradeModal);
        } else {
            alert("Error: No reservation found with that confirmation code.");
        }
    });

    const keyNameForm = document.getElementById('key-name-form');
    const keyNameInput = document.getElementById('key-name-input');
    const keyError = document.getElementById('key-error');
    const keyResult = document.getElementById('key-result');

    // Step 1: open the key window and ask for a name
    digitalKeyLink.addEventListener('click', (e) => {
        e.preventDefault();
        keyNameForm.style.display = 'flex';
        keyResult.style.display = 'none';
        keyError.style.display = 'none';
        keyNameInput.value = '';
        openModal(barcodeModal);
        keyNameInput.focus();
    });

    // Step 2: find the guest and make their own QR code
    keyNameForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const guest = findGuest(keyNameInput.value);

        if (!guest) {
            keyError.textContent = `No guest named "${keyNameInput.value}" found.`;
            keyError.style.display = 'block';
            return;
        }

        // Each guest's message is different, so each QR code is different
        const qr = qrcode(0, 'M');
        qr.addData(`Ocean Vista Hotel room key for ${guest.guestName}, room ${guest.roomNumber} (${guest.roomType}), confirmation ${guest.confirmationCode}`);
        qr.make();
        document.getElementById('qrcode').innerHTML = qr.createSvgTag({ cellSize: 6, margin: 2, scalable: true });
        document.getElementById('qrcode-label').textContent = `${guest.guestName} \u00b7 ${guest.confirmationCode}`;

        keyNameForm.style.display = 'none';
        keyError.style.display = 'none';
        keyResult.style.display = 'block';
    });

    mobileAccessLink.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(mobileAccessInputModal);
        reservationError.style.display = 'none'; // Hide previous errors
        reservationNameInput.value = ''; // Clear input
    });

    findReservationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const foundReservation = findGuest(reservationNameInput.value);

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
        scheduleHtml += `<li><strong>${checkOutDateFormatted} (Check-out):</strong> Enjoy breakfast, prepare for departure.</li></ul>`;

        plannerContent.innerHTML = `
            <h2>${reservation.guestName}'s Stay Planner</h2>
            <p><strong>Confirmation:</strong> ${reservation.confirmationCode}</p>
            <p><strong>Room Number:</strong> ${reservation.roomNumber}</p>
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
