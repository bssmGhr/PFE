import React from 'react'

function AttendanceSection() {
    return (
        <section class="attendance-section">
            <h2>Mark Your Attendance</h2>
            <p>Please enter your details to mark your attendance for today.</p>

            <form id="attendanceForm" action="attendance-success.html" method="POST">
                <div class="form-group">
                    <label for="fullName">Full Name:</label>
                    <input type="text" id="fullName" name="fullName" required />
                </div>

                <div class="form-group">
                    <label for="membershipId">Membership ID:</label>
                    <input type="text" id="membershipId" name="membershipId" required />
                </div>

                <div class="form-group">
                    <label for="checkInTime">Check-in Time:</label>
                    <input type="time" id="checkInTime" name="checkInTime" required />
                </div>

                <div class="form-group">
                    <button type="submit" class="submit-button">Mark Attendance</button>
                </div>
            </form>
        </section>
    )
}

export default AttendanceSection