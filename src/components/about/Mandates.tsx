import styles from "./Mandates.module.css";

const MANDATES = [
  {
    abbr: "KAF",
    name: "Korea-Africa Foundation",
    desc: "Primary diplomatic anchor driving bilateral trade policy and cultural exchange.",
  },
  {
    abbr: "AFCFTA",
    name: "Secretariat",
    desc: "Governing body for the continent-wide free trade zone and regulatory harmonization.",
  },
  {
    abbr: "KACF",
    name: "KACF Fund",
    desc: "Dedicated financial instrument for technology-focused bilateral investments.",
  },
  {
    abbr: "UM6P",
    name: "University Tech",
    desc: "R&D and vetting partner ensuring high-quality technical throughput from African startups.",
  },
  {
    abbr: "ACCELERATOR",
    name: "The Korean Accelerator",
    desc: "Strategic execution partner for Go-To-Market strategies in East Asia.",
  },
];

export default function Mandates() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Institutional Mandates</h2>
        <p className={styles.subtitle}>
          The foundations of the Korea-Africa Economic Cooperation.
        </p>
      </div>

      <div className={styles.grid}>
        {MANDATES.map((item) => (
          <article key={item.abbr} className={styles.card}>
            <span className={styles.abbr}>{item.abbr}</span>
            <h3 className={styles.name}>{item.name}</h3>
            <p className={styles.desc}>{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
