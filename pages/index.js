import EventList from "@/components/events/event-list";
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
        <EventList items={featuredEvents} />
      </main>
    </>
  );
}
