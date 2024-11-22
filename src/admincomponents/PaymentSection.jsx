import React from 'react'

function AdminPaymentSection() {
    return (
        <section id="Paiements" className="payment-section">
            <h2>Payment for Membership</h2>
            <p>Please complete the form below to make your payment.</p>

            <form id="paymentForm" action="payment-success.html" method="POST">
                <div className="form-group">
                    <label for="membershipType">Membership Type:</label>
                    <select id="membershipType" name="membershipType" required>
                        <option value="basic">Basic - 29.99 euros/month</option>
                        <option value="premium">Premium - 79.99 euros/Quarterly</option>
                        <option value="vip">VIP - 299.99 euros/Annual</option>
                    </select>
                </div>

                <div className="form-group">
                    <label for="cardholderName">Cardholder Name:</label>
                    <input type="text" id="cardholderName" name="cardholderName" required />
                </div>

                <div className="form-group">
                    <label for="cardNumber">Card Number:</label>
                    <input type="text" id="cardNumber" name="cardNumber" required maxlength="16" />
                </div>

                <div className="form-group">
                    <label for="expiryDate">Expiry Date:</label>
                    <input type="month" id="expiryDate" name="expiryDate" required />
                </div>

                <div className="form-group">
                    <label for="cvv">CVV:</label>
                    <input type="text" id="cvv" name="cvv" required maxLength="3" />
                </div>

                <div className="form-group">
                    <button type="submit" className="submit-button">Submit Payment</button>
                </div>
            </form>
        </section>
    )
}

export default AdminPaymentSection