import styles from "./EventsFooter.module.css";

const COLUMNS = [
  ["Privacy Policy", "Terms of Service"],
  ["Institutional Credits", "Contact Secretariat"],
];

export default function EventsFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <span className={styles.label}>KAF-AfCFTA GATEWAY</span>
        <p className={styles.copy}>
          © 2024 KAF-AfCFTA Startup Network. All rights reserved. Institutional
          Gateway for Korea-Africa Economic Cooperation.
        </p>
      </div>

      <div className={styles.links}>
        {COLUMNS.map((column) => (
          <nav key={column[0]} className={styles.column}>
            {column.map((link) => (
              <a key={link} className={styles.link} href="#">
                {link}
              </a>
            ))}
          </nav>
        ))}
      </div>
    </footer>
  );
}
