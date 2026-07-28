import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import PageShell from "@/components/PageShell";
import DirectoryHeader from "@/components/opportunities/DirectoryHeader";
import FilterSidebar from "@/components/opportunities/FilterSidebar";
import StartupResults from "@/components/opportunities/StartupResults";
import InstitutionalFooter from "@/components/InstitutionalFooter";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "African Startup Directory — KAF-AfCFTA Gateway",
  description:
    "Vetted innovation leaders across the continent, pre-qualified for Korea-Africa economic collaboration and strategic investment.",
};

export default function OpportunitiesPage() {
  return (
    <PageShell>
      <NavBar active="/opportunities" />
      <main className={styles.main}>
        <DirectoryHeader />
        <div className={styles.contentRow}>
          <FilterSidebar />
          <StartupResults />
        </div>
      </main>
      <span className={styles.connectionLine} aria-hidden="true" />
      <InstitutionalFooter />
    </PageShell>
  );
}
