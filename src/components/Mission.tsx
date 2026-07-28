import styles from "./Mission.module.css";

const STATS = [
  {
    value: "12+",
    accent: false,
    label: "KOREA ENTITIES",
    desc: "Institutional investors, tech conglomerates, and government accelerators committed to AfCFTA development.",
  },
  {
    value: "85+",
    accent: true,
    label: "AFRICA STARTUPS",
    desc: "High-growth ventures across Fintech, Agritech, and Logistics sectors vetted for international scalability.",
  },
];

export default function Mission() {
  return (
    <section className={styles.mission}>
      <div className={styles.header}>
        <span className={styles.label}>OUR MANDATE</span>
        <h2 className={styles.title}>A Strategic Growth Corridor</h2>
      </div>

      <div className={styles.stats}>
        {STATS.map((stat) => (
          <div key={stat.label} className={styles.card}>
            <span
              className={`${styles.number} ${
                stat.accent ? styles.numberAccent : styles.numberPrimary
              }`}
            >
              {stat.value}
            </span>
            <span className={styles.cardLabel}>{stat.label}</span>
            <p className={styles.cardDesc}>{stat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
