import React from 'react'
import { Link } from "react-router-dom"
function Footer() {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; 2024 [GO TO GYM]. All rights reserved.</p>
                    </div>
                    <div className="col-md-6">
                        <Link to="/privacypolicy">The Privacy Policy</Link>
                    </div>
                    <div className="col-md-6">
                        <Link to="/termsofservice">Terms of Service</Link>
                    </div>
                    <div className="col-md-6">
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a href="#" className="text-white">Facebook</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="text-white">Instagram</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="text-white">Twitter</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer