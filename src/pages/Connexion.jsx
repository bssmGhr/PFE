import React, { useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"
function Connexion() {
    const api_url = import.meta.env.VITE_BACKEND_URL
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [response,setResponse]=useState('');

    async function validateLogin(e) {
        e.preventDefault();

        // Custom validation
        if (!email || !password) {
            alert("Please fill in all fields.");
            return false;
        }
        console.log(email, password);
        try {
            const response = await axios.post(`${api_url}/api/endpoint/users/login`, { email, password });
            console.log('Réponse du serveur:', response.data);
            
        } catch (error) {
            console.error('Erreur lors de l\'envoi des données:', error);
            setResponse('Incorrect username or password or not signed up yet')
        }
    }

    return (
        <div className="container" id="login-container">
            <h2 className="text-center mb-4">Login</h2>
            <form id="login-form" onSubmit={validateLogin}>
                <div className="mb-3">
                    <label htmlFor="login-email" className="form-label">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="login-email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="login-password" className="form-label">Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        id="login-password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength="8"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}"
                    />
                    <div className="invalid-feedback">
                        Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.
                    </div>
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
            <div>{response}</div>
            <Link to="/inscription" className="d-block text-center mt-3">Don't have an account? Sign Up</Link>
        </div>
    );
}

export default Connexion;
