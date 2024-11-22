import React from 'react'

function AdminAttendanceSection() {
    return (
        <section class="attendance-section">
            <h2>Mark Your Attendance</h2>
            <p>Please enter your details to mark your attendance htmlFor today.</p>

            <html id="attendancehtmlForm" action="attendance-success.html" method="POST">
                <div class="htmlForm-group">
                    <label htmlFor="fullName">Full Name:</label>
                    <input type="text" id="fullName" name="fullName" required />
                </div>

                <div class="htmlForm-group">
                    <label htmlFor="membershipId">Membership ID:</label>
                    <input type="text" id="membershipId" name="membershipId" required />
                </div>

                <div class="htmlForm-group">
                    <label htmlFor="checkInTime">Check-in Time:</label>
                    <input type="time" id="checkInTime" name="checkInTime" required />
                </div>

                <div class="htmlForm-group">
                    <button type="submit" class="submit-button">Mark Attendance</button>
                </div>
            </html>
        </section>
    )
}

export default AdminAttendanceSection