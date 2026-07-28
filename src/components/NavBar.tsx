import Icon from "./Icon";
import styles from "./NavBar.module.css";

const LINKS = ["About", "Opportunities", "Events"];

export default function NavBar() {
  return (
    <header className={styles.nav}>
      <span className={styles.logo}>KAF-AfCFTA Gateway</span>

      <nav className={styles.links}>
        <a className={styles.activeTab} href="#" aria-current="page">
          <span className={styles.activeLabel}>Home</span>
          <span className={styles.activeUnderline} />
        </a>
        {LINKS.map((label) => (
          <a key={label} className={styles.link} href="#">
            {label}
          </a>
        ))}
      </nav>

      <div className={styles.right}>
        <div className={styles.search}>
          <Icon name="search" size={20} />
          <span className={styles.searchText}>Search ecosystem...</span>
        </div>
        <a className={styles.apply} href="#">
          Apply Now
        </a>
      </div>
    </header>
  );
}
