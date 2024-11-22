import React from 'react'

function Testimonials() {
    return (
        <section className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-5" id="stories">Member Success Stories</h2>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="p-4 bg-white rounded shadow-sm h-100">
                            <blockquote className="blockquote">
                                <p>
                                    “The trainers here are incredible! I’ve never felt more
                                    supported in my fitness journey.”
                                </p>
                                <footer className="blockquote-footer">John D.</footer>
                            </blockquote>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 bg-white rounded shadow-sm h-100">
                            <blockquote className="blockquote">
                                <p>
                                    “Joining the group fitness classes has been a game changer for
                                    me—I’ve lost weight and gained confidence!”
                                </p>
                                <footer className="blockquote-footer">Emily R.</footer>
                            </blockquote>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 bg-white rounded shadow-sm h-100">
                            <blockquote className="blockquote">
                                <p>
                                    “Thanks to the personal training at [GO TO GYM], I’ve achieved
                                    results I didn’t think were possible.”
                                </p>
                                <footer className="blockquote-footer">Michael</footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials