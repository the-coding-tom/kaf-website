import type { CSSProperties } from "react";
import Icon, { type IconName } from "./Icon";
import styles from "./Opportunities.module.css";

type Opportunity = {
  tag: string;
  tagColor: string;
  accent: string;
  icon: IconName;
  title: string;
  desc: string;
  cta: string;
  filled: boolean;
};

const OPPORTUNITIES: Opportunity[] = [
  {
    tag: "ACTIVE PROGRAM",
    tagColor: "var(--secondary-container)",
    accent: "var(--secondary-container)",
    icon: "calendar_today",
    title: "K-Global Logistics Partnership",
    desc: "Seeking 5 African cold-chain logistics startups for a pilot expansion into Busan’s smart-port network.",
    cta: "Apply Now",
    filled: true,
  },
  {
    tag: "CAPITAL CALL",
    tagColor: "var(--primary)",
    accent: "var(--primary)",
    icon: "payments",
    title: "Seoul Fintech Bridge",
    desc: "A $25M direct investment fund for cross-border payment solutions bridging KRW and African currencies.",
    cta: "Learn More",
    filled: false,
  },
  {
    tag: "VIRTUAL EVENT",
    tagColor: "var(--outline)",
    accent: "var(--tertiary-fixed-dim)",
    icon: "video_call",
    title: "AfCFTA Tech Summit",
    desc: "Register for the monthly digital demo day featuring top Korean accelerators and pan-African talent.",
    cta: "Register",
    filled: false,
  },
];

export default function Opportunities() {
  return (
    <section className={styles.opportunities}>
      <h2 className={styles.title}>Active Korean Opportunities</h2>

      <div className={styles.grid}>
        {OPPORTUNITIES.map((item) => (
          <article
            key={item.title}
            className={styles.card}
            style={
              {
                "--accent": item.accent,
                "--tag-color": item.tagColor,
              } as CSSProperties
            }
          >
            <div className={styles.top}>
              <span className={styles.tag}>{item.tag}</span>
              <Icon name={item.icon} size={20} />
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.desc}>{item.desc}</p>
            <a
              className={`${styles.button} ${
                item.filled ? styles.buttonFilled : styles.buttonOutlined
              }`}
              href="#"
            >
              {item.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
