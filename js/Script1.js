// <!-- Linga Sai Srilaxmi N01653528 -->
// <!-- Sadhana Madepelli N01651380 -->
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact_form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const time = document.getElementById('time').value.trim();
        const classtype = document.getElementById('input_11').value.trim();
        const numPeople = document.getElementById('num_people').value.trim();
        const dateEvent = document.getElementById('date_event').value.trim();

        // Email validation regex pattern
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Phone number validation regex pattern
        const phoneRegex = /^\d{10}$/;

        // Check if any required field is empty
        if (name === '' || email === '' || phone === '' || time === '' || classtype === '' || numPeople === '' || dateEvent === '') {
            alert('Please fill in all required fields.');
            return;
        }

        // Check if email format is valid
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Check if phone number format is valid
        if (!phoneRegex.test(phone)) {
            alert('Please enter a valid 10-digit phone number.');
            return;
        }

        if (confirm('Are you sure you want to submit the form?')) {
            // If user confirms, submit the form
            form.submit();
            alert("form submitted successfully");
        }
    });
});



