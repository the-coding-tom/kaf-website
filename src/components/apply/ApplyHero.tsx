import styles from "./ApplyHero.module.css";

export default function ApplyHero() {
  return (
    <section className={styles.hero}>
      <span className={styles.label}>JOIN THE CORRIDOR</span>
      <h1 className={styles.title}>
        Apply to the KAF-AfCFTA Startup Network
      </h1>
      <p className={styles.desc}>
        Submit your startup for review by our institutional panel. Approved
        participants gain access to Korean investors, trade missions, and
        bilateral market entry programs.
      </p>
    </section>
  );
}
