import type { CSSProperties } from "react";
import Image from "next/image";
import Icon from "../Icon";
import styles from "./TargetParticipants.module.css";

type Participant = {
  title: string;
  accent: string;
  desc: string;
  checks: string[];
  image: string;
  alt: string;
};

const PARTICIPANTS: Participant[] = [
  {
    title: "African Innovators",
    accent: "var(--on-tertiary-container)",
    desc: "High-growth startups and SMEs across the AfCFTA zone seeking technological partnership and capital infusion from Korean institutional investors.",
    checks: [
      "Validated business models with cross-border scalability.",
      "Sectors: Fintech, Agritech, Renewable Energy, and Logistics.",
    ],
    image: "/images/about-african-innovators.png",
    alt: "African founders collaborating in a co-working space",
  },
  {
    title: "Korean Stakeholders",
    accent: "var(--secondary-container)",
    desc: "Institutional investors, tech conglomerates (Chaebols), and policy makers looking to diversify portfolios into the world's largest emerging free trade zone.",
    checks: [
      "Institutional VCs and Government Pension Funds.",
      "Corporates seeking strategic joint ventures in manufacturing.",
    ],
    image: "/images/about-korean-stakeholders.png",
    alt: "Korean industrial and investment partners in discussion",
  },
];

export default function TargetParticipants() {
  return (
    <section className={styles.section}>
      {PARTICIPANTS.map((item) => (
        <article
          key={item.title}
          className={styles.card}
          style={{ "--accent": item.accent } as CSSProperties}
        >
          <div className={styles.top}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.desc}>{item.desc}</p>

            <ul className={styles.checklist}>
              {item.checks.map((check) => (
                <li key={check} className={styles.check}>
                  <Icon name="check_circle" size={20} />
                  <span className={styles.checkText}>{check}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.image}>
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 1000px) 100vw, 45vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </article>
      ))}
    </section>
  );
}
