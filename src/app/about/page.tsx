import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import PageShell from "@/components/PageShell";
import AboutHero from "@/components/about/AboutHero";
import TargetParticipants from "@/components/about/TargetParticipants";
import OperatingModel from "@/components/about/OperatingModel";
import SupportPackage from "@/components/about/SupportPackage";
import Mandates from "@/components/about/Mandates";
import AboutFooter from "@/components/about/AboutFooter";

export const metadata: Metadata = {
  title: "The Gateway Initiative — KAF-AfCFTA Gateway",
  description:
    "A bilateral economic acceleration programme bridging Korean industry with the African Continental Free Trade Area.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <NavBar active="/about" />
      <main>
        <AboutHero />
        <TargetParticipants />
        <OperatingModel />
        <SupportPackage />
        <Mandates />
      </main>
      <AboutFooter />
    </PageShell>
  );
}
