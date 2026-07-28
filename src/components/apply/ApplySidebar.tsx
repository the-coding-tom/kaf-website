import Icon from "../Icon";
import styles from "./ApplySidebar.module.css";

const STEPS = [
  {
    title: "Submit Application",
    desc: "Complete this form with your company details.",
  },
  {
    title: "Panel Review",
    desc: "Our institutional panel reviews within 10 business days.",
  },
  {
    title: "Verification Call",
    desc: "A brief call to verify details and discuss goals.",
  },
  {
    title: "Network Access",
    desc: "Approved startups gain full platform access.",
  },
];

const STATS = [
  { label: "Approved Startups", value: "240+" },
  { label: "Capital Facilitated", value: "$180M" },
  { label: "African Countries", value: "12" },
  { label: "Approval Rate", value: "85%" },
];

const TRUSTED = [
  "Korea Africa Foundation",
  "AfCFTA Secretariat",
  "KOTRA Seoul",
  "AfDB Innovation Lab",
];

export default function ApplySidebar() {
  return (
    <aside className={styles.sidebar}>
      <section className={styles.card}>
        <h2 className={styles.cardTitle}>Application Process</h2>

        <ol className={styles.steps}>
          {STEPS.map((step, i) => (
            <li key={step.title} className={styles.step}>
              <span
                className={`${styles.stepNum} ${i === 0 ? styles.stepNumActive : ""}`}
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <div className={styles.stepText}>
                <span className={styles.stepTitle}>{step.title}</span>
                <span className={styles.stepDesc}>{step.desc}</span>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.statsCard}>
        <h2 className={styles.statsTitle}>Network at a Glance</h2>

        <dl className={styles.stats}>
          {STATS.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <dt className={styles.statLabel}>{stat.label}</dt>
              <dd className={styles.statValue}>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={`${styles.card} ${styles.trustCard}`}>
        <h2 className={styles.trustTitle}>Trusted By</h2>

        <ul className={styles.trustList}>
          {TRUSTED.map((name) => (
            <li key={name} className={styles.trustRow}>
              <Icon name="verified" size={20} />
              <span className={styles.trustName}>{name}</span>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
