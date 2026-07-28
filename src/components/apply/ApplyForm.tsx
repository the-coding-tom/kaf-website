import Icon from "../Icon";
import styles from "./ApplyForm.module.css";

const COUNTRIES = ["Nigeria", "Kenya", "Egypt", "South Africa", "Morocco"];
const SECTORS = ["Fintech", "Agritech", "Healthtech", "Cleantech", "Logistics"];
const STAGES = ["Pre-seed", "Seed", "Series A", "Series B+"];

const INTERESTS = [
  "Korean Investment",
  "Market Expansion",
  "Joint Ventures",
  "Technology Transfer",
  "Trade Missions",
  "Mentorship",
];

/** Placeholder is the design's first option — it is not a selectable value. */
function Select({
  id,
  label,
  placeholder,
  options,
  required,
}: {
  id: string;
  label: string;
  placeholder: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={id}>
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      <div className={styles.selectWrap}>
        <select
          id={id}
          className={styles.select}
          defaultValue=""
          required={required}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        <Icon name="keyboard_arrow_down" size={20} />
      </div>
    </div>
  );
}

function Input({
  id,
  label,
  placeholder,
  type = "text",
  required,
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={id}>
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      <input
        id={id}
        type={type}
        className={styles.input}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

export default function ApplyForm() {
  return (
    <form className={styles.form}>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Company Information</h2>
        <span className={styles.divider} aria-hidden="true" />

        <div className={styles.fields}>
          <div className={styles.row}>
            <Input
              id="company-name"
              label="Company Name"
              placeholder="e.g. KinetiPay"
              required
            />
            <Input
              id="website"
              label="Website"
              placeholder="https://"
              type="url"
            />
          </div>

          <div className={styles.row}>
            <Select
              id="country"
              label="Country of Operation"
              placeholder="Select country"
              options={COUNTRIES}
              required
            />
            <Select
              id="sector"
              label="Primary Sector"
              placeholder="Select sector"
              options={SECTORS}
              required
            />
          </div>

          <div className={styles.row}>
            <Input
              id="founded"
              label="Year Founded"
              placeholder="e.g. 2021"
            />
            <Select
              id="stage"
              label="Investment Stage"
              placeholder="Select stage"
              options={STAGES}
              required
            />
          </div>
        </div>
      </section>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="description">
          Company Description <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="description"
          className={`${styles.input} ${styles.textarea}`}
          placeholder="Describe your startup, product, and how it connects to the Korea-Africa corridor..."
          required
        />
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Primary Contact</h2>
        <span className={styles.divider} aria-hidden="true" />

        <div className={styles.fields}>
          <div className={styles.row}>
            <Input
              id="full-name"
              label="Full Name"
              placeholder="First and last name"
              required
            />
            <Input
              id="role"
              label="Role / Title"
              placeholder="e.g. CEO, CTO"
            />
          </div>

          <div className={styles.row}>
            <Input
              id="email"
              label="Email Address"
              placeholder="you@company.com"
              type="email"
              required
            />
            <Input
              id="phone"
              label="Phone Number"
              placeholder="+234..."
              type="tel"
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Korea-Africa Interest</h2>
        <span className={styles.divider} aria-hidden="true" />

        <fieldset className={styles.interest}>
          <legend className={styles.label}>
            What are you looking for? (Select all that apply)
          </legend>

          <div className={styles.chips}>
            {INTERESTS.map((interest) => (
              <label key={interest} className={styles.chip}>
                <input
                  type="checkbox"
                  name="interest"
                  value={interest}
                  className={styles.chipInput}
                  defaultChecked={interest === "Korean Investment"}
                />
                <span className={styles.chipLabel}>{interest}</span>
              </label>
            ))}
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="notes">
              Additional Notes
            </label>
            <textarea
              id="notes"
              className={`${styles.input} ${styles.textareaShort}`}
              placeholder="Any specific goals or partnership interests..."
            />
          </div>
        </fieldset>
      </section>

      <div className={styles.submitRow}>
        <button type="submit" className={styles.submit}>
          Submit Application
        </button>
        <span className={styles.requiredNote}>
          * Required fields must be completed
        </span>
      </div>
    </form>
  );
}
