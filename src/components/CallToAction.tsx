import Icon from "./Icon";
import styles from "./CallToAction.module.css";

export default function CallToAction() {
  return (
    <section className={styles.cta}>
      <h2 className={styles.headline}>Ready to Bridge the Gap?</h2>
      <p className={styles.subtitle}>
        Whether you are a startup seeking scale or an institution looking for
        growth, the KAF-AfCFTA Gateway is your entry point to the corridor of
        innovation.
      </p>

      <div className={styles.buttons}>
        <a className={styles.registerBtn} href="#">
          Register Organization
        </a>
        <a className={styles.contactBtn} href="#">
          Contact Secretariat
          <Icon name="mail" size={20} />
        </a>
      </div>
    </section>
  );
}
