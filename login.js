document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    // Check if user already exists
    const existingUser = localStorage.getItem(username);
    if (existingUser) {
        alert('User already exists! Please choose a different username.');
        return;
    }

    // Store user data in local storage
    const userData = { username, password };
    localStorage.setItem(username, JSON.stringify(userData));
    alert('Sign Up successful! You can now log in.');
    window.location.href = 'home.html';
});
