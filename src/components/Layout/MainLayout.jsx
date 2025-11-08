import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Layout.module.scss";
import FooterSimple from "@/components/Footer/FooterSimple";
import ContentArea from "./ContentArea";

export default function MainLayout() {
  const [activeSection, setActiveSection] = useState("button");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking on menu item
  const handleMenuItemClick = (section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest(`.${styles.sidebar}`) && !event.target.closest(`.${styles.header__menuButton}`)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <div className={styles.layout}>
      {/* HEADER */}
      <header className={styles.header}>
        <button
          className={styles.header__menuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <FaTimes className={styles.header__menuIcon} />
          ) : (
            <FaBars className={styles.header__menuIcon} />
          )}
        </button>
        <h1 className={styles.header__title}>MY COMPONENTS</h1>
      </header>

      {/* MOBILE OVERLAY */}
      {isMobileMenuOpen && (
        <div 
          className={styles.mobileOverlay}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* MAIN */}
      <div className={styles.main}>
        {/* SIDEBAR */}
        <aside className={`${styles.sidebar} ${isMobileMenuOpen ? styles.sidebarOpen : ""}`}>
          <h2 className={styles.sidebar__title}>COMPONENTS</h2>
          <ul className={styles.sidebar__menu}>
            {["Button", "Card", "Header", "Footer", "Sidebar"].map((item) => (
              <li
                key={item}
                className={`${styles.sidebar__item} ${
                  activeSection === item.toLowerCase()
                    ? styles["sidebar__item--active"]
                    : ""
                }`}
                onClick={() => handleMenuItemClick(item.toLowerCase())}
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>

        {/* CONTENT */}
        <main className={styles.content}>
          <ContentArea activeSection={activeSection} />
        </main>
      </div>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <FooterSimple />
      </footer>
    </div>
  );
}
