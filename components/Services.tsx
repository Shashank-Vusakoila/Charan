const services = [
  {
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=600&q=80",
    alt: "Containers in port",
    title: "Supplier Sourcing & Vetting",
    description:
      "We help identify Indian suppliers that align with buyer needs, with attention to quality, capacity, and communication.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
    alt: "Stacked cargo containers",
    title: "Quality Assurance",
    description:
      "We support documentation, product checks, and practical quality processes designed for smooth export coordination.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&w=600&q=80",
    alt: "Cargo ship at port",
    title: "Logistics & Shipping",
    description:
      "We coordinate with freight and logistics partners to support customs handling, shipment planning, and delivery visibility.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80",
    alt: "Shipping paperwork and laptop",
    title: "Payment Settlement",
    description:
      "We help buyers and suppliers stay aligned on payment terms, documentation flow, and practical trade coordination.",
  },
];

export default function Services() {
  return (
    <section className="section section-bg" id="services">
      <div className="wrap">
        <div className="sr center-copy">
          <div className="eyebrow eyebrow-c">What We Do</div>
          <h2 className="sec-title section-title-centered">
            End-to-End Export
            <br />
            <em>Services</em>
          </h2>
          <p className="sec-body section-body-centered">
            From supplier coordination to final shipment support, we help manage each step with a simple and
            dependable process.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <div key={service.title} className={`service-card sr ${index > 0 ? `d${index}` : ""}`.trim()}>
              <div className="service-img">
                <img src={service.image} alt={service.alt} />
              </div>
              <div className="service-body">
                <div className="service-tag">Service</div>
                <div className="service-title">{service.title}</div>
                <div className="service-desc">{service.description}</div>
                <a href="#contact" className="readmore">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
