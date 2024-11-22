import React from 'react'

function AdminStatisctics() {
    return (
        <section className="row text-center my-5">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <h3>Total Members</h3>
                        <p id="total-members" className="display-4">0</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminStatisctics