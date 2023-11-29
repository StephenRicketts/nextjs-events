import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { getFeaturedEvents } from "@/dummy-data";
import Head from "next/head";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <Head>
        <title>events-project</title>
      </Head>
      <main>
        <EventsSearch />
        <EventList items={featuredEvents} />
      </main>
    </>
  );
}
