import React from 'react'
import AdminTrainers from './AdminTrainers'
import AdminMembersTable from './AdminMembersTable'
import AdminNosAbonnements from './AdminNosAbonnements'

function Admin() {
    return (
        <div>Admin
            <AdminMembersTable />
            <AdminTrainers />
            <AdminNosAbonnements />
            
        </div>
    )
}

export default Admin