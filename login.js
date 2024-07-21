function login() {
    const username = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Retrieve user data from local storage
    const userData = localStorage.getItem(username);
    if (!userData) {
        document.getElementById('message').innerText = 'User not found!';
        return;
    }

    const parsedData = JSON.parse(userData);
    if (parsedData.password === password) {
        document.getElementById('message').innerText = 'Login successful!';
    } else {
        document.getElementById('message').innerText = 'Incorrect password!';
    }
    window.location.href = 'home.html';
}