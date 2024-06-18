import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/Icons/Logo.png';
import styles from './Header.module.css';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <img src={logo} alt="Logo" />
      </a>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li>
            <NavLink
              exact
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reservations"
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
            >
              Reservations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/order-online"
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
            >
              Order Online
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.hamburger} onClick={openModal}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeModal}>
              &times;
            </button>
            <nav className={styles.modalNavigation}>
              <ul className={styles.modalNavList}>
                <li>
                  <NavLink
                    exact
                    to="/"
                    className={({ isActive }) =>
                      isActive ? styles.active : styles.navLink
                    }
                    onClick={closeModal}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? styles.active : styles.navLink
                    }
                    onClick={closeModal}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/menu"
                    className={({ isActive }) =>
                      isActive ? styles.active : styles.navLink
                    }
                    onClick={closeModal}
                  >
                    Menu
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/reservations"
                    className={({ isActive }) =>
                      isActive ? styles.active : styles.navLink
                    }
                    onClick={closeModal}
                  >
                    Reservations
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/order-online"
                    className={({ isActive }) =>
                      isActive ? styles.active : styles.navLink
                    }
                    onClick={closeModal}
                  >
                    Order Online
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? styles.active : styles.navLink
                    }
                    onClick={closeModal}
                  >
                    Login
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
