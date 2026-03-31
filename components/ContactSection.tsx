"use client";

import { FormEvent } from "react";
import { FaArrowRight, FaCalendar, FaEnvelope, FaPaperPlane } from "react-icons/fa6";

export default function ContactSection() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.alert("Thank you for your inquiry! Our team will contact you shortly.");
  };

  return (
    <section className="cta-section" id="contact">
      <div className="cta-inner">
        <div className="cta-txt sr">
          <div className="eyebrow">Ready to Expand?</div>
          <h2 className="sec-title">
            Unlock Global <em>Opportunities</em>
          </h2>
          <p className="sec-body">
            Whether you are exploring export markets or looking for reliable Indian supply partners, Orvexa offers
            a clean, practical way to begin building international relationships.
          </p>
          <div className="cta-btns">
            <a href="mailto:orvexaimportsandexports@gmail.com" className="btn-primary">
              <FaEnvelope />
              Get in Touch
            </a>
            <a href="tel:+916305621828" className="btn-secondary">
              <FaCalendar />
              Schedule a Call
            </a>
          </div>
        </div>

        <div className="contact-form sr d2">
          <h3>
            <FaPaperPlane />
            Quick Inquiry
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="fgrp">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="fgrp">
              <input type="email" placeholder="Business Email" required />
            </div>
            <div className="fgrp">
              <input type="tel" placeholder="Phone Number" required />
            </div>
            <div className="fgrp">
              <select required defaultValue="">
                <option value="" disabled>
                  I am a...
                </option>
                <option value="Manufacturer">Manufacturer</option>
                <option value="Exporter">Exporter</option>
                <option value="Importer">Importer</option>
                <option value="Buyer">International Buyer</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="fgrp">
              <textarea placeholder="Tell us about your business & needs..." rows={3} required />
            </div>
            <button type="submit">
              <FaArrowRight />
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
