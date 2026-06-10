import React from 'react'
import "./Pages.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Delivery = () => {
  return (
    <section className="contact">
      <div className="contact-container">

        <div className="contact-info">
          <h1>Delivery in progress!</h1>
          <p>
            We'd love to hear from you! Whether you have a question about our
            products, orders, or anything else, our team is ready to help.
          </p>

          <div className="info-box">
            <FaMapMarkerAlt />
            <span>Nigeria</span>
          </div>

          <div className="info-box">
            <FaPhoneAlt />
            <span>+234 707 4125 175</span>
          </div>

          <div className="info-box">
            <FaEnvelope />
            <span>support@redstore.com</span>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <input
              type="text"
              placeholder="Full Name"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              required
            />

            <input
              type="text"
              placeholder="Subject"
              required
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">
                    We will deliver your order soon! Drop a Message to get in touch with us.
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Delivery;