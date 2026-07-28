import Icon from "../Icon";
import styles from "./DirectoryHeader.module.css";

export default function DirectoryHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <span className={styles.crumb}>Network</span>
          <Icon name="chevron_right" size={14} />
          <span className={styles.crumbActive} aria-current="page">
            Startup Directory
          </span>
        </nav>

        <h1 className={styles.title}>African Startup Directory</h1>
        <p className={styles.desc}>
          Discover vetted innovation leaders across the continent, pre-qualified
          for Korea-Africa economic collaboration and strategic investment.
        </p>
      </div>

      <div className={styles.badge}>
        <Icon name="verified" size={20} filled />
        <span className={styles.badgeText}>Approved Participants</span>
      </div>
    </div>
  );
}
