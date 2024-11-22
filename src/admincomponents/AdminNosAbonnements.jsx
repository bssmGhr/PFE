import React from 'react'
import AdminCartesAbonnement from "./AdminCartesAbonnement"
function AdminNosAbonnements() {
    return (
        <header id="Abonnements" className="bg-primary text-white text-center py-5">
            <h1>Our Subscriptions</h1>
            <p>Choose the plan that suits you and start your fitness journey today!
                <AdminCartesAbonnement />
            </p>
        </header>


    )
}

export default AdminNosAbonnements