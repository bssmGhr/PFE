import React from 'react'

function Header() {
    return (
        <header class="bg-dark text-white py-3">
            <div class="container">
                <div class="d-flex justify-content-between align-items-center">
                    <a href="index.html" class="d-flex align-items-center text-white text-decoration-none">
                        <img src="image/images.jfif" alt="Gym Name Logo" width="40" height="40" />
                        <span class="ms-2">[Gym Name]</span>
                    </a>
                    <nav class="d-none d-lg-block">
                        <ul class="nav">
                            <li class="nav-item">
                                <a href="index.html" class="nav-link text-white">Home</a>
                            </li>
                            <li class="nav-item">
                                <a href="contact.html" class="nav-link text-white">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a href="plans.html" class="nav-link text-white">Plans</a>
                            </li>

                        </ul>
                    </nav>
                    <div class="d-flex">
                        <a class="btn btn-outline-light me-2" href="inscription.html">Login</a>
                        <a class="btn btn-warning" href="inscription.html">Sign-Up</a>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header