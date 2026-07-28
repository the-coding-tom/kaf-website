import Icon, { type IconName } from "../Icon";
import styles from "./AboutFooter.module.css";

const LINKS = [
  "Privacy Policy",
  "Terms of Service",
  "Institutional Credits",
  "Contact Secretariat",
];

const ICONS: IconName[] = ["language", "shield", "hub"];

export default function AboutFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <span className={styles.brand}>KAF-AFCFTA STARTUP NETWORK</span>
        <p className={styles.copy}>
          © 2024 KAF-AfCFTA Startup Network. All rights reserved. Institutional
          Gateway for Korea-Africa Economic Cooperation.
        </p>
      </div>

      <div className={styles.right}>
        <nav className={styles.links}>
          {LINKS.map((label) => (
            <a key={label} className={styles.link} href="#">
              {label}
            </a>
          ))}
        </nav>

        <div className={styles.icons} aria-hidden="true">
          {ICONS.map((name) => (
            <Icon key={name} name={name} size={20} />
          ))}
        </div>
      </div>
    </footer>
  );
}
