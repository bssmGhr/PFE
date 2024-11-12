import React from 'react'
import imagesjfif from "../assets/images.jfif"
import { Link } from 'react-router-dom'
function Header() {
    return (
        <header class="bg-dark text-white py-3">
            <div class="container">
                <div class="d-flex justify-content-between align-items-center">
                    <Link to="index" class="d-flex align-items-center text-white text-decoration-none">
                        <img src={imagesjfif} alt="Gym Name Logo" width="40" height="40" />
                        <span class="ms-2">[Gym Name]</span>
                    </Link>
                    <nav class="d-none d-lg-block">
                        <ul class="nav">
                            <li class="nav-item">
                                <Link to="index" class="nav-link text-white">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="contact" class="nav-link text-white">Contact</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="plans" class="nav-link text-white">Plans</Link>
                            </li>

                        </ul>
                    </nav>
                    <div class="d-flex">
                        <Link class="btn btn-outline-light me-2" to="inscription">Login</Link>
                        <Link class="btn btn-warning" to="inscription">Sign-Up</Link>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header