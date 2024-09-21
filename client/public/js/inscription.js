function toggleForm() {
    const loginContainer = document.getElementById('login-container');
    const signupContainer = document.getElementById('signup-container');

    if (loginContainer.style.display === 'none') {
        loginContainer.style.display = 'block';
        signupContainer.style.display = 'none';
    } else {
        loginContainer.style.display = 'none';
        signupContainer.style.display = 'block';
    }
}
