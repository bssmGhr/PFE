import React from 'react'

function Services() {
    return (
        <section id="services" className="py-5">
            <div className="container">
                <h2 className="text-center mb-5">Our Services – Built Around You</h2>
                <div className="row g-4">
                    <div className="col-md-4 text-center">
                        <div className="p-4 bg-light rounded shadow-sm h-100">
                            <h3>Strength & Conditioning</h3>
                            <p>
                                Enhance muscle strength with our wide range of free weights and
                                resistance machines.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className="p-4 bg-light rounded shadow-sm h-100">
                            <h3>Cardio Zone</h3>
                            <p>
                                Our top-tier cardio equipment includes treadmills, ellipticals,
                                and bikes to keep you in shape.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className="p-4 bg-light rounded shadow-sm h-100">
                            <h3>Group Classes</h3>
                            <p>
                                Join high-energy classes like HIIT, yoga, Pilates, and cycling
                                to stay motivated.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className="p-4 bg-light rounded shadow-sm h-100">
                            <h3>Personal Training</h3>
                            <p>
                                Work one-on-one with expert trainers for personalized workout
                                plans tailored just for you.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className="p-4 bg-light rounded shadow-sm h-100">
                            <h3>Recovery & Relaxation</h3>
                            <p>
                                Unwind in our saunas or take advantage of our recovery services
                                like massage therapy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services