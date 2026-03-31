export default function ValueProp() {
  return (
    <section className="split">
      <div className="split-txt sr">
        <div className="eyebrow eyebrow-gold">Why Choose Orvexa</div>
        <h2 className="sec-title sec-title-w">
          Every Shipment Backed by
          <br />
          <em className="gold-text">Reliability &amp; Trust</em>
        </h2>
        <p className="sec-body sec-body-w">
          We are focused on quality and reliability at every step of the export process. Rather than overpromising,
          we aim to build steady relationships, clear communication, and dependable coordination between suppliers and
          buyers.
        </p>
        <div className="split-btns">
          <a href="#services" className="btn-wh-solid">
            See Services
          </a>
          <a href="#contact" className="btn-wh-out">
            Contact Us
          </a>
        </div>
      </div>
      <div className="split-img">
        <img
          src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80"
          alt="Cargo ship and containers"
        />
      </div>
    </section>
  );
}
