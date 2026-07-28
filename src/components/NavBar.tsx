import Link from "next/link";
import Icon from "./Icon";
import styles from "./NavBar.module.css";

/**
 * `href: null` marks a destination whose design exists in Pencil but has no
 * route yet — it renders as plain text rather than a dead link that 404s.
 * Give it a path here once the page is built.
 */
const LINKS: { label: string; href: string | null }[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "Events", href: "/events" },
];

type NavBarProps = {
  /** Route of the page this nav sits on; picks out the underlined tab. */
  active?: string;
};

export default function NavBar({ active = "/" }: NavBarProps) {
  return (
    <header className={styles.nav}>
      {/* Co-brand lockup: the two partners set either side of a rule, weighted
          so KAF leads. aria-label carries the spoken name, since the divider is
          decorative and the two spans would otherwise run together. */}
      <Link
        className={styles.logo}
        href="/"
        aria-label="KAF and UM6P Gateway — home"
      >
        <span className={styles.logoPrimary}>KAF</span>
        <span className={styles.logoDivider} aria-hidden="true" />
        <span className={styles.logoSecondary}>
          UM6P <span className={styles.logoDescriptor}>Gateway</span>
        </span>
      </Link>

      <nav className={styles.links}>
        {LINKS.map(({ label, href }) => {
          if (href === active) {
            return (
              <span key={label} className={styles.activeTab} aria-current="page">
                <span className={styles.activeLabel}>{label}</span>
                <span className={styles.activeUnderline} />
              </span>
            );
          }

          return href ? (
            <Link key={label} className={styles.link} href={href}>
              {label}
            </Link>
          ) : (
            <span key={label} className={styles.link}>
              {label}
            </span>
          );
        })}
      </nav>

      <div className={styles.right}>
        <div className={styles.search}>
          <Icon name="search" size={20} />
          <span className={styles.searchText}>Search ecosystem...</span>
        </div>
        <Link className={styles.apply} href="/apply">
          Apply Now
        </Link>
      </div>
    </header>
  );
}
