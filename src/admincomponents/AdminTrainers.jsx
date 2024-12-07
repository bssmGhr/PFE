import React from 'react'
import coach1 from "../assets/images.jfif"
import coach2 from "../assets/images (1).jfif"
import coach3 from "../assets/images (2).jfif"
import '../styles/traines.css'
function AdminTrainers() {
    return (
        <section id="Trainers">
            <h2>Our Coaches</h2>
            <div className="trainers">
    <div className="trainer">
        <img src={coach1} alt="Coach 1" />
        <h3>Jean Dupont</h3>
        <p>Specialty: Weightlifting and CrossFit</p>
    </div>

    <div className="trainer">
        <img src={coach2} alt="Coach 2" />
        <h3>Paul Leclerc</h3>
        <p>Specialty: Yoga and Cardio</p>
    </div>
    <div className="trainer">
        <img src={coach3} alt="Coach 3" />
        <h3>David Martin</h3>
        <p>Specialty: HIIT and Weight Loss</p>
    </div>
</div>
 
        </section>

    )
}

export default AdminTrainers