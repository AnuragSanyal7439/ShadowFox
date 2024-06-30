document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var usernameError = document.getElementById('usernameError');
    var passwordError = document.getElementById('passwordError');
    
    // Clear previous error messages
    usernameError.textContent = '';
    passwordError.textContent = '';
    
    var isValid = true;
    
    // Basic validation
    if (username === '') {
        usernameError.textContent = 'Username cannot be empty';
        usernameError.style.display = 'block';
        isValid = false;
    }
    
    if (password === '') {
        passwordError.textContent = 'Password cannot be empty';
        passwordError.style.display = 'block';
        isValid = false;
    }
    
    if (isValid) {
        // Redirect to welcome page
        window.location.href = 'welcome.html';
    }
});
