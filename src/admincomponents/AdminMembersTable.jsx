import React from 'react'

function AdminMembersTable() {
    return (
        <section className="my-5" id="Members">
            <h2>Members List</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody id="members-list">
                    {/* Members will be dynamically added here */}
                </tbody>
            </table>
        </section>
    )
}

export default AdminMembersTable