import Image from "next/image";
import Icon from "./Icon";
import styles from "./Featured.module.css";

const META = [
  { label: "HQ", value: "Nairobi, Kenya" },
  { label: "SECTOR", value: "Greentech" },
  { label: "SERIES", value: "Series A" },
];

export default function Featured() {
  return (
    <section className={styles.featured}>
      <article className={styles.card}>
        <div className={styles.image}>
          <Image
            src="/images/featured-solarflow.png"
            alt="SolarFlow Solutions engineer inspecting a solar array"
            fill
            sizes="(max-width: 1000px) 100vw, 600px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={styles.content}>
          <span className={styles.tag}>FEATURED STARTUP</span>
          <h2 className={styles.name}>SolarFlow Solutions</h2>
          <p className={styles.desc}>
            Pioneering off-grid industrial power systems for manufacturing hubs
            across the Sahara. SolarFlow recently entered an R&amp;D partnership
            with major Korean photovoltaic manufacturers to integrate next-gen
            smart-grid sensors.
          </p>

          <div className={styles.meta}>
            {META.map((item) => (
              <div key={item.label} className={styles.metaCol}>
                <span className={styles.metaLabel}>{item.label}</span>
                <span className={styles.metaValue}>{item.value}</span>
              </div>
            ))}
          </div>

          <a className={styles.button} href="#">
            View Full Profile
            <Icon name="open_in_new" size={20} />
          </a>
        </div>
      </article>
    </section>
  );
}
