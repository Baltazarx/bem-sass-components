import React, { useState } from "react";
import styles from "./Layout.module.scss";
import FooterSimple from "@/components/Footer/FooterSimple";
import ContentArea from "./ContentArea";

export default function MainLayout() {
  const [activeSection, setActiveSection] = useState("button");

  return (
    <div className={styles.layout}>
      {/* HEADER */}
      <header className={styles.header}>
        <h1 className={styles.header__title}>MY COMPONENTS</h1>
      </header>

      {/* MAIN */}
      <div className={styles.main}>
        {/* SIDEBAR */}
        <aside className={styles.sidebar}>
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
                onClick={() => setActiveSection(item.toLowerCase())}
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
