import React from 'react'

function WhyChooseUs() {
    return (
        <section className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-5" id="why">Why Choose [Go To GYM]?</h2>
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="p-4 bg-white rounded shadow-sm h-100">
                            <h4>Modern Equipment</h4>
                            <p>
                                Train with the latest fitness machines and gear in a clean,
                                well-maintained environment.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="p-4 bg-white rounded shadow-sm h-100">
                            <h4>Qualified Trainers</h4>
                            <p>
                                Our certified trainers are passionate about fitness and ready to
                                help you excel.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="p-4 bg-white rounded shadow-sm h-100">
                            <h4>Inclusive Environment</h4>
                            <p>
                                We believe in fitness for everyone—join a supportive community
                                where all fitness levels are welcomed.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="p-4 bg-white rounded shadow-sm h-100">
                            <h4>Prime Location</h4>
                            <p>
                                Conveniently located in the heart of Mahdia with ample parking
                                available for our members.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs