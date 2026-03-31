const partners = [
  {
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=180&q=80",
    name: "Portside Freight",
    description: "Shipping support partner focused on practical routing, customs coordination, and steady communication.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&w=180&q=80",
    name: "Harbor Storage",
    description: "Warehousing support for export-ready goods with attention to handling standards and shipment readiness.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=180&q=80",
    name: "ClearDocs Trade",
    description: "Documentation and compliance support helping suppliers and buyers stay aligned through the export process.",
  },
];

export default function Partners() {
  return (
    <section className="partners-section" id="partners">
      <div className="wrap">
        <div className="partners-header sr">
          <div className="eyebrow eyebrow-c">Trusted Network</div>
          <h2 className="sec-title section-title-wide">
            Our Global <em>Partners</em>
          </h2>
          <p className="sec-body section-body-products">
            We collaborate with logistics, warehousing, and trade support partners to help keep international movement
            dependable and well coordinated.
          </p>
        </div>

        <div className="partners-grid" id="certifications">
          {partners.map((partner, index) => (
            <div key={partner.name} className={`partner-card sr ${index > 0 ? `d${index}` : ""}`.trim()}>
              <img className="partner-logo" src={partner.image} alt={partner.name} />
              <h4 className="partner-name">{partner.name}</h4>
              <p className="partner-desc">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
