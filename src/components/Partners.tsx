import Image from "next/image";
import Icon from "./Icon";
import styles from "./Partners.module.css";

/**
 * `logo` is optional — partners fall back to the abbreviation the design uses
 * until a real mark is supplied. Drop a file in public/images and point at it
 * here to replace the text.
 *
 * Use symbol-only marks: the strip prints each partner's name directly beneath,
 * and a lockup's own wordmark is unreadable at this size. partner-kaf-mark.png
 * is the supplied KAF logo with its wordmark cropped away for that reason; the
 * full lockup is kept alongside it as partner-kaf.png.
 */
type Partner = {
  abbr: string;
  name: string;
  /** Intrinsic size is per-logo so each keeps its own aspect ratio. */
  logo?: { src: string; width: number; height: number };
};

const PARTNERS: Partner[] = [
  {
    abbr: "KAF",
    name: "Korea Africa Foundation",
    logo: { src: "/images/partner-kaf-mark.png", width: 182, height: 98 },
  },
  {
    abbr: "AfCFTA",
    name: "Secretariat",
    logo: { src: "/images/partner-afcfta.png", width: 983, height: 993 },
  },
  {
    abbr: "KACF",
    name: "Economic Fund",
    logo: { src: "/images/partner-kacf.png", width: 404, height: 404 },
  },
  {
    abbr: "UM6P",
    name: "Innovation Hub",
    logo: { src: "/images/partner-um6p.png", width: 164, height: 164 },
  },
  {
    abbr: "K-ACCEL",
    name: "The Korean Accelerator",
    logo: { src: "/images/partner-kaccel.png", width: 384, height: 97 },
  },
];

export default function Partners() {
  return (
    <section className={styles.partners}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h2 className={styles.title}>Institutional Partners</h2>
          <p className={styles.subtitle}>
            The backbone of the Korea-Africa economic bridge.
          </p>
        </div>
        <a className={styles.link} href="#">
          View Secretariat
          <Icon name="chevron_right" size={20} />
        </a>
      </div>

      <div className={styles.grid}>
        {PARTNERS.map((partner) => (
          <div key={partner.abbr} className={styles.card}>
            <div className={styles.logoBox}>
              {partner.logo ? (
                /* Decorative: the partner's name is rendered directly below, so
                   an alt here would only announce it twice. */
                <Image
                  src={partner.logo.src}
                  alt=""
                  width={partner.logo.width}
                  height={partner.logo.height}
                  className={styles.logoImage}
                />
              ) : (
                <span className={styles.abbr}>{partner.abbr}</span>
              )}
            </div>
            <span className={styles.name}>{partner.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
