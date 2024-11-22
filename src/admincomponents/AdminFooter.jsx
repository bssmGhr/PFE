import React from 'react'

import '../styles/AdminFooter.css'
function AdminFooter() {
    return (
        <footer className="text-center py-4 bg-dark text-light">
            <h3>Total Members</h3>
            <p id="total-members" className="display-4">0</p>

            <p>&copy;GO TO GYM Admin</p>

        </footer>
    )
}

export default AdminFooter