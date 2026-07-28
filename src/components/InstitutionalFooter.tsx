import Icon, { type IconName } from "./Icon";
import styles from "./InstitutionalFooter.module.css";

const ICONS: IconName[] = ["public", "business_center", "verified_user"];

const COLUMNS: { heading: string; links: string[] }[] = [
  { heading: "Legal", links: ["Privacy Policy", "Terms of Service"] },
  {
    heading: "Support",
    links: ["Institutional Credits", "Contact Secretariat"],
  },
];

export default function InstitutionalFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <span className={styles.label}>INSTITUTIONAL GATEWAY</span>
        <p className={styles.copy}>
          © 2024 KAF-AfCFTA Startup Network. All rights reserved. Institutional
          Gateway for Korea-Africa Economic Cooperation.
        </p>
        <div className={styles.icons} aria-hidden="true">
          {ICONS.map((name) => (
            <Icon key={name} name={name} size={20} />
          ))}
        </div>
      </div>

      <div className={styles.right}>
        {COLUMNS.map((column) => (
          <nav key={column.heading} className={styles.column}>
            <span className={styles.heading}>{column.heading}</span>
            {column.links.map((link) => (
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
