import { FaHandshakeAngle, FaShieldHalved, FaTruckFast } from "react-icons/fa6";

const features = [
  {
    icon: <FaTruckFast />,
    title: "Steady Logistics Support",
    description:
      "We work with shipping and freight partners to help keep routes, timelines, and documentation organized.",
  },
  {
    icon: <FaShieldHalved />,
    title: "Quality First Mindset",
    description:
      "Our approach stays focused on quality, consistency, and clear export requirements for every shipment.",
  },
  {
    icon: <FaHandshakeAngle />,
    title: "Trusted Partnerships",
    description:
      "We are building long-term relationships with suppliers, buyers, and service partners who value reliability.",
  },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-img sr">
            <img
              src="https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&w=900&q=80"
              alt="Shipping containers at port"
            />
            <div className="about-badge">
              <div className="ab-tag">Founded 2020</div>
              <div className="ab-val">Growing Network</div>
            </div>
          </div>

          <div className="sr d2">
            <div className="eyebrow">Who We Are</div>
            <h2 className="sec-title">
              Connecting India to the
              <br />
              World, <em>One Shipment at a Time</em>
            </h2>
            <p className="sec-body">
              Orvexa is a startup-focused export company building global connections between Indian suppliers
              and overseas buyers. We work with rice, turmeric, spices, and related trade categories, with a clear
              focus on quality, reliability, and practical long-term partnerships.
            </p>
            <div className="features" id="values">
              {features.map((feature) => (
                <div key={feature.title} className="feat">
                  <div className="feat-ico">{feature.icon}</div>
                  <div>
                    <div className="feat-title">{feature.title}</div>
                    <div className="feat-desc">{feature.description}</div>
                  </div>
                </div>
              ))}
            </div>
            <a href="#services" className="readmore">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
