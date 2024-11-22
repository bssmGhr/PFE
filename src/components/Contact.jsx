import React from 'react'

function Contact() {
    return (
        <section className="contact">
            <h2>Contact Us</h2>
            <p>Address: 123 Fitness Lane, [City], [Country]</p>
            <p>Phone: +123-456-7890</p>
            <p>Email: info@gymname.com</p>

            <h3>Send Us a Message</h3>
            <form className="contact-form">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <br />
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <br />
                <label for="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" required />
                <br />
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="5" required></textarea>
                <br />
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default Contact