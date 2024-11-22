import React from 'react'

function Plans() {
    return (
        <section className="membership bg-primary text-white text-center py-5">
            <h2>Membership Plans</h2>
            <div className="membership-plan">
                <h3>Basic Membership</h3>
                <ul>
                    <li>Access to gym equipment during off-peak hours</li>
                    <li>Unlimited use of cardio and strength zones</li>
                    <li>Price: $29/month</li>
                </ul>
            </div>
            <div className="membership-plan">
                <h3>Standard Membership</h3>
                <ul>
                    <li>Full access to gym equipment any time</li>
                    <li>Unlimited group fitness classes</li>
                    <li>Access to locker rooms, showers, and saunas</li>
                    <li>Price: $49/month</li>
                </ul>
            </div>
            <div className="membership-plan">
                <h3>Premium Membership</h3>
                <ul>
                    <li>All Standard benefits</li>
                    <li>Three personal training sessions per month</li>
                    <li>Priority booking for classes</li>
                    <li>Free guest passes</li>
                    <li>Price: $79/month</li>
                </ul>
            </div>
        </section>
    )
}

export default Plans