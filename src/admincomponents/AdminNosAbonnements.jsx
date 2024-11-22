import React from 'react'
import AdminCartesAbonnement from "./AdminCartesAbonnement"
function AdminNosAbonnements() {
    return (
        <header id="Abonnements" className="bg-primary text-white text-center py-5">
            <h1>Nos Abonnements</h1>
            <p>Choisissez le forfait qui vous convient et commencez votre parcours fitness dès aujourd'hui !
                <AdminCartesAbonnement />
            </p>
        </header>

    )
}

export default AdminNosAbonnements