document.getElementById('authForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'Muhamad Ramadan' && password === 'student-nf23') {
        alert('Login successful');
        window.location.href = 'success.html';
    } else {
        alert('Incorrect username or password');
    }
});