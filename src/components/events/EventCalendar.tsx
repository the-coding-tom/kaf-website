import Image from "next/image";
import Icon, { type IconName } from "../Icon";
import styles from "./EventCalendar.module.css";

type EventItem = {
  day: string;
  month: string;
  type: string;
  title: string;
  info: { icon: IconName; label: string }[];
  cta: string;
  image: string;
  alt: string;
  /** The design keys only the middle card with an accent rule. */
  accented?: boolean;
};

const EVENTS: EventItem[] = [
  {
    day: "24",
    month: "AUG",
    type: "DEMO DAY",
    title: "African Fintech Demo Day",
    info: [
      { icon: "videocam", label: "Virtual Event" },
      { icon: "schedule", label: "09:00 - 12:00 GMT" },
    ],
    cta: "Details",
    image: "/images/event-fintech-demo-day.png",
    alt: "Founders presenting at a fintech demo day",
  },
  {
    day: "12",
    month: "SEP",
    type: "TRADE MISSION",
    title: "Logistics Trade Mission",
    info: [
      { icon: "location_on", label: "Lagos, Nigeria" },
      { icon: "groups", label: "20 Selected Delegates" },
    ],
    cta: "Apply to Join",
    image: "/images/event-logistics-mission.png",
    alt: "Container port logistics operation",
    accented: true,
  },
  {
    day: "05",
    month: "NOV",
    type: "WORKSHOP",
    title: "Institutional Partnership Workshop",
    info: [
      { icon: "location_on", label: "Rabat, Morocco" },
      { icon: "gavel", label: "Policy & Legal Focus" },
    ],
    cta: "Details",
    image: "/images/event-partnership-workshop.png",
    alt: "Delegates at an institutional policy workshop",
  },
];

export default function EventCalendar() {
  return (
    <section className={styles.calendar}>
      <div className={styles.grid}>
        {EVENTS.map((event) => (
          <article
            key={event.title}
            className={`${styles.card} ${event.accented ? styles.cardAccented : ""}`}
          >
            <div className={styles.image}>
              <Image
                src={event.image}
                alt={event.alt}
                fill
                sizes="(max-width: 1000px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              <span className={styles.dateBadge}>
                <span className={styles.day}>{event.day}</span>
                <span className={styles.month}>{event.month}</span>
              </span>
            </div>

            <div className={styles.body}>
              <span className={styles.type}>{event.type}</span>
              <h3 className={styles.title}>{event.title}</h3>

              <div className={styles.info}>
                {event.info.map((row) => (
                  <span key={row.label} className={styles.infoRow}>
                    <Icon name={row.icon} size={18} />
                    {row.label}
                  </span>
                ))}
              </div>

              <a className={styles.detailBtn} href="#">
                {event.cta}
              </a>
            </div>
          </article>
        ))}
      </div>

      <span className={styles.separator} aria-hidden="true" />

      <button type="button" className={styles.loadMore}>
        LOAD MORE EVENTS
        <Icon name="keyboard_arrow_down" size={20} />
      </button>
    </section>
  );
}
