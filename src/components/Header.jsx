import React from 'react'
import imagesjfif from "../assets/images.jfif"
import { Link } from 'react-router-dom'
function Header() {
    return (
        <header className="bg-dark text-white py-3">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <Link to="index" className="d-flex align-items-center text-white text-decoration-none">
                        <img src={imagesjfif} alt="Gym Name Logo" width="40" height="40" />
                        <span className="ms-2">[Gym Name]</span>
                    </Link>
                    <nav className="d-none d-lg-block">
                        <ul className="nav">
                            <li className="btn btn-outline-light me-2">
                                <Link to="index" className="nav-link text-white">Home</Link>
                            </li>
                            <li className="btn btn-outline-light me-2">
                                <Link to="contact" className="nav-link text-white">Contact</Link>
                            </li>
                            <li className="btn btn-outline-light me-2">
                                <Link to="plans" className="nav-link text-white">Plans</Link>
                            </li>

                        </ul>
                    </nav>
                    <div className="d-flex">
                        <Link className="btn btn-outline-light me-2" to="connexion">Login</Link>
                        <Link className="btn btn-warning" to="inscription">Sign-Up</Link>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header