import styles from "./OperatingModel.module.css";

type Side = { tag: string; title: string; desc: string };

const STAGES: { accent: "primary" | "secondary"; left: Side; right: Side }[] = [
  {
    accent: "primary",
    left: {
      tag: "STAGE 01: VETTING",
      title: "African Pipeline",
      desc: "Due diligence conducted by UM6P and AfCFTA Secretariat to identify high-trust entities ready for Korean integration.",
    },
    right: {
      tag: "STAGE 01: MATCHING",
      title: "Korean Pipeline",
      desc: "KAF and KACF identify strategic alignment between Korean industrial capabilities and African market needs.",
    },
  },
  {
    accent: "secondary",
    left: {
      tag: "STAGE 02: DEPLOYMENT",
      title: "Local Scaling",
      desc: "Implementation of technology transfer protocols and initial capital disbursement for market expansion.",
    },
    right: {
      tag: "STAGE 02: SYNDICATION",
      title: "Joint Venture",
      desc: "Formulation of legal frameworks for long-term equity partnership and operational governance.",
    },
  },
];

export default function OperatingModel() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>The Bilateral Operating Model</h2>

      <div className={styles.grid}>
        {STAGES.map((stage) => {
          const tagClass = `${styles.tag} ${
            stage.accent === "primary" ? styles.tagPrimary : styles.tagAccent
          }`;

          return (
            <div key={stage.left.tag} className={styles.row}>
              <div className={`${styles.side} ${styles.left}`}>
                <span className={tagClass}>{stage.left.tag}</span>
                <h3 className={styles.stageTitle}>{stage.left.title}</h3>
                <p className={styles.stageDesc}>{stage.left.desc}</p>
              </div>

              <span className={styles.divider} aria-hidden="true" />

              <div className={styles.side}>
                <span className={tagClass}>{stage.right.tag}</span>
                <h3 className={styles.stageTitle}>{stage.right.title}</h3>
                <p className={styles.stageDesc}>{stage.right.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
