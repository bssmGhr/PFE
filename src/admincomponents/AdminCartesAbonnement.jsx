import React from 'react'

function AdminCartesAbonnement() {
    return (
        <div className="container my-5">
            <div className="row justify-content-center">

                {/* Forfait Mensuel */}
                <div className="col-md-4">
                    <div className="pricing-plan">
                        <h3>Mensuel</h3>
                        <p className="price">29,99€</p>
                        <p>Accès illimité aux équipements</p>
                        <p>Accès aux cours collectifs</p>
                        <p>1 séance avec un coach par mois</p>
                        <button className="btn btn-primary btn-lg">Souscrire</button>
                    </div>
                </div>

                {/* Forfait Trimestriel */}
                <div className="col-md-4">
                    <div className="pricing-plan">
                        <h3>Trimestriel</h3>
                        <p className="price">79,99€</p>
                        <p>Accès illimité aux équipements</p>
                        <p>Accès à tous les cours collectifs</p>
                        <p>3 séances avec un coach par trimestre</p>
                        <button className="btn btn-primary btn-lg">Souscrire</button>
                    </div>
                </div>

                {/* Forfait Annuel */}
                <div className="col-md-4">
                    <div className="pricing-plan">
                        <h3>Annuel</h3>
                        <p className="price">299,99€</p>
                        <p>Accès illimité aux équipements</p>
                        <p>Accès à tous les cours collectifs</p>
                        <p>Séances illimitées avec un coach</p>
                        <p>Accès à des évènements exclusifs</p>
                        <button className="btn btn-primary btn-lg">Souscrire</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AdminCartesAbonnement