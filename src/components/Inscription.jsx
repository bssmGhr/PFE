import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

 function Inscription() {
    const api_url = import.meta.env.VITE_BACKEND_URL
    const navigate = useNavigate();
    async function validateSignup(e) {
        e.preventDefault()
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        // Custom validation
        if (!name || !email || !password) {
            alert("Please fill in all fields.");
            return false;
        }
        try { 
            const response = await axios.post(`${api_url}/api/endpoint/users/signup`, 
                { name, email, password }); console.log('Réponse du serveur:', response.data);
             } catch (error) { console.error('Erreur lors de l\'envoi des données:', error); }
          navigate('/connexion');
    }
    function toggleForm() {

        console.log('ok')
      navigate('/connexion');
    }
    return (
        <div className="container" id="signup-container">
            <h2 className="text-center mb-4">Sign Up</h2>
            <form id="signup-form" >
                <div className="mb-3">
                    <label htmlFor="signup-name" className="form-label">Name:</label>
                    <input type="text" className="form-control" id="signup-name" name="name" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="signup-email" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="signup-email" name="email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="signup-password" className="form-label">Password:</label>
                    <input type="password" className="form-control" id="signup-password" name="password" required minLength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}" />
                    <div className="invalid-feedback">
                        Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.
                    </div>


                </div>
                <button type="button" className="btn btn-success w-100"
                onClick={(e) => validateSignup(e)}
                
                >Sign Up</button>
            </form>
            <a href="#" className="d-block text-center mt-3" onClick={()=>toggleForm}>Already have an account? Login</a>
        </div>
    )
}

export default Inscription