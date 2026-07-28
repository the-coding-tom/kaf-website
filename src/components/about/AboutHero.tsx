import Icon, { type IconName } from "../Icon";
import styles from "./AboutHero.module.css";

const BADGES: { icon: IconName; label: string }[] = [
  { icon: "verified_user", label: "Government Backed" },
  { icon: "public", label: "Pan-African Scope" },
];

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.label}>OFFICIAL PROGRAMME</span>
        <h1 className={styles.title}>The Gateway Initiative</h1>
        <p className={styles.desc}>
          A bilateral economic acceleration programme designed to bridge the
          Korean industrial powerhouse with the vast, untapped potential of the
          African Continental Free Trade Area (AfCFTA). We provide the
          structural framework for institutional investment, technology
          transfer, and market integration.
        </p>

        <div className={styles.badges}>
          {BADGES.map((badge) => (
            <div key={badge.label} className={styles.badge}>
              <Icon name={badge.icon} size={20} />
              <span className={styles.badgeText}>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
