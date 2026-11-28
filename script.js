document.addEventListener('DOMContentLoaded', () => {
    // --- DATA ---
    const reservations = [
        { id: 1, guestName: 'Michael Saji', confirmationCode: '#A735B', roomNumber: 601, roomType: 'Suite King', nights: 1, guestCount: 4, phone: '555-0101', email: 'michael.saji@example.com', rowColor: 'var(--color-row1)', icon: 'fa-sun' },
        { id: 2, guestName: 'David Lee & Sarah Brown', confirmationCode: '#A70B', roomNumber: 404, roomType: 'Deluxe Queen', nights: 1, guestCount: 9, phone: '555-0102', email: 'david.lee.sarah.brown@example.com', rowColor: 'var(--color-row2)', icon: 'fa-ship' },
        { id: 3, guestName: 'David Lee', confirmationCode: '#700B', roomNumber: 602, roomType: 'Premier Suite', nights: 3, guestCount: 5, phone: '555-0103', email: 'david.lee@example.com', rowColor: 'var(--color-row3)', icon: 'fa-cloud' },
        { id: 4, guestName: 'James Wilson', confirmationCode: '#EXETUBLE', roomNumber: 212, roomType: 'Standard King', nights: 4, guestCount: 1, phone: '555-0104', email: 'james.wilson@example.com', rowColor: 'var(--color-row4)', icon: 'fa-umbrella-beach' },
        { id: 5, guestName: 'Jenjamin Green', confirmationCode: '#A728IE', roomNumber: 505, roomType: 'Junior Suite', nights: 3, guestCount: 3, phone: '555-0105', email: 'jenjamin.green@example.com', rowColor: 'var(--color-row5)', icon: 'fa-gem' },
        { id: 6, guestName: 'Emily Clark', confirmationCode: '#C123D', roomNumber: 208, roomType: 'Standard Queen', nights: 2, guestCount: 1, phone: '555-0106', email: 'emily.clark@example.com', rowColor: 'var(--color-row1)', icon: 'fa-star' },
        { id: 7, guestName: 'Michael Scott', confirmationCode: '#D456E', roomNumber: 901, roomType: 'Presidential Suite', nights: 1, guestCount: 2, phone: '555-0107', email: 'michael.scott@example.com', rowColor: 'var(--color-row2)', icon: 'fa-crown' },
        { id: 8, guestName: 'Jessica Day', confirmationCode: '#F789G', roomNumber: 710, roomType: 'Loft', nights: 5, guestCount: 1, phone: '555-0108', email: 'jessica.day@example.com', rowColor: 'var(--color-row3)', icon: 'fa-couch' },
        { id: 9, guestName: 'Walter White', confirmationCode: '#H012I', roomNumber: 215, roomType: 'Standard King', nights: 3, guestCount: 2, phone: '555-0109', email: 'walter.white@example.com', rowColor: 'var(--color-row4)', icon: 'fa-flask' },
        { id: 10, guestName: 'Liz Lemon', confirmationCode: '#J345K', roomNumber: 407, roomType: 'Deluxe King', nights: 2, guestCount: 1, phone: '555-0110', email: 'liz.lemon@example.com', rowColor: 'var(--color-row5)', icon: 'fa-pencil-alt' },
        { id: 11, guestName: 'Ron Swanson', confirmationCode: '#L678M', roomNumber: 801, roomType: 'Cabin', nights: 7, guestCount: 1, phone: '555-0111', email: 'ron.swanson@example.com', rowColor: 'var(--color-row1)', icon: 'fa-tree' },
        { id: 12, guestName: 'Arya Stark', confirmationCode: '#N901O', roomNumber: 204, roomType: 'Single', nights: 1, guestCount: 1, phone: '555-0112', email: 'arya.stark@example.com', rowColor: 'var(--color-row2)', icon: 'fa-user-ninja' },
        { id: 13, guestName: 'Sherlock Holmes', confirmationCode: '#P234Q', roomNumber: 321, roomType: 'Study', nights: 4, guestCount: 2, phone: '555-0113', email: 'sherlock.holmes@example.com', rowColor: 'var(--color-row3)', icon: 'fa-search' },
        { id: 14, guestName: 'Dana Scully', confirmationCode: '#R567S', roomNumber: 218, roomType: 'Standard Queen', nights: 2, guestCount: 1, phone: '555-0114', email: 'dana.scully@example.com', rowColor: 'var(--color-row4)', icon: 'fa-satellite' },
        { id: 15, guestName: 'Fox Mulder', confirmationCode: '#T890U', roomNumber: 219, roomType: 'Standard Queen', nights: 2, guestCount: 1, phone: '555-0115', email: 'fox.mulder@example.com', rowColor: 'var(--color-row5)', icon: 'fa-pastafarianism' },
        { id: 16, guestName: 'Gung Gung and Poh Poh', confirmationCode: '#GGPP1', roomNumber: 902, roomType: 'Deluxe King', nights: 50, guestCount: 2, phone: '555-0116', email: 'gung.gung.and.poh.poh@example.com', rowColor: 'var(--color-row1)', icon: 'fa-users' },
		{ id: 17, guestName: 'Evelyn Holman', confirmationCode: '#148EH', roomNumber: 508, roomType: 'Junior Suite', nights: 21, guestCount: 1, phone: '555-0117', email: 'evelyn.holman@example.com', rowColor: 'var(--color-row5)', icon: 'fa-book' },
        { id: 18, guestName: 'Kai-Mah', confirmationCode: '#KM18A', roomNumber: 412, roomType: 'Deluxe Queen', nights: 3, guestCount: 1, phone: '555-0118', email: 'kai.mah@example.com', rowColor: 'var(--color-row3)', icon: 'fa-star' },
        { id: 19, guestName: 'Alexander and Eliza Hamilton', confirmationCode: '#AEH10', roomNumber: 510, roomType: 'Junior Suite', nights: 3, guestCount: 2, phone: '555-0119', email: 'alexander.eliza.hamilton@example.com', rowColor: 'var(--color-row4)', icon: 'fa-feather' },
        { id: 20, guestName: 'Charlie Brown and Snoopy', confirmationCode: '#CBSNP', roomNumber: 206, roomType: 'Standard Queen', nights: 4, guestCount: 2, phone: '555-0120', email: 'charlie.brown.snoopy@example.com', rowColor: 'var(--color-row5)', icon: 'fa-dog' },
        { id: 21, guestName: 'Lucy Saji', confirmationCode: '#LUCY5', roomNumber: 209, roomType: 'Single', nights: 2, guestCount: 1, phone: '555-0121', email: 'lucy.saji@example.com', rowColor: 'var(--color-row1)', icon: 'fa-heart' }
	];

    // --- THE HOTEL BUILDING ---
    // Each floor has a number, a fun name and how many rooms it has.
    // A room's floor is the first digit of its room number: room 321 is on floor 3.
    // Floor 1 is the lobby: it has no guest rooms, just places to visit.
    const hotelFloors = [
        { floor: 1, name: 'Lobby', roomCount: 0, layout: 'lobby',
          // Where each place sits on the lobby floor plan: the entrance is along the bottom
          plan: ['coral elevator dimsum', 'tea lounge gelato', 'gift desk luggage', 'entrance entrance entrance'],
          places: [
            // "area" says where each place sits on the lobby floor plan
            { name: 'The Coral Grill', area: 'coral', kind: 'restaurant', icon: 'fa-fish', about: 'Restaurant: seafood by the sea.' },
            { name: 'Elevators', area: 'elevator', kind: 'elevator', icon: 'fa-elevator', about: 'Up to the guest floors and the rooftop.' },
            { name: 'Dragon Pearl Dim Sum', area: 'dimsum', kind: 'restaurant', icon: 'fa-bowl-rice', about: 'Restaurant: dumplings and buns on spinning tables.' },
            { name: 'Seashell Tea Lounge', area: 'tea', kind: 'restaurant', icon: 'fa-mug-hot', about: 'Restaurant: tea and little cakes, pinkies up.' },
            { name: 'Lounge', area: 'lounge', kind: 'lounge', icon: 'fa-couch', about: 'Comfy sofas and a fish tank to wait by.' },
            { name: 'Gelato Whirlpool', area: 'gelato', kind: 'restaurant', icon: 'fa-ice-cream', about: 'Restaurant: ice cream swirled round and round.' },
            { name: 'Gift Shop', area: 'gift', kind: 'shop', icon: 'fa-gift', about: 'Sunglasses, postcards and rubber ducks.' },
            { name: 'Front Desk', area: 'desk', kind: 'desk', icon: 'fa-bell-concierge', about: 'Where guests check in. That is you!' },
            { name: 'Luggage Room', area: 'luggage', kind: 'shop', icon: 'fa-suitcase', about: 'Bags wait here until rooms are ready.' },
            { name: 'Main Entrance', area: 'entrance', kind: 'entrance', icon: 'fa-door-open', about: 'Big glass doors that open onto the beach.' }
        ] },
        { floor: 2, name: 'Beach Floor', roomCount: 24 },
        { floor: 3, name: 'Library Floor', roomCount: 24 },
        { floor: 4, name: 'Coral Floor', roomCount: 20 },
        { floor: 5, name: 'Starfish Floor', roomCount: 16 },
        { floor: 6, name: 'Seagull Floor', roomCount: 12 },
        { floor: 7, name: 'Cloud Floor', roomCount: 12 },
        { floor: 8, name: 'Treetop Floor', roomCount: 8 },
        { floor: 9, name: 'Penthouse', roomCount: 4 },
        { floor: 10, name: 'Rooftop', roomCount: 0, layout: 'rooftop',
          // Where each place sits on the rooftop: the ocean view is along the top edge
          plan: ['view view view', 'moon pool pizza', 'sushi pool elevator'],
          places: [
            { name: 'Ocean View Deck', area: 'view', kind: 'lounge', icon: 'fa-binoculars', about: 'Look out over the whole ocean. You might spot a dolphin!' },
            { name: 'Midnight Moon Café', area: 'moon', kind: 'restaurant', icon: 'fa-moon', about: 'Rooftop restaurant: dinner under the stars.' },
            { name: 'Rooftop Pool', area: 'pool', kind: 'pool', icon: 'fa-person-swimming', about: 'A pool on the roof, with the whole ocean to look at.' },
            { name: 'Mermaid Lagoon Pizza', area: 'pizza', kind: 'restaurant', icon: 'fa-pizza-slice', about: 'Rooftop restaurant: pizza by the rooftop pool.' },
            { name: 'Submarine Sushi Bar', area: 'sushi', kind: 'restaurant', icon: 'fa-water', about: 'Rooftop restaurant: sushi with an ocean view.' },
            { name: 'Elevators', area: 'elevator', kind: 'elevator', icon: 'fa-elevator', about: 'Back down to the guest floors and the lobby.' }
        ] }
    ];

    function floorOf(roomNumber) {
        return Math.floor(roomNumber / 100);
    }

    // The floor a room is on, from the floors list, e.g. the Library Floor for room 221
    function floorFor(roomNumber) {
        return hotelFloors.find(f => f.floor === floorOf(roomNumber))
            || { floor: floorOf(roomNumber), name: `Floor ${floorOf(roomNumber)}` };
    }

    // A copy of the full guest list. Checking in removes a guest from the
    // list on screen, but they still need their key and their planner.
    const allGuests = [...reservations];

    // Find a guest by name: an exact name first, then part of a name
    function findGuest(name) {
        const searchName = name.trim().toLowerCase();
        return allGuests.find(g => g.guestName.toLowerCase() === searchName)
            || allGuests.find(g => g.guestName.toLowerCase().includes(searchName));
    }

    // Say "1 GUEST" but "2 GUESTS": add an S only when there's more than one
    function plural(count, word) {
        return `${count} ${word}${count === 1 ? '' : 'S'}`;
    }

    // --- SOUNDS ---
    // A two-note "ping-pong" made by the browser itself (no sound files needed).
    let audioContext = null;

    function playNote(frequency, startTime, length) {
        const oscillator = audioContext.createOscillator();
        const volume = audioContext.createGain();
        oscillator.type = 'sine';
        oscillator.frequency.value = frequency;
        // Start loud, then fade out quickly, like a bell
        volume.gain.setValueAtTime(0.3, startTime);
        volume.gain.exponentialRampToValueAtTime(0.001, startTime + length);
        oscillator.connect(volume);
        volume.connect(audioContext.destination);
        oscillator.start(startTime);
        oscillator.stop(startTime + length);
    }

    function playPingPong(firstNote, secondNote) {
        try {
            if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
            if (audioContext.state === 'suspended') audioContext.resume();
            const now = audioContext.currentTime;
            playNote(firstNote, now, 0.25);          // ping
            playNote(secondNote, now + 0.15, 0.35);  // pong
        } catch (err) {
            // No sound available: the app still works, just quietly
        }
    }

    // Each kind of event has its own little tune
    const sounds = {
        arrival: () => playPingPong(988, 784),      // ding-dong, like a doorbell
        newRequest: () => playPingPong(1047, 880),  // ping-pong, high
        done: () => playPingPong(660, 990),         // pong-PING, going up: well done!
        checkIn: () => playPingPong(784, 1175),     // happy rising chime
        newBooking: () => playPingPong(880, 1047),  // bright ping-pong
        chat: () => playPingPong(1319, 1047)        // quick high ping for a chat message
    };

    // A date as "2026-11-27", so two dates can be compared easily
    function dateKey(date) {
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${date.getFullYear()}-${month}-${day}`;
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
    const serviceRequestsModal = document.getElementById('service-requests-modal');
    const restaurantModal = document.getElementById('restaurant-modal');
    const hotelMapModal = document.getElementById('hotel-map-modal');
    const newReservationModal = document.getElementById('new-reservation-modal');
    const modals = [checkInModal, roomsModal, upgradeModal, barcodeModal, mobileAccessInputModal, mobilePlannerModal, checkedInModal, newReservationModal, serviceRequestsModal, restaurantModal, hotelMapModal];
    const checkInModalText = document.getElementById('check-in-modal-text');
    const confirmCheckInBtn = document.getElementById('confirm-check-in-btn');
    const contactInfoBtn = document.getElementById('contact-info-btn');
    const contactInfo = document.getElementById('contact-info');
    const plannerContent = document.getElementById('planner-content');
    const availableRoomsBtn = document.getElementById('available-rooms-btn');
    const upgradeRoomBtn = document.getElementById('upgrade-room-btn');
    const checkedInBtn = document.getElementById('checked-in-btn');
    const checkedInList = document.getElementById('checked-in-list');
    const serviceRequestsBtn = document.getElementById('service-requests-btn');
    const serviceRequestsList = document.getElementById('service-requests-list');
    const serviceScore = document.getElementById('service-score');
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
                        <p class="guest-name">${res.guestName}${arrivalQueue.includes(res) ? ' <span class="arrived-badge">HERE NOW</span>' : ''}</p>
                        <p class="conf-code">CONFIRMATION: ${res.confirmationCode}, ${plural(res.guestCount, 'GUEST')}</p>
                    </div>
                    <div class="room-info">
                        <p class="details">ROOM ${res.roomNumber} &middot; ${res.roomType}, ${plural(res.nights, 'NIGHT')}</p>
                        <p class="floor-name"><i class="fas fa-building"></i> ${floorFor(res.roomNumber).name} &middot; Floor ${floorOf(res.roomNumber)}</p>
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
            confirmationMsg.classList.remove('show'); // clear the last guest's message
            checkInModalText.textContent = `Ready to check in ${reservation.guestName}? Room ${reservation.roomNumber} (${reservation.roomType}) on the ${floorFor(reservation.roomNumber).name}`;

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
        // 1. Remember exactly which guest we are checking in, right now.
        //    The later steps use this guest, never the "active guest" note,
        //    because that note changes as soon as another window is opened.
        const guest = reservations.find(r => r.id === activeReservationId);
        if (!guest) return; // already checked in (e.g. Confirm pressed twice)
        activeReservationId = null;

        // 2. Check them in straight away, so there is no moment where they are
        //    half checked in. Only the message and the fade-out wait.
        reservations.splice(reservations.indexOf(guest), 1);
        removeFromArrivalQueue(guest);
        makeServiceRequests(guest);
        updateCheckedInCount();

        // 3. Show the success message
        sounds.checkIn();
        confirmationMsg.textContent = 'Check-in Successful!';
        confirmationMsg.classList.add('show');

        // 4. After 2 seconds, hide the message and fade out this guest's row
        setTimeout(() => {
            confirmationMsg.classList.remove('show');
            // Close the window unless another guest's window was opened meanwhile
            if (activeReservationId === null) closeModal(checkInModal);

            // Look the row up now, in case the list was redrawn in the meantime
            const row = document.getElementById(`res-${guest.id}`);
            if (row) {
                row.classList.add('fade-out');               // fade (0.5s, set in CSS)
                setTimeout(() => row.remove(), 500);
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
        { roomType: 'Standard King', floor: 2 },
        { roomType: 'Standard Queen', floor: 2 },
        { roomType: 'Deluxe King', floor: 4 },
        { roomType: 'Junior Suite', floor: 5 }
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
    // Find the first free room on a floor, e.g. 101, 102, 103...
    // If that floor is full, try the next floor up.
    function findFreeRoom(floor) {
        for (const f of hotelFloors.filter(h => h.floor >= floor)) {
            for (let n = 1; n <= f.roomCount; n++) {
                const room = f.floor * 100 + n;
                if (!allGuests.some(g => g.roomNumber === room)) return room;
            }
        }
        return floor * 100 + 99; // the whole hotel is full!
    }

    addReservationBtn.addEventListener('click', () => {
        newGuestNameInput.value = '';
        openModal(newReservationModal);
        newGuestNameInput.focus();
    });

    // Make a new booking with a surprise room for this name, and show it
    function createReservation(name) {
        const choice = pickRandom(newRoomChoices);
        const newId = Math.max(0, ...allGuests.map(g => g.id)) + 1;

        const newReservation = {
            id: newId,
            guestName: name,
            confirmationCode: makeConfirmationCode(),
            roomNumber: findFreeRoom(choice.floor),
            roomType: choice.roomType,
            nights: 1 + Math.floor(Math.random() * 5), // 1 to 5 nights
            guestCount: 1,
            phone: `555-01${String(newId % 100).padStart(2, '0')}`,
            email: (name.toLowerCase().match(/[a-z]+/g) || ['guest']).join('.') + '@example.com',
            rowColor: `var(--color-row${(newId % 5) + 1})`,
            icon: pickRandom(newIcons)
        };

        // Add it to both lists: the one on screen and the full guest book
        reservations.push(newReservation);
        allGuests.push(newReservation);

        renderReservations();
        sounds.newBooking();

        // Make the new booking glow
        document.getElementById(`res-${newId}`).classList.add('new-row');
        return newReservation;
    }

    newReservationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        closeModal(newReservationModal);
        const newReservation = createReservation(newGuestNameInput.value.trim());
        // Scroll to the new booking
        document.getElementById(`res-${newReservation.id}`).scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    // In Game Mode, a new guest books a room every hour
    const ONE_HOUR = 60 * 60 * 1000;
    let bookingTimer = null;
    const newGuestNames = [
        'Maya Torres', 'Oliver Chen', 'Priya Patel', 'Noah Kim', 'Zoe Martin',
        'Leo Rossi', 'Ava Johnson', 'Sam Okafor', 'Mia Nguyen', 'Ethan Brooks',
        'Luna Garcia', 'Finn Murphy', 'Isla Novak', 'Kai Tanaka', 'Rosa Silva'
    ];

    function scheduleNextBooking() {
        if (!gameMode) return;
        bookingTimer = setTimeout(() => {
            if (!gameMode) return;
            // Pick a name that isn't already staying here
            const unused = newGuestNames.filter(n => !allGuests.some(g => g.guestName === n));
            const name = unused.length > 0 ? pickRandom(unused) : `Guest ${allGuests.length + 1}`;
            const booking = createReservation(name);
            showToast(`<i class="fas fa-calendar-plus"></i> New reservation: ${booking.guestName}, Room ${booking.roomNumber}!`);
            scheduleNextBooking();
        }, ONE_HOUR);
    }

    // --- SERVICE REQUESTS ---
    // When a guest checks in, they ask for one or two things.
    const serviceRequests = [];
    const requestIdeas = [
        'Extra pillows',
        'More towels',
        'An extra blanket',
        'Room service: a cheese pizza',
        'Wake-up call at 7 AM',
        'Fresh flowers for the room',
        'A beach umbrella',
        'Sand toys for the kids',
        'Fix the TV remote',
        'A bucket of ice',
        'Spicy hot Cheetos',
        'Late check-out, please'
    ];

    function makeServiceRequests(guest) {
        const howMany = 1 + Math.floor(Math.random() * 2); // 1 or 2
        const ideas = shuffleArray([...requestIdeas]).slice(0, howMany);
        ideas.forEach(text => serviceRequests.push({ guest, text, done: false }));
        updateServiceRequestCount();
        wiggleServiceButton();
    }

    let requestsCompleted = 0; // the game score

    function updateServiceRequestCount() {
        const waiting = serviceRequests.filter(r => !r.done).length;
        serviceRequestsBtn.textContent = `SERVICE REQUESTS: ${waiting}`;
        serviceScore.innerHTML = `<i class="fas fa-star"></i> Requests done: ${requestsCompleted}`;
    }

    // Make the button wiggle so you notice a new request
    function wiggleServiceButton() {
        serviceRequestsBtn.classList.remove('wiggle');
        void serviceRequestsBtn.offsetWidth; // restart the animation
        serviceRequestsBtn.classList.add('wiggle');
    }

    function showServiceRequests() {
        serviceRequestsList.innerHTML = '';
        if (serviceRequests.length === 0) {
            serviceRequestsList.innerHTML = '<li>No service requests yet. Check in a guest!</li>';
            return;
        }
        // Waiting requests first, then the 5 most recently finished ones
        const waiting = serviceRequests.filter(r => !r.done);
        const finished = serviceRequests.filter(r => r.done).slice(-5).reverse();
        [...waiting, ...finished].forEach(request => {
            const item = document.createElement('li');
            if (request.done) item.classList.add('done');
            item.innerHTML = `
                <span><strong>${request.guest.guestName}</strong> &middot; Room ${request.guest.roomNumber}: ${request.text}</span>
                ${request.done ? '<span class="done-mark"><i class="fas fa-check"></i> Done</span>' : '<button class="done-btn">Done</button>'}
            `;
            const doneBtn = item.querySelector('.done-btn');
            if (doneBtn) {
                doneBtn.addEventListener('click', () => {
                    request.done = true;
                    requestsCompleted++;
                    sounds.done();
                    reportDelivery(request);
                    updateServiceRequestCount();
                    showServiceRequests();
                });
            }
            serviceRequestsList.appendChild(item);
        });
    }

    serviceRequestsBtn.addEventListener('click', () => {
        showServiceRequests();
        openModal(serviceRequestsModal);
    });

    // The game: every 8 to 15 seconds, a checked-in guest asks for something new
    const MAX_WAITING_REQUESTS = 10;

    function newRequestFromRandomGuest() {
        if (!gameMode) return;
        const checkedIn = getCheckedInGuests();
        const waiting = serviceRequests.filter(r => !r.done).length;

        if (checkedIn.length > 0 && waiting < MAX_WAITING_REQUESTS) {
            serviceRequests.push({ guest: pickRandom(checkedIn), text: pickRandom(requestIdeas), done: false });
            updateServiceRequestCount();
            wiggleServiceButton();
            sounds.newRequest();
            // If the list is open, show the new request right away
            if (serviceRequestsModal.style.display === 'flex') showServiceRequests();
        }
        scheduleNextRequest();
    }

    function scheduleNextRequest() {
        if (!gameMode) return;
        const seconds = 8 + Math.floor(Math.random() * 8); // 8 to 15
        requestTimer = setTimeout(newRequestFromRandomGuest, seconds * 1000);
    }

    // --- ARRIVALS AND THE LINE (Game Mode) ---
    // Every 12 to 20 seconds, a guest with a booking arrives at the desk
    // and joins the end of the line.
    const arrivalQueue = [];
    const arrivalQueueBox = document.getElementById('arrival-queue');
    const arrivalQueueList = document.getElementById('arrival-queue-list');

    function newArrival() {
        if (!gameMode) return;
        const notArrivedYet = reservations.filter(r => !arrivalQueue.includes(r));
        if (notArrivedYet.length > 0) {
            const guest = pickRandom(notArrivedYet);
            arrivalQueue.push(guest);
            showToast(`<i class="fas fa-bell-concierge"></i> ${guest.guestName} has arrived at the front desk!`);
            sounds.arrival();
            renderArrivalQueue();
            renderReservations();
        }
        scheduleNextArrival();
    }

    function scheduleNextArrival() {
        if (!gameMode) return;
        const seconds = 12 + Math.floor(Math.random() * 9); // 12 to 20
        arrivalTimer = setTimeout(newArrival, seconds * 1000);
    }

    function renderArrivalQueue() {
        arrivalQueueList.innerHTML = '';
        arrivalQueue.forEach(guest => {
            const item = document.createElement('li');
            item.innerHTML = `<strong>${guest.guestName}</strong> &middot; Room ${guest.roomNumber}`;
            item.addEventListener('click', () => openCheckInModal(guest.id));
            arrivalQueueList.appendChild(item);
        });
        arrivalQueueBox.style.display = arrivalQueue.length > 0 ? 'block' : 'none';
    }

    function removeFromArrivalQueue(guest) {
        const index = arrivalQueue.indexOf(guest);
        if (index > -1) {
            arrivalQueue.splice(index, 1);
            renderArrivalQueue();
        }
    }

    // --- POP-UP MESSAGE ---
    const toast = document.getElementById('toast');
    let toastTimer = null;

    function showToast(html) {
        toast.innerHTML = html;
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove('show'), 3500);
    }

    // --- GAME MODE SWITCH ---
    // Anything that runs on a timer only happens while Game Mode is on.
    let gameMode = false;
    let requestTimer = null;
    let arrivalTimer = null;
    const gameModeToggle = document.getElementById('game-mode-toggle');

    gameModeToggle.addEventListener('change', () => {
        gameMode = gameModeToggle.checked;
        clearTimeout(requestTimer);
        clearTimeout(arrivalTimer);
        clearTimeout(chatTimer);
        clearTimeout(bookingTimer);
        if (gameMode) {
            scheduleNextChat();
            scheduleNextBooking();
            showToast('<i class="fas fa-gamepad"></i> Game Mode ON! Guests will arrive and ask for things.');
            scheduleNextArrival();
            scheduleNextRequest();
        } else {
            showToast('<i class="fas fa-gamepad"></i> Game Mode off. The hotel is quiet.');
        }
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
                item.innerHTML = `<i class="fas ${g.icon}"></i> <strong>${g.guestName}</strong> &middot; Room ${g.roomNumber}, ${g.roomType}, ${plural(g.nights, 'NIGHT')}`;

                // Their restaurant bookings, earliest first
                restaurantBookings
                    .filter(b => b.guest === g)
                    .sort((a, b) => a.day.localeCompare(b.day) || a.mealTime - b.mealTime)
                    .forEach(b => {
                        const dayLabel = new Date(b.day + 'T12:00').toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
                        item.innerHTML += `<span class="checked-in-meal"><i class="fas fa-utensils"></i> ${mealTimes[b.mealTime].meal} at ${b.restaurant.name}, ${dayLabel}, ${mealTimes[b.mealTime].time}</span>`;
                    });
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

    // --- HOTEL MAP ---
    const hotelMapLink = document.getElementById('hotel-map-link');
    const floorSelect = document.getElementById('floor-select');
    const floorSummary = document.getElementById('floor-summary');
    const floorGrid = document.getElementById('floor-grid');
    const roomInfo = document.getElementById('room-info');
    const mapLegend = document.querySelector('#hotel-map-modal .map-legend');

    // Fill the dropdown with every floor, top floor first like a real building
    [...hotelFloors].reverse().forEach(f => {
        const option = document.createElement('option');
        option.value = f.floor;
        option.textContent = `Floor ${f.floor}: ${f.name}`;
        floorSelect.appendChild(option);
    });
    floorSelect.value = 1;

    // A clickable square for a place (not a guest room), e.g. the Gift Shop
    function makePlace(place) {
        const cell = document.createElement('button');
        cell.className = `room-cell place ${place.kind}`;
        cell.innerHTML = `<i class="fas ${place.icon}"></i><span>${place.name}</span>`;
        cell.addEventListener('click', () => { roomInfo.textContent = `${place.name}: ${place.about}`; });
        return cell;
    }

    function drawFloor() {
        const floor = hotelFloors.find(f => f.floor === Number(floorSelect.value));
        floorGrid.innerHTML = '';
        const places = floor.places || [];

        // The lobby and the rooftop are open floor plans, not hallways: each
        // place sits in its own spot (its "area") on the floor's plan.
        if (floor.plan) {
            floorGrid.className = `floor-grid open-plan map-${floor.layout}`;
            floorGrid.style.gridTemplateAreas = floor.plan.map(row => `"${row}"`).join(' ');
            mapLegend.style.display = 'none';
            places.forEach(place => {
                const cell = makePlace(place);
                cell.style.gridArea = place.area;
                floorGrid.appendChild(cell);
            });
            floorSummary.textContent = floor.layout === 'lobby'
                ? 'No guest rooms here: this is where everyone comes in!'
                : 'No guest rooms up here: just restaurants, a pool and the best view!';
            roomInfo.textContent = 'Click a place to find out what it is.';
            return;
        }
        floorGrid.className = 'floor-grid';
        floorGrid.style.gridTemplateAreas = '';
        mapLegend.style.display = 'flex';

        // Like a real hotel: odd rooms on the left, even rooms on the right,
        // with a hallway down the middle and the elevator and stairs at the end.
        const firstRow = 1;
        const rows = Math.ceil(floor.roomCount / 2);
        let taken = 0;

        const lift = document.createElement('div');
        lift.className = 'map-elevator';
        lift.style.gridRow = String(firstRow);
        lift.innerHTML = '<i class="fas fa-stairs"></i> Stairs &nbsp; <i class="fas fa-elevator"></i> Elevator';
        floorGrid.appendChild(lift);

        const hallway = document.createElement('div');
        hallway.className = 'map-hallway';
        hallway.style.gridRow = `${firstRow + 1} / ${firstRow + rows + 1}`;
        hallway.innerHTML = '<span>HALLWAY</span>';
        floorGrid.appendChild(hallway);

        for (let n = 1; n <= floor.roomCount; n++) {
            const roomNumber = floor.floor * 100 + n;
            const guest = allGuests.find(g => g.roomNumber === roomNumber);
            const checkedIn = guest && !reservations.includes(guest);
            if (guest) taken++;

            const cell = document.createElement('button');
            cell.className = 'room-cell ' + (guest ? (checkedIn ? 'checked-in' : 'booked') : 'empty');
            cell.style.gridColumn = n % 2 === 1 ? '1' : '3';                  // odd left, even right
            cell.style.gridRow = String(firstRow + Math.ceil(n / 2));
            cell.innerHTML = `<span>${roomNumber}</span>${guest ? `<i class="fas ${guest.icon}"></i>` : ''}`;
            cell.addEventListener('click', () => {
                roomInfo.textContent = guest
                    ? `Room ${roomNumber}: ${guest.guestName} \u00b7 ${guest.roomType} \u00b7 ${checkedIn ? 'Checked in' : 'Booked today'}`
                    : `Room ${roomNumber} is empty.`;
            });
            floorGrid.appendChild(cell);
        }
        floorSummary.textContent = `${taken} of ${floor.roomCount} rooms taken`;
        roomInfo.textContent = 'Click a room to see who is staying there.';
    }

    floorSelect.addEventListener('change', drawFloor);

    hotelMapLink.addEventListener('click', (e) => {
        e.preventDefault();
        drawFloor();
        openModal(hotelMapModal);
    });

    // --- RESTAURANT RESERVATIONS ---
    const restaurantLink = document.getElementById('restaurant-link');
    const restaurantForm = document.getElementById('restaurant-form');
    const restaurantNameInput = document.getElementById('restaurant-name-input');
    const restaurantResult = document.getElementById('restaurant-result');

    const restaurantChoices = document.getElementById('restaurant-choices');

    // Every table booked so far: which restaurant, the name given, the hotel
    // guest it belongs to (or null for visitors), and the day and meal time
    const restaurantBookings = [];

    // Meal times you can pick, in order through the day.
    // "hour" is when the meal starts, on a 24-hour clock (18 = 6 PM).
    const mealTimes = [
        { meal: 'Breakfast', time: '8:00 AM', hour: 8 },
        { meal: 'Lunch', time: '12:00 PM', hour: 12 },
        { meal: 'Tea time', time: '3:00 PM', hour: 15 },
        { meal: 'Dinner', time: '6:00 PM', hour: 18 },
        { meal: 'Late dinner', time: '8:00 PM', hour: 20 }
    ];
    const weekdayNames = ['Sundays', 'Mondays', 'Tuesdays', 'Wednesdays', 'Thursdays', 'Fridays', 'Saturdays'];

    // The hotel's restaurants:
    //   tables     - how many tables each meal time has
    //   meals      - which meal times it is open for (numbers from mealTimes)
    //   closedDays - days of the week it is closed (0 = Sunday, 1 = Monday, ...)
    const restaurants = [
        { name: 'The Coral Grill', icon: 'fa-fish', about: 'seafood by the sea', tables: 4, meals: [1, 3, 4], closedDays: [] },
        { name: 'Dragon Pearl Dim Sum', icon: 'fa-bowl-rice', about: 'dumplings and buns on spinning tables', tables: 3, meals: [0, 1, 2], closedDays: [] },
        { name: 'Seashell Tea Lounge', icon: 'fa-mug-hot', about: 'tea and little cakes, pinkies up', tables: 2, meals: [0, 2], closedDays: [] },
        { name: 'Submarine Sushi Bar', icon: 'fa-water', about: 'sushi with a rooftop ocean view', tables: 2, meals: [1, 3, 4], closedDays: [] },
        { name: 'Gelato Whirlpool', icon: 'fa-ice-cream', about: 'ice cream swirled round and round with sprinkles', tables: 5, meals: [1, 2, 3, 4], closedDays: [] },
        { name: 'Mermaid Lagoon Pizza', icon: 'fa-pizza-slice', about: 'pizza by the rooftop pool, mermaid tails optional', tables: 3, meals: [1, 3, 4], closedDays: [1], closedWhy: 'pool cleaning' },
        { name: 'Midnight Moon Café', icon: 'fa-moon', about: 'dinner under the stars on the rooftop', tables: 1, meals: [3, 4], closedDays: [] }
    ];

    const restaurantDay = document.getElementById('restaurant-day');
    const restaurantTime = document.getElementById('restaurant-time');
    let restaurantOpenedAt = new Date(); // when the RESTAURANT button was pressed

    // Has this meal time already started on this day? (checked against the
    // time the RESTAURANT button was pressed)
    function mealHasPassed(day, mealTime) {
        if (day !== dateKey(restaurantOpenedAt)) return false; // only today can be in the past
        const nowInHours = restaurantOpenedAt.getHours() + restaurantOpenedAt.getMinutes() / 60;
        return mealTimes[mealTime].hour <= nowInHours;
    }

    // Fill the day dropdown with today and the next 6 days
    function fillRestaurantDays() {
        restaurantDay.innerHTML = '<option value="">Pick a day</option>';
        for (let i = 0; i < 7; i++) {
            const day = new Date(restaurantOpenedAt);
            day.setDate(day.getDate() + i);
            const label = day.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
            const option = document.createElement('option');
            option.value = dateKey(day);
            option.textContent = i === 0 ? `Today (${label})` : i === 1 ? `Tomorrow (${label})` : label;
            // If every meal today has already started, today can't be picked
            if (i === 0 && mealTimes.every((m, t) => mealHasPassed(option.value, t))) {
                option.disabled = true;
                option.textContent += ' - no more meals today';
            }
            restaurantDay.appendChild(option);
        }
    }

    // Fill the time dropdown, greying out times that have passed on the chosen day
    function fillRestaurantTimes() {
        const picked = restaurantTime.value;
        restaurantTime.innerHTML = '<option value="">Pick a time</option>';
        mealTimes.forEach((m, t) => {
            const option = document.createElement('option');
            option.value = t;
            const passed = mealHasPassed(restaurantDay.value, t);
            option.disabled = passed;
            option.textContent = `${m.meal}, ${m.time}${passed ? ' (already started)' : ''}`;
            restaurantTime.appendChild(option);
        });
        // Keep the earlier choice if it is still possible
        if (picked !== '' && !mealHasPassed(restaurantDay.value, Number(picked))) restaurantTime.value = picked;
    }

    // How many tables a restaurant still has for one day and meal time
    function tablesLeft(restaurant, day, mealTime) {
        const booked = restaurantBookings.filter(b => b.restaurant === restaurant && b.day === day && b.mealTime === mealTime).length;
        return restaurant.tables - booked;
    }

    // Why a restaurant can't be booked for this day and time (or '' if it can)
    function whyNotAvailable(restaurant, day, mealTime) {
        const weekday = new Date(day + 'T12:00').getDay();
        if (restaurant.closedDays.includes(weekday)) {
            return `Closed on ${weekdayNames[weekday]}${restaurant.closedWhy ? ' for ' + restaurant.closedWhy : ''}`;
        }
        if (!restaurant.meals.includes(mealTime)) return `Not open for ${mealTimes[mealTime].meal.toLowerCase()}`;
        if (tablesLeft(restaurant, day, mealTime) <= 0) return 'FULL';
        return '';
    }

    // Show every restaurant with what it has for the chosen day and time
    function renderRestaurantChoices() {
        const day = restaurantDay.value;
        const mealTime = restaurantTime.value === '' ? null : Number(restaurantTime.value);
        const ready = day !== '' && mealTime !== null;
        const picked = restaurantForm.querySelector('input[name="restaurant"]:checked');
        restaurantChoices.innerHTML = '';

        restaurants.forEach((r, i) => {
            const why = ready ? whyNotAvailable(r, day, mealTime) : '';
            const canBook = ready && why === '';
            let status = 'Pick a day and time';
            if (ready) {
                const left = tablesLeft(r, day, mealTime);
                status = why || (left === 1 ? '1 table left' : `${left} tables left`);
            }
            const label = document.createElement('label');
            if (ready && !canBook) label.classList.add('full');
            if (!ready) label.classList.add('waiting');
            label.innerHTML = `
                <input type="radio" name="restaurant" value="${i}" ${canBook ? '' : 'disabled'} required>
                <i class="fas ${r.icon}"></i> ${r.name}
                <em class="tables-left">${status}</em>
                <span>${r.about}</span>
            `;
            // Keep the earlier choice if it is still possible
            if (canBook && picked && Number(picked.value) === i) label.querySelector('input').checked = true;
            restaurantChoices.appendChild(label);
        });
    }

    restaurantDay.addEventListener('change', () => { fillRestaurantTimes(); renderRestaurantChoices(); });
    restaurantTime.addEventListener('change', renderRestaurantChoices);

    restaurantLink.addEventListener('click', (e) => {
        e.preventDefault();
        restaurantOpenedAt = new Date(); // availability depends on when you open it
        restaurantForm.reset();
        fillRestaurantDays();
        fillRestaurantTimes();
        renderRestaurantChoices();
        restaurantForm.style.display = 'block';
        restaurantResult.style.display = 'none';
        openModal(restaurantModal);
    });

    restaurantForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const checked = restaurantForm.querySelector('input[name="restaurant"]:checked');
        if (!checked) return; // nothing could be picked (every restaurant closed or full)
        const chosen = restaurants[Number(checked.value)];
        const day = restaurantDay.value;
        const mealTime = Number(restaurantTime.value);
        // Double-check: the meal hasn't started and there's still a table
        if (mealHasPassed(day, mealTime) || whyNotAvailable(chosen, day, mealTime) !== '') return;

        const restaurant = chosen.name;
        sounds.newBooking();
        const name = restaurantNameInput.value.trim();

        // If the name belongs to a hotel guest, mention their room too
        const found = findGuest(name);
        const guest = found && found.guestName.toLowerCase() === name.toLowerCase() ? found : null;
        const roomNote = guest ? ` We'll find you in Room ${guest.roomNumber} if we need you.` : '';

        // Remember the booking: it uses one table at that day and time,
        // and the guest's planner can show it
        restaurantBookings.push({ restaurant: chosen, name, guest, day, mealTime });
        const when = `${restaurantDay.options[restaurantDay.selectedIndex].textContent} at ${mealTimes[mealTime].time}`;

        restaurantResult.innerHTML = `
            <p><i class="fas fa-check-circle"></i> <strong>Table booked!</strong></p>
            <p></p>
        `;
        // textContent shows the name exactly as typed
        restaurantResult.querySelectorAll('p')[1].textContent = `${restaurant} is ready for ${name}, ${when}.${roomNote}`;
        restaurantForm.style.display = 'none';
        restaurantResult.style.display = 'block';
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

        // This guest's restaurant bookings, earliest first
        const myBookings = restaurantBookings
            .filter(b => b.guest === reservation)
            .sort((a, b) => a.day.localeCompare(b.day) || a.mealTime - b.mealTime);

        // The bookings on one day, as extra lines for that day of the itinerary
        function mealsOn(date) {
            return myBookings
                .filter(b => b.day === dateKey(date))
                .map(b => `<span class="planner-meal"><i class="fas fa-utensils"></i> ${mealTimes[b.mealTime].meal} at ${b.restaurant.name}, ${mealTimes[b.mealTime].time}</span>`)
                .join('');
        }

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
            scheduleHtml += `<li><strong>${dayDateFormatted}:</strong> ${activity}${mealsOn(dayDate)}</li>`;
        }
        scheduleHtml += `<li><strong>${checkOutDateFormatted} (Check-out):</strong> Enjoy breakfast, prepare for departure.${mealsOn(checkOutDate)}</li></ul>`;

        plannerContent.innerHTML = `
            <h2>${reservation.guestName}'s Stay Planner</h2>
            <p><strong>Confirmation:</strong> ${reservation.confirmationCode}</p>
            <p><strong>Room Number:</strong> ${reservation.roomNumber}</p>
            <p><strong>Floor:</strong> ${floorFor(reservation.roomNumber).name} (Floor ${floorOf(reservation.roomNumber)})</p>
            <p><strong>Room Type:</strong> ${reservation.roomType}</p>
            <p><strong>Guests:</strong> ${reservation.guestCount}</p>
            <p><strong>Nights:</strong> ${reservation.nights}</p>
            <p><strong>Check-in:</strong> ${checkInDateFormatted}</p>
            <p><strong>Check-out:</strong> ${checkOutDateFormatted}</p>
            ${scheduleHtml}
            <h4>Your Restaurant Reservations:</h4>
            <ul id="planner-restaurants"></ul>
        `;

        // Show every table this guest has booked
        const plannerRestaurants = document.getElementById('planner-restaurants');
        if (myBookings.length === 0) {
            plannerRestaurants.innerHTML = '<li>None yet. Book a table with the RESTAURANT link!</li>';
        } else {
            myBookings.forEach(b => {
                const item = document.createElement('li');
                const dayLabel = new Date(b.day + 'T12:00').toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
                item.innerHTML = `<i class="fas ${b.restaurant.icon}"></i> <strong>${b.restaurant.name}</strong> &middot; ${dayLabel}, ${mealTimes[b.mealTime].time}`;
                plannerRestaurants.appendChild(item);
            });
        }
        openModal(mobilePlannerModal);
    }

    // --- HOUSEKEEPING CHAT ---
    // Housekeeping uses this chat to tell the front desk what they've done.
    const chatPanel = document.getElementById('chat-panel');
    const chatBubble = document.getElementById('chat-bubble');
    const chatClose = document.getElementById('chat-close');
    const chatMessages = document.getElementById('chat-messages');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatUnread = document.getElementById('chat-unread');
    let unreadCount = 0;
    let chatTimer = null;

    function chatIsOpen() {
        return chatPanel.style.display !== 'none';
    }

    function addChatMessage(text, from) {
        const message = document.createElement('div');
        message.className = `chat-message ${from}`;
        message.textContent = text;
        chatMessages.appendChild(message);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        if (from === 'housekeeping') {
            sounds.chat();
            if (!chatIsOpen()) {
                unreadCount++;
                chatUnread.textContent = unreadCount;
                chatUnread.style.display = 'inline-block';
            }
        }
    }

    // When a service request is done, Housekeeping says what they delivered
    function reportDelivery(request) {
        const who = `Room ${request.guest.roomNumber} for ${request.guest.guestName}`;
        const text = request.text.toLowerCase().includes('towel')
            ? `Towels delivered to ${who}! Fluffy and folded.`
            : `All done: "${request.text}" for ${who}.`;
        setTimeout(() => addChatMessage(text, 'housekeeping'), 800);
    }

    // Housekeeping answers when you write to them
    const housekeepingReplies = [
        'On it!',
        'Got it, thanks!',
        "We'll send someone right away.",
        'Sure thing, Front Desk!',
        'No problem. Our mops are ready!'
    ];

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addChatMessage(chatInput.value.trim(), 'front-desk');
        chatInput.value = '';
        setTimeout(() => addChatMessage(pickRandom(housekeepingReplies), 'housekeeping'), 1500);
    });

    // In Game Mode, Housekeeping sends funny updates now and then
    const housekeepingNews = [
        'Room 404 is clean and sparkly!',
        'We ran out of tiny soaps on floor 4. Sending more!',
        'Found a rubber duck in Room 208. Does anyone want it back?',
        'Snoopy is sleeping on the roof again.',
        'The elevator smells like popcorn. Investigating!',
        'Fresh sheets on the Seagull Floor are done.',
        'Someone built a pillow fort on the Treetop Floor. It is very good.',
        'Somebody left a sandcastle in the Lobby. It has a moat!',
        'We folded the towels into swans today!'
    ];

    function scheduleNextChat() {
        if (!gameMode) return;
        const seconds = 25 + Math.floor(Math.random() * 16); // 25 to 40
        chatTimer = setTimeout(() => {
            if (!gameMode) return;
            addChatMessage(pickRandom(housekeepingNews), 'housekeeping');
            scheduleNextChat();
        }, seconds * 1000);
    }

    chatBubble.addEventListener('click', () => {
        chatPanel.style.display = 'flex';
        chatBubble.style.display = 'none';
        unreadCount = 0;
        chatUnread.style.display = 'none';
        chatInput.focus();
    });

    chatClose.addEventListener('click', () => {
        chatPanel.style.display = 'none';
        chatBubble.style.display = 'flex';
    });

    // Housekeeping says hello when the page opens (quietly, no sound yet)
    const hello = document.createElement('div');
    hello.className = 'chat-message housekeeping';
    hello.textContent = "Hi Front Desk! This is Housekeeping. We'll tell you here when we deliver things.";
    chatMessages.appendChild(hello);

    // --- INITIALIZE ---
    renderReservations();
});
