"use client";

import Link from "next/link";
import { useEffect } from "react";

const navGroups = [
  {
    label: "About Us",
    href: "#",
    dropdown: [
      { label: "Our Story", href: "#about" },
      { label: "Our Values", href: "#values" },
      { label: "Meet The Team", href: "#team" },
      { label: "Certifications", href: "#partners" },
    ],
  },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  {
    label: "Markets",
    href: "#partners",
    dropdown: [
      { label: "All Markets", href: "#partners" },
      { label: "Southeast Asia", href: "#partners" },
      { label: "Middle East", href: "#partners" },
      { label: "North America", href: "#partners" },
      { label: "Europe", href: "#partners" },
    ],
  },
  { label: "Quality Assurance", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  useEffect(() => {
    const nav = document.getElementById("nav");
    const onScroll = () => {
      if (!nav) return;
      nav.style.boxShadow =
        window.scrollY > 10
          ? "0 4px 20px rgba(13,31,45,.12)"
          : "0 2px 18px rgba(13,31,45,.07)";
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="topbar">
        <div className="topbar-inner">
          <span>
            Sales: <a href="tel:+916305621828">+91 63056 21828</a> &nbsp;|&nbsp;{" "}
            <a href="tel:+917032381958">+91 70323 81958</a>
          </span>
          <div className="topbar-r">
            <span>
              <a href="mailto:orvexaimportsandexports@gmail.com">orvexaimportsandexports@gmail.com</a>
            </span>
            <span>Building global connections with Indian exports</span>
          </div>
        </div>
      </div>

      <nav id="nav">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            <div className="logo-circle">B</div>
            <div className="logo-txt">
              <div className="name">
                Orv<span>exa</span>
              </div>
              <div className="sub">International Trade &amp; Export</div>
            </div>
          </Link>

          <ul className="nav-links">
            {navGroups.map((group) => (
              <li key={group.label}>
                <a href={group.href}>
                  {group.label}
                  {group.dropdown ? <span className="arr">▼</span> : null}
                </a>
                {group.dropdown ? (
                  <div className="drop">
                    {group.dropdown.map((item) => (
                      <a key={item.label} href={item.href}>
                        {item.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </li>
            ))}
          </ul>

          <a href="#contact" className="nav-cta">
            Get Started
          </a>
        </div>
      </nav>
    </>
  );
}
