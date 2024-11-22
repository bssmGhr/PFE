import React from 'react'

function AdminNavbar() {
    return (
        <header className="py-4">
            <h1 className="text-center">GO TO GYM Admin</h1>
            <nav className="nav justify-content-center">

                <a href="#Members">Members</a>
                <a href="#Trainers">Trainers</a>
                <a href="#CurrentAttendance">Current Attendance</a>
                <a href="#Abonnements">Abonnements</a>
                <a href="#Paiements">Paiements</a>
                <a href="#Présence">Présence</a>
            </nav>
        </header>
    )
}

export default AdminNavbar