import React from 'react'

function Inscription() {
    return (
        <div class="container" id="signup-container">
            <h2 class="text-center mb-4">Sign Up</h2>
            <form id="signup-form" onsubmit="return validateSignup()">
                <div class="mb-3">
                    <label for="signup-name" class="form-label">Name:</label>
                    <input type="text" class="form-control" id="signup-name" name="name" required />
                </div>
                <div class="mb-3">
                    <label for="signup-email" class="form-label">Email:</label>
                    <input type="email" class="form-control" id="signup-email" name="email" required />
                </div>
                <div class="mb-3">
                    <label for="signup-password" class="form-label">Password:</label>
                    <input type="password" class="form-control" id="signup-password" name="password" required minlength="6" />
                    <div class="invalid-feedback">Password must be at least 6 characters long.</div>
                </div>
                <button type="submit" class="btn btn-success w-100">Sign Up</button>
            </form>
            <a href="#" class="d-block text-center mt-3" onclick="toggleForm()">Already have an account? Login</a>
        </div>
    )
}

export default Inscription