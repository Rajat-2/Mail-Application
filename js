document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const composeForm = document.getElementById('composeForm');
    const sentList = document.getElementById('sentList');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        // Validate login credentials (you can implement your own validation or use a backend)
        // For simplicity, assume successful login
        showMailApp();
    });

    composeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const to = document.getElementById('to').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        // Send email (you can implement sending logic here)
        // For simplicity, just add the email to the sent list
        const email = {
            to: to,
            subject: subject,
            message: message
        };
        addEmailToList(email);
        composeForm.reset();
    });

    function showMailApp() {
        document.getElementById('mailApp').style.display = 'block';
    }

    function addEmailToList(email) {
        const li = document.createElement('li');
        li.innerHTML = <strong>To:</strong> ${email.to}<br><strong>Subject:</strong> ${email.subject}<br><p>${email.message}</p>;
        sentList.appendChild(li);
    }
});