import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

const whatsappHref =
  "https://wa.me/916305621828?text=Hi%20Orvexa%2C%20I%20would%20like%20to%20know%20more%20about%20your%20export%20services.";
const instagramHref = "https://www.instagram.com/himu_himesh?igsh=MXlpdHJ5NWxkdms2";
const linkedinHref =
  "https://www.linkedin.com/in/seri-charan-89926333a?utm_source=share_via&utm_content=profile&utm_medium=member_ios";

const founders = [
  {
    name: "S. Himesh",
    role: "Co-Founder & Strategy Director",
    bio: "Guides market planning, export positioning, and partner relationships with a practical, long-term business focus.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=280&q=80",
    links: [
      { href: instagramHref, icon: <FaInstagram />, label: "Instagram" },
      { href: whatsappHref, icon: <FaWhatsapp />, label: "WhatsApp" },
      { href: linkedinHref, icon: <FaLinkedinIn />, label: "LinkedIn" },
    ],
  },
  {
    name: "S. Sai Charan Tej",
    role: "Co-Founder & Operations Lead",
    bio: "Oversees coordination across sourcing, logistics, and delivery workflows to keep export operations organized and responsive.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=280&q=80",
    links: [
      { href: linkedinHref, icon: <FaLinkedinIn />, label: "LinkedIn" },
      { href: whatsappHref, icon: <FaWhatsapp />, label: "WhatsApp" },
    ],
  },
  {
    name: "Jashwanth K.",
    role: "Co-Founder & Trade Relations",
    bio: "Builds communication with buyers and support partners, helping create a trusted network for steady international growth.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=280&q=80",
    links: [
      { href: whatsappHref, icon: <FaWhatsapp />, label: "WhatsApp" },
      { href: linkedinHref, icon: <FaLinkedinIn />, label: "LinkedIn" },
    ],
  },
];

export default function Founders() {
  return (
    <section className="founders-section" id="team">
      <div className="wrap">
        <div className="founders-header sr">
          <div className="eyebrow eyebrow-c">Our Leadership</div>
          <h2 className="sec-title section-title-wide">
            Meet the <em>Founders</em>
          </h2>
          <p className="sec-body section-body-products">
            A small founding team focused on building reliable export relationships with care, clarity, and consistency.
          </p>
        </div>

        <div className="founders-grid">
          {founders.map((founder, index) => (
            <div key={founder.name} className={`founder-card sr ${index > 0 ? `d${index}` : ""}`.trim()}>
              <div className="founder-img">
                <img src={founder.image} alt={founder.name} />
              </div>
              <div className="founder-name">{founder.name}</div>
              <div className="founder-role">{founder.role}</div>
              <p className="founder-bio">{founder.bio}</p>
              <div className="founder-socials">
                {founder.links.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="social-btn" title={link.label}>
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
