import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

const whatsappHref =
  "https://wa.me/916305621828?text=Hi%20Orvexa%2C%20I%20would%20like%20to%20know%20more%20about%20your%20export%20services.";
const instagramHref = "https://www.instagram.com/himu_himesh?igsh=MXlpdHJ5NWxkdms2";
const linkedinHref =
  "https://www.linkedin.com/in/orvexaimportsand-exports-b869443ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_ap";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <div className="fl-logo-row">
            <div className="logo-circle logo-circle-small">B</div>
            <div>
              <div className="fl-name">
                Orv<span>exa</span>
              </div>
              <div className="fl-sub">International Trade &amp; Export</div>
            </div>
          </div>
          <p className="fl-desc">
            Orvexa supports Indian exporters with sourcing, documentation, quality coordination, and shipment
            planning. We are focused on building a trusted network that helps growing businesses move confidently into
            international markets.
          </p>
          <div className="fl-affil">Founded by export-focused entrepreneurs | Est. 2020</div>
          <div className="fl-socials">
            <a className="fl-soc" href={instagramHref} title="Instagram" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a className="fl-soc" href={linkedinHref} title="LinkedIn" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
            <a className="fl-soc" href={whatsappHref} title="WhatsApp" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="fc">
          <h5>Quick Links</h5>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#products">Products</a>
          <a href="#team">Our Team</a>
          <a href="#partners">Partners</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="fc">
          <h5>Contact</h5>
          <p>
            <strong>Main Office</strong>
            <br />
            Hyderabad, Telangana
            <br />
            India
          </p>
          <p className="footer-spacing">
            <strong>Phone</strong>
            <br />
            <a href="tel:+916305621828">+91 63056 21828</a>
            <br />
            <a href="tel:+917032381958">+91 70323 81958</a>
          </p>
          <p className="footer-spacing">
            <strong>Email</strong>
            <br />
            <a href="mailto:orvexaimportsandexports@gmail.com">orvexaimportsandexports@gmail.com</a>
          </p>
        </div>

        <div className="fc">
          <h5>Services</h5>
          <a href="#services">Supplier Sourcing</a>
          <a href="#services">Quality Assurance</a>
          <a href="#services">Logistics &amp; Shipping</a>
          <a href="#services">Compliance &amp; Docs</a>
          <a href="#services">Payment Settlement</a>
          <a href="#partners">Market Connections</a>
        </div>
      </div>
      <div className="footer-bot">
        <p>© 2026 Orvexa. All rights reserved. | Exporting Indian quality with care</p>
        <p>Growing network · Trusted partners · Quality and reliability · Est. 2020</p>
      </div>
    </footer>
  );
}
