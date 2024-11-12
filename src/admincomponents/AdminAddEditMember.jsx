import React from 'react'

function AdminAddEditMember() {
    return (
        <section class="text-center my-5">
            <h2>Add/Edit Member</h2>
            <form id="member-form">
                <div class="mb-3">
                    <input type="hidden" id="member-id" />
                    <input type="text" id="member-name" class="form-control" placeholder="Member Name" required />
                </div>
                <button type="submit" class="btn btn-primary" id="submit-btn">Add Member</button>
            </form>
        </section>
    )
}

export default AdminAddEditMember