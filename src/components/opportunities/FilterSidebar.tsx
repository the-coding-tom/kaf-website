import Icon from "../Icon";
import styles from "./FilterSidebar.module.css";

const COUNTRIES = [
  "All Countries",
  "Nigeria",
  "Kenya",
  "Egypt",
  "South Africa",
];
const SECTORS = ["Fintech", "Agritech", "Healthtech", "Cleantech"];
const STAGES = ["Series A", "Seed", "Series B+"];
const MARKETS = ["Korean Expansion", "Joint Ventures"];

export default function FilterSidebar() {
  return (
    <aside className={styles.sidebar} aria-label="Filters">
      <div className={styles.header}>
        <h2 className={styles.title}>Filters</h2>
        <button type="button" className={styles.clear}>
          Clear all
        </button>
      </div>

      <div className={styles.group}>
        <span className={styles.label} id="country-label">
          COUNTRY
        </span>
        <div className={styles.select}>
          <select
            className={styles.selectInput}
            aria-labelledby="country-label"
            defaultValue="All Countries"
          >
            {COUNTRIES.map((country) => (
              <option key={country}>{country}</option>
            ))}
          </select>
          <Icon name="keyboard_arrow_down" size={20} />
        </div>
      </div>

      <fieldset className={styles.group}>
        <legend className={styles.label}>SECTOR</legend>
        {SECTORS.map((sector) => (
          <label key={sector} className={styles.option}>
            <input
              type="checkbox"
              className={styles.input}
              defaultChecked={sector === "Fintech"}
            />
            <span className={styles.checkbox} aria-hidden="true">
              <Icon name="check" size={12} />
            </span>
            <span className={styles.optionLabel}>{sector}</span>
          </label>
        ))}
      </fieldset>

      <fieldset className={styles.group}>
        <legend className={styles.label}>INVESTMENT STAGE</legend>
        <div className={styles.chips}>
          {STAGES.map((stage) => (
            <label key={stage} className={styles.chip}>
              <input
                type="checkbox"
                className={styles.input}
                defaultChecked={stage === "Series A"}
              />
              <span className={styles.chipLabel}>{stage}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className={`${styles.group} ${styles.groupLast}`}>
        <legend className={styles.label}>MARKET INTEREST</legend>
        {MARKETS.map((market) => (
          <label key={market} className={styles.option}>
            <input type="radio" name="market" className={styles.input} />
            <span className={styles.radio} aria-hidden="true" />
            <span className={styles.optionLabel}>{market}</span>
          </label>
        ))}
      </fieldset>
    </aside>
  );
}
