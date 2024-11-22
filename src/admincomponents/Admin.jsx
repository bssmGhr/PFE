import React from 'react'
import AdminTrainers from './AdminTrainers'
import AdminMembersTable from './AdminMembersTable'
function Admin() {
    return (
        <div>Admin
            <AdminMembersTable />
            <AdminTrainers />

        </div>
    )
}

export default Admin