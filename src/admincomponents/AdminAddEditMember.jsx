import React from 'react'

function AdminAddEditMember() {
    return (
        <section className="text-center my-5">
            <h2>Add/Edit Member</h2>
            <form id="member-form">
                <div className="mb-3">
                    <input type="hidden" id="member-id" />
                    <input type="text" id="member-name" className="form-control" placeholder="Member Name" required />
                </div>
                <button type="submit" className="btn btn-primary" id="submit-btn">Add Member</button>
            </form>
        </section>
    )
}

export default AdminAddEditMember