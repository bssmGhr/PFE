import React from 'react'

function AdminTrainers() {
    return (
        <section id="Trainers">
            <h2>Our Coaches</h2>
            <div className="trainer">
                <img src="coach1.jpg" alt="Coach 1" />
                <h3>Jean Dupont</h3>
                <p>Specialty: Weightlifting and CrossFit</p>
            </div>
            <div className="trainer">
                <img src="" alt="Coach 1" />
                <h3>Jean Dupont</h3>
                <p>Specialty: Weightlifting and CrossFit</p>
            </div>
            <div className="trainer">
                <img src="" alt="Coach 2" />
                <h3>Marie Leclerc</h3>
                <p>Specialty: Yoga and Cardio</p>
            </div>
            <div className="trainer">
                <img src="coach3.jpg" alt="Coach 3" />
                <h3>David Martin</h3>
                <p>Specialty: HIIT and Weight Loss</p>
            </div>
        </section>

    )
}

export default AdminTrainers