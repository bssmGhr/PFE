import React from 'react'

function MembersTable() {
    return (
        <section class="my-5">
            <h2>Members List</h2>
            <table class="table table-striped">
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

export default MembersTable