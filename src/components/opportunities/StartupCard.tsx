import type { CSSProperties } from "react";
import Image from "next/image";
import Icon from "../Icon";
import styles from "./StartupCard.module.css";

export type Startup = {
  name: string;
  sector: string;
  /** Drives both the sector label and the rule down the card's leading edge. */
  accent: string;
  location: string;
  founded: string;
  desc: string;
  stage: string;
  logo: string;
};

export default function StartupCard({ startup }: { startup: Startup }) {
  return (
    <article
      className={styles.card}
      style={{ "--accent": startup.accent } as CSSProperties}
    >
      <div className={styles.top}>
        <div className={styles.logo}>
          <Image
            src={startup.logo}
            alt={`${startup.name} logo`}
            fill
            sizes="64px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <span className={styles.sector}>{startup.sector}</span>
      </div>

      <h3 className={styles.name}>{startup.name}</h3>

      <div className={styles.meta}>
        <span className={styles.metaItem}>
          <Icon name="location_on" size={16} />
          {startup.location}
        </span>
        <span className={styles.metaItem}>
          <Icon name="calendar_today" size={16} />
          {startup.founded}
        </span>
      </div>

      <p className={styles.desc}>{startup.desc}</p>

      <div className={styles.bottom}>
        <span className={styles.stage}>{startup.stage}</span>
        <a className={styles.view} href="#">
          VIEW PROFILE
          <Icon name="arrow_forward" size={18} />
        </a>
      </div>
    </article>
  );
}
