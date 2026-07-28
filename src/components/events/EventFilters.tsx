import Icon from "../Icon";
import styles from "./EventFilters.module.css";

const FILTERS = [
  { label: "All Types", options: ["All Types", "Summit", "Demo Day", "Workshop"] },
  { label: "Location", options: ["Location", "Korea", "Nigeria", "Morocco"] },
  { label: "Date", options: ["Date", "This month", "Next 3 months"] },
];

export default function EventFilters() {
  return (
    <section className={styles.filters} aria-label="Event filters">
      <div className={styles.controls}>
        {FILTERS.map((filter) => (
          <div key={filter.label} className={styles.control}>
            <select
              className={styles.select}
              aria-label={filter.label}
              defaultValue={filter.label}
            >
              {filter.options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <Icon name="keyboard_arrow_down" size={18} />
          </div>
        ))}
      </div>

      <span className={styles.count}>Showing 12 Upcoming Events</span>
    </section>
  );
}
