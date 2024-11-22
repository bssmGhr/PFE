import React from 'react'

function AdminAttendanceSection() {
    return (
        <section className="attendance-section" id="Présence">
            <h2>Mark Your Attendance</h2>
            <p>Please enter your details to mark your attendance for today.</p>

            <form id="attendanceForm" action="attendance-success.html" method="POST">
                <div className="form-group">
                    <label htmlFor="fullName">Full Name:</label>
                    <input type="text" id="fullName" name="fullName" required />
                </div>

                <div className="form-group">
                    <label htmlFor="membershipId">Membership ID:</label>
                    <input type="text" id="membershipId" name="membershipId" required />
                </div>

                <div className="form-group">
                    <label htmlFor="checkInTime">Check-in Time:</label>
                    <input type="time" id="checkInTime" name="checkInTime" required />
                </div>

                <div className="form-group">
                    <button type="submit" className="submit-button">Mark Attendance</button>
                </div>
            </form>
        </section>
    )
}

export default AdminAttendanceSection