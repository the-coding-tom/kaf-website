import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import PageShell from "@/components/PageShell";
import EventsHero from "@/components/events/EventsHero";
import FeaturedBento from "@/components/events/FeaturedBento";
import EventFilters from "@/components/events/EventFilters";
import EventCalendar from "@/components/events/EventCalendar";
import Newsletter from "@/components/events/Newsletter";
import EventsFooter from "@/components/events/EventsFooter";

export const metadata: Metadata = {
  title: "Institutional Events & Summits — KAF-AfCFTA Gateway",
  description:
    "A curated calendar of summits, demo days, and trade missions across the Korea-Africa innovation corridor.",
};

export default function EventsPage() {
  return (
    <PageShell>
      <NavBar active="/events" />
      <main>
        <EventsHero />
        <FeaturedBento />
        <EventFilters />
        <EventCalendar />
        <Newsletter />
      </main>
      <EventsFooter />
    </PageShell>
  );
}
