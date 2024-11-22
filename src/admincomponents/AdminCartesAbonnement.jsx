import React from 'react'

function AdminCartesAbonnement() {
    return (
        <div className="container my-5">
            <div className="row justify-content-center">

                {/* Monthly Plan */}
                <div className="col-md-4">
                    <div className="pricing-plan">
                        <h3>Monthly</h3>
                        <p className="price">€29.99</p>
                        <p>Unlimited access to equipment</p>
                        <p>Access to group classes</p>
                        <p>1 session with a coach per month</p>
                        <button className="btn btn-primary btn-lg">Subscribe</button>
                    </div>
                </div>

                {/* Quarterly Plan */}
                <div className="col-md-4">
                    <div className="pricing-plan">
                        <h3>Quarterly</h3>
                        <p className="price">€79.99</p>
                        <p>Unlimited access to equipment</p>
                        <p>Access to all group classes</p>
                        <p>3 sessions with a coach per quarter</p>
                        <button className="btn btn-primary btn-lg">Subscribe</button>
                    </div>
                </div>

                {/* Annual Plan */}
                <div className="col-md-4">
                    <div className="pricing-plan">
                        <h3>Annual</h3>
                        <p className="price">€299.99</p>
                        <p>Unlimited access to equipment</p>
                        <p>Access to all group classes</p>
                        <p>Unlimited sessions with a coach</p>
                        <p>Access to exclusive events</p>
                        <button className="btn btn-primary btn-lg">Subscribe</button>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default AdminCartesAbonnement