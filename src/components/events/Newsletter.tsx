import styles from "./Newsletter.module.css";

export default function Newsletter() {
  return (
    <section className={styles.section}>
      <div className={styles.box}>
        <div className={styles.left}>
          <h2 className={styles.title}>Stay Updated on New Events</h2>
          <p className={styles.desc}>
            Get monthly alerts about upcoming trade missions, funding rounds,
            and summits delivered to your inbox.
          </p>
        </div>

        <form className={styles.form}>
          <label className={styles.srOnly} htmlFor="newsletter-email">
            Institutional email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            className={styles.input}
            placeholder="Institutional email address"
          />
          <button type="submit" className={styles.submit}>
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
