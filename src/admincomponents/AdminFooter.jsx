import React from 'react'

import '../styles/AdminFooter.css'
import { Link } from 'react-router-dom'
function AdminFooter() {
    return (
        <footer className="text-center py-4">
            <h3>Total Members</h3>
            <p id="total-members" className="display-4">0</p>

            <p>&copy; 2024 GO TO GYM Admin. All rights reserved.</p> <p> <Link to="/adminprivacypolicy">The Privacy Policy</Link> | <Link to="/admintermsofservice">Terms of Service</Link> | <Link to="/ContactUs">Contact Us</Link> </p>


        </footer>
    )
}

export default AdminFooter