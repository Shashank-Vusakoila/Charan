"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    text: "Orvexa made our first export conversations feel clear and manageable. Their team stayed responsive and helped us move forward with more confidence.",
    name: "Arun Patel",
    role: "Founder, Rice Supplier",
  },
  {
    text: "We appreciate the straightforward communication and reliable follow-up. The process felt practical, and the quality expectations were clearly handled.",
    name: "Nadia Rahman",
    role: "Procurement Partner",
  },
  {
    text: "As a growing buyer, we value suppliers who focus on consistency and trust. Orvexa has been thoughtful, organized, and easy to work with.",
    name: "Omar Khalid",
    role: "Sourcing Director",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="test-sec" id="testimonials">
      <div className="test-inner">
        <div className="eyebrow centered-eyebrow">Client Success</div>
        <h2 className="sec-title sec-title-w testimonial-title">
          What Our <em>Clients Say</em>
        </h2>
        <div className="tslider">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.name} className={`tslide ${index === current ? "on" : ""}`}>
              <div className="tq">&quot;</div>
              <div className="t-text">{testimonial.text}</div>
              <div className="t-name">{testimonial.name}</div>
              <div className="t-role">{testimonial.role}</div>
            </div>
          ))}
        </div>
        <div className="tdots">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              className={`dot ${index === current ? "on" : ""}`}
              aria-label={`Go to testimonial ${index + 1}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
