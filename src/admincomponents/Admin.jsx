import React from 'react'
import AdminTrainers from './AdminTrainers'
import AdminMembersTable from './AdminMembersTable'
import AdminNosAbonnements from './AdminNosAbonnements'
import PaymentSection from "./PaymentSection"
import AdminAttendanceSection from './AdminAttendanceSection'
import AdminCurrentAttendance from "./AdminCurrentAttendance"
function Admin() {
    return (
        <div>Admin
            <AdminMembersTable />
            <AdminTrainers />
            <AdminNosAbonnements />
            {/*<AdminCurrentAttendance />*/}
            {/*<PaymentSection />*/}
            {/*<AdminAttendanceSection />*/}
        </div>
    )
}

export default Admin