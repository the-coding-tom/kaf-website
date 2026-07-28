import Icon from "../Icon";
import StartupCard, { type Startup } from "./StartupCard";
import styles from "./StartupResults.module.css";

const STARTUPS: Startup[] = [
  {
    name: "KinetiPay",
    sector: "FINTECH",
    accent: "var(--secondary)",
    location: "Lagos, Nigeria",
    founded: "Est. 2019",
    desc: "Cross-border payment infrastructure specialized in Korea-Africa remittance flows, reducing settlement times from 3 days to under 60 seconds.",
    stage: "Series A",
    logo: "/images/startup-kinetipay.png",
  },
  {
    name: "TerraSync Data",
    sector: "AGRITECH",
    accent: "var(--tertiary-container)",
    location: "Nairobi, Kenya",
    founded: "Est. 2021",
    desc: "High-resolution satellite imagery analysis for smallholder farmers, leveraging Korean AI models to predict crop yields with 94% accuracy.",
    stage: "Seed",
    logo: "/images/startup-terrasync.png",
  },
  {
    name: "HealStream Africa",
    sector: "HEALTHTECH",
    accent: "var(--secondary)",
    location: "Cairo, Egypt",
    founded: "Est. 2020",
    desc: "Remote diagnostic platforms connecting rural clinics to specialist networks in Seoul and Johannesburg for real-time surgical support.",
    stage: "Series B",
    logo: "/images/startup-healstream.png",
  },
  {
    name: "SolarGrid Nexus",
    sector: "CLEANTECH",
    accent: "var(--on-tertiary-container)",
    location: "Cape Town, SA",
    founded: "Est. 2018",
    desc: "Decentralized solar micro-grids providing reliable energy to manufacturing hubs, powered by next-gen battery tech from Korean partners.",
    stage: "Series A",
    logo: "/images/startup-solargrid.png",
  },
];

const PAGES = ["1", "2", "3", "…", "12"];

export default function StartupResults() {
  return (
    <div className={styles.results}>
      <div className={styles.resultsHeader}>
        <span className={styles.count}>SHOWING 24 STARTUPS</span>

        <div className={styles.viewToggle} role="group" aria-label="View mode">
          <button
            type="button"
            className={`${styles.viewBtn} ${styles.viewBtnActive}`}
            aria-pressed="true"
            aria-label="Grid view"
          >
            <Icon name="grid_view" size={24} />
          </button>
          <button
            type="button"
            className={styles.viewBtn}
            aria-pressed="false"
            aria-label="List view"
          >
            <Icon name="view_list" size={24} />
          </button>
        </div>
      </div>

      <div className={styles.grid}>
        {STARTUPS.map((startup) => (
          <StartupCard key={startup.name} startup={startup} />
        ))}
      </div>

      <nav className={styles.pagination} aria-label="Pagination">
        <button type="button" className={styles.pageBtn} aria-label="Previous page">
          <Icon name="chevron_left" size={24} />
        </button>

        {PAGES.map((page, i) =>
          page === "…" ? (
            <span key="ellipsis" className={styles.ellipsis} aria-hidden="true">
              {page}
            </span>
          ) : (
            <button
              key={page}
              type="button"
              className={`${styles.pageBtn} ${i === 0 ? styles.pageBtnActive : ""}`}
              aria-current={i === 0 ? "page" : undefined}
            >
              {page}
            </button>
          ),
        )}

        <button type="button" className={styles.pageBtn} aria-label="Next page">
          <Icon name="chevron_right" size={24} />
        </button>
      </nav>
    </div>
  );
}
