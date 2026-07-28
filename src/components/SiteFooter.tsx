import styles from "./SiteFooter.module.css";

const LINKS = [
  "Privacy Policy",
  "Terms of Service",
  "Institutional Credits",
  "Contact Secretariat",
];

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <span className={styles.gateway}>INSTITUTIONAL GATEWAY</span>
        <p className={styles.copyright}>
          © 2024 KAF-AfCFTA Startup Network. All rights reserved. Institutional
          Gateway for Korea-Africa Economic Cooperation. Operated in partnership
          with the Korea Africa Foundation.
        </p>
      </div>

      <nav className={styles.links}>
        {LINKS.map((label) => (
          <a key={label} className={styles.link} href="#">
            {label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
