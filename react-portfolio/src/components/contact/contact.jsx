import React from 'react';
import './contact.css';

function Contact() {
    return (
        <section id="contact" className="form-section">
            <div className="container">
                <h2 className="text-center mb-4">Contact</h2>

                <div className="contact-column">
                    <p>Feel free to reach out by sending a message through this form!</p>

                    <form id="contactForm">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="4" required></textarea>
                        </div>

                        <button type="submit" className="btn custom-submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;