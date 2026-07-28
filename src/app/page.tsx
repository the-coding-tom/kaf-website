import NavBar from "@/components/NavBar";
import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Partners from "@/components/Partners";
import Roadmap from "@/components/Roadmap";
import Featured from "@/components/Featured";
import Opportunities from "@/components/Opportunities";
import CallToAction from "@/components/CallToAction";
import SiteFooter from "@/components/SiteFooter";

export default function Page() {
  return (
    <PageShell>
      <NavBar active="/" />
      <main>
        <Hero />
        <Mission />
        <Partners />
        <Roadmap />
        <Featured />
        <Opportunities />
        <CallToAction />
      </main>
      <SiteFooter />
    </PageShell>
  );
}
