import styles from "./EventsHero.module.css";

export default function EventsHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.label}>CORRIDOR NETWORKING</span>
        <h1 className={styles.title}>Institutional Events &amp; Summits</h1>
        <p className={styles.desc}>
          Connect with the leaders of the Korea-Africa innovation corridor
          through our curated calendar of summits, demo days, and trade
          missions.
        </p>
      </div>
    </section>
  );
}
