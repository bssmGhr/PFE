import React from 'react'

function AdminCurrentAttendance() {
    return (
        <section className="current-attendance" id="CurrentAttendance">
            <h2>Current Attendance</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Membership ID</th>
                        <th>Check-in Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>12345</td>
                        <td>09:00 AM</td>
                    </tr>
                    <tr>
                        <td>Jane Smith</td>
                        <td>67890</td>
                        <td>09:15 AM</td>
                    </tr>
                    {/* More attendance records can be added here */}
                </tbody>
            </table>
        </section>
    )
}

export default AdminCurrentAttendance