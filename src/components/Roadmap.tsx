import { Fragment } from "react";
import Icon, { type IconName } from "./Icon";
import styles from "./Roadmap.module.css";

const STEPS: { icon: IconName; label: string; desc: string }[] = [
  {
    icon: "person_search",
    label: "Identify",
    desc: "Sourcing market-ready startups from 54 African nations.",
  },
  {
    icon: "verified",
    label: "Select",
    desc: "Rigorous institutional vetting and compatibility matching.",
  },
  {
    icon: "handshake",
    label: "Connect",
    desc: "Direct B2B summits and digital networking marathons.",
  },
  {
    icon: "rocket_launch",
    label: "Launch",
    desc: "Joint venture activation and capital injection rounds.",
  },
];

export default function Roadmap() {
  return (
    <section className={styles.roadmap}>
      <h2 className={styles.title}>Journey to Partnership</h2>

      <div className={styles.steps}>
        {STEPS.map((step, i) => (
          <Fragment key={step.label}>
            {i > 0 && (
              <div className={styles.connector} aria-hidden="true">
                <span className={styles.connectorLine} />
              </div>
            )}
            <div className={styles.step}>
              <div
                className={
                  i === 0
                    ? `${styles.circle} ${styles.circleActive}`
                    : styles.circle
                }
              >
                <Icon name={step.icon} size={24} />
              </div>
              <span className={styles.label}>{step.label}</span>
              <p className={styles.desc}>{step.desc}</p>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
