import React from 'react'
import { Link } from "react-router-dom"
function AdminNavbar() {
    return (
        <header className="py-4">
            <h1 className="text-center">GO TO GYM Admin</h1>
            <nav className="nav justify-content-center">

                <a href="#Members">Members</a>
                <a href="#Trainers">Trainers</a>
                <Link to="/admincurrentattendance">Current Attendance</Link>
                <a href="#Abonnements">Abonnements</a>
                <a href="#Paiements">Paiements</a>
                <Link to="/adminattendancesection">Attendance</Link>
            </nav>
        </header>
    )
}

export default AdminNavbar