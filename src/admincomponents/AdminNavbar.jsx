import React from 'react'
import '../styles/adminnavbar.css';
import { Link, useLocation } from "react-router-dom";
function AdminNavbar() {
    const location = useLocation();
    const isAdminRoute = location.pathname === '/admin';
    return (
        <header className="py-4">
            
            <nav className="nav justify-content-center">
                {!isAdminRoute && <Link to="/admin">Admin</Link>}
                {isAdminRoute && <a href="/adminmembers">Members</a>}
                {isAdminRoute && <a href="#Trainers">Trainers</a>}
                <Link to="/admincurrentattendance">Current Attendance</Link>
                {isAdminRoute && <a href="#Abonnements">Abonnements</a>}
                <Link to="/adminpaymentsection">Paiements</Link>
                <Link to="/adminattendancesection">Attendance</Link>
            </nav>
        </header>
    )
}

export default AdminNavbar