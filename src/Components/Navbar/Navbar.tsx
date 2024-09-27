import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface NavItem {
  label: string;
  path: string;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; path: string }[];
}

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Service", path: "/service" },
  {
    label: "Pages",
    path: "#",
    hasDropdown: true,
    dropdownItems: [
      { label: "Career", path: "/career" },
      { label: "Our Apps", path: "/our-apps" },
      { label: "Blog", path: "/blog" },
      { label: "Teams", path: "/teams" },
      { label: "FAQ", path: "/faq" },
    ],
  },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Event listener to change background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img src={logo} alt="fintech-logo" />
      </div>
      <div className={`nav-items ${isMenuOpen ? "open" : ""}`}>
        {navItems.map((item, index) => (
          <div key={index} className="nav-item-container">
            {item.hasDropdown ? (
              <>
                <a
                  href={item.path}
                  className="nav-item"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown();
                  }}
                >
                  {item.label}
                  {isDropdownOpen ? (
                    <IoIosArrowUp size={12} style={{ marginLeft: "8px" }} />
                  ) : (
                    <IoIosArrowDown size={12} style={{ marginLeft: "8px" }} />
                  )}
                </a>
                <div
                  className={`dropdown-menu ${isDropdownOpen ? "open" : ""}`}
                >
                  {item.dropdownItems?.map((dropdownItem, idx) => (
                    <a
                      key={idx}
                      href={dropdownItem.path}
                      className="dropdown-item"
                      onClick={toggleMenu}
                    >
                      {dropdownItem.label}
                    </a>
                  ))}
                </div>
              </>
            ) : (
              <a href={item.path} className="nav-item" onClick={toggleMenu}>
                {item.label}
              </a>
            )}
          </div>
        ))}

        <div className={`button-div ${isMenuOpen ? "show" : ""}`}>
          <button className="register-button">Register</button>
        </div>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
    </nav>
  );
};

export default Navbar;
