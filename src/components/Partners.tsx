import Icon from "./Icon";
import styles from "./Partners.module.css";

const PARTNERS = [
  { abbr: "KAF", name: "Korea Africa Foundation" },
  { abbr: "AfCFTA", name: "Secretariat" },
  { abbr: "KACF", name: "Economic Fund" },
  { abbr: "UM6P", name: "Innovation Hub" },
  { abbr: "K-ACCEL", name: "The Korean Accelerator" },
];

export default function Partners() {
  return (
    <section className={styles.partners}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h2 className={styles.title}>Institutional Partners</h2>
          <p className={styles.subtitle}>
            The backbone of the Korea-Africa economic bridge.
          </p>
        </div>
        <a className={styles.link} href="#">
          View Secretariat
          <Icon name="chevron_right" size={20} />
        </a>
      </div>

      <div className={styles.grid}>
        {PARTNERS.map((partner) => (
          <div key={partner.abbr} className={styles.card}>
            <div className={styles.logoBox}>
              <span className={styles.abbr}>{partner.abbr}</span>
            </div>
            <span className={styles.name}>{partner.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
