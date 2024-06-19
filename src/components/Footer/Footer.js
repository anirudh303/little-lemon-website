import React from "react";
import logo from "../../assets/Icons/Logo.svg";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <img src={logo} alt="Secondary Logo" />
      </div>
      <div className={styles.data}>
        <div className={styles.links}>
          <ul>
            <h5>Navigation</h5>
            <li>
              <Link to="/" className={styles.link}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={styles.link}>
                About
              </Link>
            </li>
            <li>
              <Link to="/menu" className={styles.link}>
                Menu
              </Link>
            </li>
            <li>
              <Link to="/reservations" className={styles.link}>
                Reservations
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.contact}>
          <ul>
            <h5>Contact</h5>
            <li>
              <a href="tel:your-phone-number">Phone Number</a>
            </li>
            <li>
              <a href="mailto:your-email@example.com">Email</a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/place/Your+Address"
                target="_blank"
                rel="noopener noreferrer"
              >
                Address
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.social}>
          <ul className={styles.socialIcons}>
            <h5>Social Media</h5>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
