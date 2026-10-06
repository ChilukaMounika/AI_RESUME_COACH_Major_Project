import React from "react";

const Contact = () => {
  return (
    <div className="contact-page">

      <div className="contact-container">

        <h1>
          Contact <span>Us</span>
        </h1>

        <p>
          Have questions or suggestions?
          We'd love to hear from you.
        </p>

        <div className="contact-card">

          <form>

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            />

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Contact;