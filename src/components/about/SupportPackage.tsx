import styles from "./SupportPackage.module.css";

const TAGS = ["Capital Injection", "Legal Advisory", "Market Access"];

export default function SupportPackage() {
  return (
    <section className={styles.section}>
      <div className={styles.box}>
        <div className={styles.left}>
          <h2 className={styles.title}>The 2024 Support Package</h2>
          <p className={styles.desc}>
            Successful applicants gain access to the $150M Korea-Africa
            Innovation Fund, dedicated advisory from the Korean Accelerator, and
            legal indemnity via the AfCFTA Legal Vault.
          </p>

          <div className={styles.tags}>
            {TAGS.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <a className={styles.button} href="#">
          CHECK ELIGIBILITY
        </a>
      </div>
    </section>
  );
}
