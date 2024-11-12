import React from 'react'

function CartesAbonnement() {
    return (
        <div class="container my-5">
            <div class="row justify-content-center">

                {/* Forfait Mensuel */}
                <div class="col-md-4">
                    <div class="pricing-plan">
                        <h3>Mensuel</h3>
                        <p class="price">29,99€</p>
                        <p>Accès illimité aux équipements</p>
                        <p>Accès aux cours collectifs</p>
                        <p>1 séance avec un coach par mois</p>
                        <button class="btn btn-primary btn-lg">Souscrire</button>
                    </div>
                </div>

                {/* Forfait Trimestriel */}
                <div class="col-md-4">
                    <div class="pricing-plan">
                        <h3>Trimestriel</h3>
                        <p class="price">79,99€</p>
                        <p>Accès illimité aux équipements</p>
                        <p>Accès à tous les cours collectifs</p>
                        <p>3 séances avec un coach par trimestre</p>
                        <button class="btn btn-primary btn-lg">Souscrire</button>
                    </div>
                </div>

                {/* Forfait Annuel */}
                <div class="col-md-4">
                    <div class="pricing-plan">
                        <h3>Annuel</h3>
                        <p class="price">299,99€</p>
                        <p>Accès illimité aux équipements</p>
                        <p>Accès à tous les cours collectifs</p>
                        <p>Séances illimitées avec un coach</p>
                        <p>Accès à des évènements exclusifs</p>
                        <button class="btn btn-primary btn-lg">Souscrire</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CartesAbonnement