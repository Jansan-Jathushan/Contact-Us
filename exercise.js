document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.getElementById('contactBtn');
    const contactModal = document.getElementById('contactModal');
    const closeBtn = document.querySelector('.close');
    const contactForm = document.getElementById('contactForm');

    const phoneRegex = /^\+94\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    contactBtn.addEventListener('click', () => {
        contactModal.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        contactModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === contactModal) {
            contactModal.style.display = 'none';
        }
    });

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const address = document.getElementById('address').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        let isValid = true;

        // Name validation
        if (name === '') {
            document.getElementById('nameError').innerText = 'Name is required.';
            isValid = false;
        } else {
            document.getElementById('nameError').innerText = '';
        }

        // Address validation
        if (address === '') {
            document.getElementById('addressError').innerText = 'Address is required.';
            isValid = false;
        } else {
            document.getElementById('addressError').innerText = '';
        }

        // Phone validation
        if (!phoneRegex.test(phone)) {
            document.getElementById('phoneError').innerText = 'Phone number must start with +94 and be followed by 9 digits.';
            isValid = false;
        } else {
            document.getElementById('phoneError').innerText = '';
        }

        // Email validation
        if (!emailRegex.test(email)) {
            document.getElementById('emailError').innerText = 'Email format is invalid.';
            isValid = false;
        } else {
            document.getElementById('emailError').innerText = '';
        }

        // Message validation
        if (message.length < 10) {
            document.getElementById('messageError').innerText = 'Message must be at least 10 characters long.';
            isValid = false;
        } else {
            document.getElementById('messageError').innerText = '';
        }

        if (isValid) {
            const contactData = {
                name,
                address,
                phone,
                email,
                message
            };

            localStorage.setItem('contactData', JSON.stringify(contactData));
            alert('Contact information submitted successfully!');
            contactModal.style.display = 'none';
            contactForm.reset();
        }
    });
});