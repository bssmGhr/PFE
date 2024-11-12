import React from 'react'
import { useNavigate } from 'react-router-dom';

function Inscription() {
    const navigate = useNavigate();
    function validateSignup(e) {
        e.preventDefault()
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        // Custom validation
        if (!name || !email || !password) {
            alert("Please fill in all fields.");
            return false;
        }
        navigate('/connexion');
    }
    function toggleForm() {

        console.log('ok')
        navigate('/connexion');
    }
    return (
        <div class="container" id="signup-container">
            <h2 class="text-center mb-4">Sign Up</h2>
            <form id="signup-form" onSubmit={(e) => validateSignup(e)}>
                <div class="mb-3">
                    <label htmlFor="signup-name" class="form-label">Name:</label>
                    <input type="text" class="form-control" id="signup-name" name="name" required />
                </div>
                <div class="mb-3">
                    <label htmlFor="signup-email" class="form-label">Email:</label>
                    <input type="email" class="form-control" id="signup-email" name="email" required />
                </div>
                <div class="mb-3">
                    <label htmlFor="signup-password" class="form-label">Password:</label>
                    <input type="password" class="form-control" id="signup-password" name="password" required minLength="6" />
                    <div class="invalid-feedback">Password must be at least 6 characters long.</div>
                </div>
                <button type="submit" class="btn btn-success w-100">Sign Up</button>
            </form>
            <a href="#" class="d-block text-center mt-3" onClick={toggleForm}>Already have an account? Login</a>
        </div>
    )
}

export default Inscription