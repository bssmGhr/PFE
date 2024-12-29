import React from 'react'
import p from "../assets/18-01-Blog-Fitness-Information-personal-trainer.jpg"
function HeroSection() {
    return (
        <section className="bg-primary text-white text-center py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <h1 className="display-4">
                            We're Here to Help You
                        </h1>
                        <p className="lead">
                            Have any questions or need assistance? Reach out to us, and our team will be more than happy to
                            help. Whether you're curious about memberships, classes, or anything else, we've got you
                            covered.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <img src={p} alt="Gym Facilities"
                            className="img-fluid rounded shadow-lg" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection