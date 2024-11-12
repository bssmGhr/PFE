import React from 'react'

function Connexion() {
    return (
        <div class="container" id="login-container">
            <h2 class="text-center mb-4">Login</h2>
            <form id="login-form" onsubmit="return validateLogin()">
                <div class="mb-3">
                    <label for="login-email" class="form-label">Email:</label>
                    <input type="email" class="form-control" id="login-email" name="email" required />
                </div>
                <div class="mb-3">
                    <label for="login-password" class="form-label">Password:</label>
                    <input type="password" class="form-control" id="login-password" name="password" required minlength="6" />
                    <div class="invalid-feedback">Password must be at least 6 characters long.</div>
                </div>
                <button type="submit" class="btn btn-primary w-100">Login</button>
            </form>
            <a href="#" class="d-block text-center mt-3" onclick="toggleForm()">Don't have an account? Sign Up</a>
        </div>
    )
}

export default Connexion