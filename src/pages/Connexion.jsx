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
        <div className="container" id="login-container">
            <h2 className="text-center mb-4">Login</h2>
            <form id="login-form" onsubmit={(e) => validateLogin(e)}>
                <div className="mb-3">
                    <label htmlFor="login-email" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="login-email" name="email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="login-password" className="form-label">Password:</label>
                    <input type="password" className="form-control" id="signup-password" name="password" required minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}" />
                    <div className="invalid-feedback">
                        Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.
                    </div>
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
            <a href="#" className="d-block text-center mt-3" onclick="toggleForm()">Don't have an account? Sign Up</a>
        </div>
    )
}

export default Connexion