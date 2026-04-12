"use client";

import { FaBox, FaEnvelope, FaGlobe, FaHandshake, FaPhone } from "react-icons/fa6";
import { useEffect, useState } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1800&q=80",
    alt: "Cargo containers at port",
    tag: "Welcome to Orvexa Imports and Exports",
    title: "Orvexa Imports",
    emphasis: "and Exports",
    body:
      "Orvexa Imports and Exports helps Indian suppliers connect with international buyers through dependable export coordination for rice, turmeric, spices, coffee, and specialty Indian herbs.",
    primary: { label: "Explore Services", href: "#services", icon: <FaHandshake /> },
    secondary: { label: "Talk To Our Team", href: "#contact", icon: <FaPhone /> },
  },
  {
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1800&q=80",
    alt: "Cargo ship at sea",
    tag: "End-to-End Export Solutions",
    title: "From Warehouse",
    emphasis: "To World",
    body:
      "From sourcing and documentation to shipping support, Orvexa Imports and Exports makes Indian exports clear, reliable, and manageable for growing businesses.",
    primary: { label: "Our Process", href: "#services", icon: <FaBox /> },
    secondary: { label: "View Products", href: "#products", icon: <FaBox /> },
  },
  {
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1800&q=80",
    alt: "Port cranes and containers",
    tag: "Trusted Partners, Practical Growth",
    title: "Scale Your Business",
    emphasis: "Go Global",
    body:
      "We are building global connections across logistics, sourcing, and trade support so exporters from India can grow with confidence in global markets.",
    primary: { label: "Our Network", href: "#partners", icon: <FaGlobe /> },
    secondary: { label: "Become a Partner", href: "#contact", icon: <FaEnvelope /> },
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrent((index + slides.length) % slides.length);

  return (
    <section className="hero">
      {slides.map((slide, index) => (
        <div key={slide.tag} className={`slide ${index === current ? "active" : ""}`}>
          <img className="slide-bg" src={slide.image} alt={slide.alt} />
          <div className="slide-ov" />
          <div className="slide-body">
            <div className="slide-tag">{slide.tag}</div>
            <h1 className="slide-h">
              {slide.title}
              <br />
              <em>{slide.emphasis}</em>
            </h1>
            <p className="slide-p">{slide.body}</p>
            <div className="hero-btns">
              <a href={slide.primary.href} className="btn-solid">
                {slide.primary.icon}
                {slide.primary.label}
              </a>
              <a href={slide.secondary.href} className="btn-ghost">
                {slide.secondary.icon}
                {slide.secondary.label}
              </a>
            </div>
          </div>
        </div>
      ))}

      <div className="slider-ctrl">
        <div className="dots">
          {slides.map((slide, index) => (
            <button
              key={slide.tag}
              type="button"
              className={`dot ${index === current ? "on" : ""}`}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        <div className="arrows">
          <button type="button" id="snext" aria-label="Next slide" onClick={() => goToSlide(current + 1)}>
            →
          </button>
          <button type="button" id="sprev" aria-label="Previous slide" onClick={() => goToSlide(current - 1)}>
            ←
          </button>
        </div>
      </div>
    </section>
  );
}
