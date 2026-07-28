import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import PageShell from "@/components/PageShell";
import InstitutionalFooter from "@/components/InstitutionalFooter";
import ApplyHero from "@/components/apply/ApplyHero";
import ApplyForm from "@/components/apply/ApplyForm";
import ApplySidebar from "@/components/apply/ApplySidebar";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Apply to the Network — KAF-AfCFTA Gateway",
  description:
    "Submit your startup for review by our institutional panel and gain access to Korean investors, trade missions, and market entry programmes.",
};

export default function ApplyPage() {
  return (
    <PageShell className={styles.shell}>
      {/* No nav tab is current here — the page is reached from the Apply Now
          button, so `active` is set to a route no link declares. */}
      <NavBar active="/apply" />
      <main className={styles.main}>
        <ApplyHero />
        <div className={styles.content}>
          <ApplyForm />
          <ApplySidebar />
        </div>
      </main>
      <InstitutionalFooter />
    </PageShell>
  );
}
