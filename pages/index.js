import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { getFeaturedEvents } from "@/dummy-data";
import Head from "next/head";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();
  const featuredEvents = getFeaturedEvents();
  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <>
      <Head>
        <title>events-project</title>
      </Head>
      <main>
        <EventsSearch onSearch={findEventsHandler} />
        <EventList items={featuredEvents} />
      </main>
    </>
  );
}
