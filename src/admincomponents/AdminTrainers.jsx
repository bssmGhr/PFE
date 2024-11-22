import React from 'react'

function AdminTrainers() {
    return (
        <section id="Trainers">
            <h2>Nos Coaches</h2>
            <div className="trainer">
                <img src="coach1.jpg" alt="Coach 1" />
                <h3>Jean Dupont</h3>
                <p>Spécialité : Musculation et CrossFit</p>
            </div>
            <div className="trainer">
                <img src="" alt="Coach 1" />
                <h3>Jean Dupont</h3>
                <p>Spécialité : Musculation et CrossFit</p>
            </div>
            <div className="trainer">
                <img src="" alt="Coach 2" />
                <h3>Marie Leclerc</h3>
                <p>Spécialité : Yoga et Cardio</p>
            </div>
            <div className="trainer">
                <img src="coach3.jpg" alt="Coach 3" />
                <h3>David Martin</h3>
                <p>Spécialité : HIIT et Perte de Poids</p>
            </div>
        </section>
    )
}

export default AdminTrainers