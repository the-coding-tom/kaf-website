import Image from "next/image";
import Icon from "../Icon";
import styles from "./FeaturedBento.module.css";

export default function FeaturedBento() {
  return (
    <section className={styles.bento}>
      <div className={styles.row}>
        <article className={styles.featured}>
          <Image
            src="/images/event-tech-summit.png"
            alt="Delegates at the Korea-Africa Tech Summit"
            fill
            priority
            sizes="(max-width: 1000px) 100vw, 65vw"
            style={{ objectFit: "cover" }}
          />
          <div className={styles.scrim} aria-hidden="true" />

          <div className={styles.featuredContent}>
            <div className={styles.badges}>
              <span className={styles.badgeAccent}>Flagship Summit</span>
              <span className={styles.badgeGhost}>In-Person</span>
            </div>

            <h2 className={styles.featuredTitle}>
              The 2024 Korea-Africa Tech Summit
            </h2>

            <div className={styles.featuredMeta}>
              <span className={styles.metaItem}>
                <Icon name="calendar_today" size={16} />
                Oct 15-17, 2024
              </span>
              <span className={styles.metaItem}>
                <Icon name="location_on" size={16} />
                Seoul, Korea
              </span>
            </div>

            <a className={styles.register} href="#">
              Register Now
            </a>
          </div>
        </article>

        <div className={styles.side}>
          <article className={styles.speakers}>
            <h3 className={styles.cardTitle}>Speaker Lineup</h3>
            <p className={styles.cardDesc}>
              Meet over 50 institutional heads and tech founders shaping the
              bilateral trade agenda.
            </p>
            <div className={styles.avatars} aria-hidden="true">
              <span className={styles.avatar} />
              <span className={styles.avatar} />
              <span className={styles.avatar} />
              <span className={styles.avatarCount}>+47</span>
            </div>
          </article>

          <article className={styles.b2b}>
            <Icon name="hub" size={120} className={styles.b2bGlyph} />
            <h3 className={styles.b2bTitle}>B2B Matching</h3>
            <p className={styles.b2bDesc}>
              Our AI-driven platform connects startups with strategic partners
              during the summit.
            </p>
            <a className={styles.learnMore} href="#">
              LEARN MORE
              <Icon name="arrow_forward" size={18} />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
