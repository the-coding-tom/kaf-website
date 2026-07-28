import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <div className={styles.textBlock}>
          <h1 className={styles.headline}>
            Connecting African Startups with Korean Industry, Investment and
            Innovation Partners.
          </h1>
          <p className={styles.subtitle}>
            Accelerating the digital transformation of the Africa Continental
            Free Trade Area through strategic bilateral economic cooperation and
            high-tech exchange.
          </p>
        </div>

        <div className={styles.buttons}>
          <Link className={styles.exploreBtn} href="/opportunities">
            Explore Startups
            <Icon name="arrow_forward" size={20} />
          </Link>
          <Link className={styles.roiBtn} href="/apply">
            Registration of Interest
          </Link>
        </div>
      </div>

      <div className={styles.image}>
        <Image
          src="/images/hero-boardroom.png"
          alt="Delegates meeting in a boardroom overlooking a city skyline"
          fill
          priority
          sizes="(max-width: 1000px) 100vw, 600px"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
}
