import React from 'react'
function validateLogin(e) {
    e.preventDefault()
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Custom validation
    if (!email || !password) {
        alert("Please fill in all fields.");
        return false;
    }
    return true;
}
function Connexion() {
    return (
        <div class="container" id="login-container">
            <h2 class="text-center mb-4">Login</h2>
            <form id="login-form" onsubmit={(e) => validateLogin(e)}>
                <div class="mb-3">
                    <label for="login-email" class="form-label">Email:</label>
                    <input type="email" class="form-control" id="login-email" name="email" required />
                </div>
                <div class="mb-3">
                    <label for="login-password" class="form-label">Password:</label>
                    <input type="password" class="form-control" id="signup-password" name="password" required minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}" />
                    <div class="invalid-feedback">
                        Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.
                    </div>
                </div>
                <button type="submit" class="btn btn-primary w-100">Login</button>
            </form>
            <a href="#" class="d-block text-center mt-3" onclick="toggleForm()">Don't have an account? Sign Up</a>
        </div>
    )
}

export default Connexion