import React from 'react'

function SpecialOffersPage() {
    return (
        <section className="py-5 text-center">
            <div className="container">
                <h2 className="mb-5" id="special">Special Offers – Get Fit for Less</h2>
                <div className="row justify-content-center g-4">
                    <div className="col-md-4">
                        <div className="p-4 bg-primary text-white rounded shadow-sm h-100">
                            <h4>No Enrollment Fee</h4>
                            <p>Sign up today with zero initiation costs!</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 bg-primary text-white rounded shadow-sm h-100">
                            <h4>Free First Month</h4>
                            <p>
                                Get your first month free when committing to a 6-month
                                membership.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 bg-primary text-white rounded shadow-sm h-100">
                            <h4>Complimentary Personal Training Session</h4>
                            <p>
                                All new members receive a free personal training session to help
                                kickstart their fitness journey.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 bg-primary text-white rounded shadow-sm h-100">
                            <h4>Referral Program</h4>
                            <p>
                                Bring a friend and you’ll both get 10% off your next month’s
                                membership fee.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SpecialOffersPage