import React from 'react'

function AdminNavbar() {
    return (
        <header className="py-4">
            <h1 className="text-center">GO TO GYM</h1>
            <nav className="nav justify-content-center">

                <a className="nav-link" href="#Members">Members</a>
                <a className="nav-link" href="#Trainers">Trainers</a>
                <a className="nav-link" href="#Classes">Classes</a>
                <a className="nav-link" href="#Abonnements">Abonnements</a>
                <a className="nav-link" href="#Paiements">Paiements</a>
                <a className="nav-link" href="#Présence">Présence</a>
            </nav>
        </header>
    )
}

export default AdminNavbar