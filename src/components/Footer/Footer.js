import React from "react";
import logo from "../../assets/Icons/Logo.svg";
import { Link } from "react-router-dom";

// Data for navigation links
const navigationLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/reservations", label: "Reservations" },
];

// Data for contact information
const contactInfo = [
  { href: "tel:your-phone-number", label: "Phone Number" },
  { href: "mailto:your-email@example.com", label: "Email" },
  { href: "https://www.google.com/maps/place/Your+Address", label: "Address" },
];

// Data for social media links
const socialLinks = [
  { href: "https://www.instagram.com", label: "Instagram" },
  { href: "https://www.facebook.com", label: "Facebook" },
  { href: "https://www.linkedin.com", label: "LinkedIn" },
];

// A generic component to render list of links
const FooterSection = ({ title, links, isReactRouterLink = false }) => (
  <div className="w-full md:w-1/4 p-4">
    <h5 className="mb-4 text-2xl font-semibold">{title}</h5>
    <ul>
      {links.map((link, index) => (
        <li key={index} className="my-1">
          {isReactRouterLink ? (
            <Link
              to={link.to}
              className="  no-underline text-md hover:ml-1 hover:text-[#020202]"
            >
              {link.label}
            </Link>
          ) : (
            <a
              href={link.href}
              className=" text-md no-underline hover:ml-1 hover:text-[#020202]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  </div>
);

function Footer() {
  return (
    <footer className="flex  w-full justify-start md:justify-center md:text-center p-12 bg-[#F3F7EC] text-[#495e57]">
      <div className="w-1/5 flex justify-center md:mr-8">
        <img src={logo} alt="Secondary Logo" className="w-full md:w-auto" />
      </div>
      <div className="flex flex-wrap justify-between w-full md:w-4/5">
        <FooterSection
          title="Navigation"
          links={navigationLinks}
          isReactRouterLink={true}
        />
        <FooterSection title="Contact" links={contactInfo} />
        <FooterSection title="Social Media" links={socialLinks} />
      </div>
    </footer>
  );
}

export default Footer;
