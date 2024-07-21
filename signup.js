function register() {
    const username = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    // Check if user already exists
    const existingUser = localStorage.getItem(username);
    if (existingUser) {
        document.getElementById('message').innerText = 'User already exists!';
        return;
    }

    // Store user data in local storage
    const userData = { username, password };
    localStorage.setItem(username, JSON.stringify(userData));
    document.getElementById('message').innerText = 'Registration successful!';
    window.location.href = 'login.html';
}