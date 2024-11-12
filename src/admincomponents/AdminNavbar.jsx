import React from 'react'

function AdminNavbar() {
    return (
        <header class="py-4">
            <h1 class="text-center">GO TO GYM</h1>
            <nav class="nav justify-content-center">

                <a class="nav-link" href="#Members">Members</a>
                <a class="nav-link" href="#Trainers">Trainers</a>
                <a class="nav-link" href="#Classes">Classes</a>
                <a class="nav-link" href="#Abonnements">Abonnements</a>
                <a class="nav-link" href="#Paiements">Paiements</a>
                <a class="nav-link" href="#Présence">Présence</a>
            </nav>
        </header>
    )
}

export default AdminNavbar