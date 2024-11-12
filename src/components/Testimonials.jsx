import React from 'react'

function Testimonials() {
    return (
        <section class="py-5 bg-light">
            <div class="container">
                <h2 class="text-center mb-5" id="stories">Member Success Stories</h2>
                <div class="row g-4">
                    <div class="col-md-4">
                        <div class="p-4 bg-white rounded shadow-sm h-100">
                            <blockquote class="blockquote">
                                <p>
                                    “The trainers here are incredible! I’ve never felt more
                                    supported in my fitness journey.”
                                </p>
                                <footer class="blockquote-footer">John D.</footer>
                            </blockquote>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="p-4 bg-white rounded shadow-sm h-100">
                            <blockquote class="blockquote">
                                <p>
                                    “Joining the group fitness classes has been a game changer for
                                    me—I’ve lost weight and gained confidence!”
                                </p>
                                <footer class="blockquote-footer">Emily R.</footer>
                            </blockquote>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="p-4 bg-white rounded shadow-sm h-100">
                            <blockquote class="blockquote">
                                <p>
                                    “Thanks to the personal training at [GO TO GYM], I’ve achieved
                                    results I didn’t think were possible.”
                                </p>
                                <footer class="blockquote-footer">Michael</footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials