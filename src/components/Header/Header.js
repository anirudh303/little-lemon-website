import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Icons/Logo.png";

function Header() {
  // Array storing navigation links and corresponding labels
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/menu", label: "Menu" },
    { path: "/reservations", label: "Reservations" },
  ];

  return (
    <header className="flex justify-between items-center w-full">
      <a href="/" className="flex">
        <img
          src={logo}
          alt="Logo"
          className="w-72 h-auto transition-width duration-300 ease-in-out"
        />
      </a>
      <nav className="flex items-center  mr-4">
        <ul className="flex list-none">
          {navLinks.map((link, index) => (
            <li key={index} className="mx-2.5">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-black text-xl font-bold underline p-1"
                    : "text-gray-800 text-xl  no-underline"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
