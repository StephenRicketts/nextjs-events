import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { getFeaturedEvents } from "../helpers/api-utils";
import Head from "next/head";
import { useRouter } from "next/router";

export default function HomePage(props) {
  const router = useRouter();
  // const featuredEvents = getFeaturedEvents();
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
        {/* <EventsSearch onSearch={findEventsHandler} /> */}
        <EventList items={props.events} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  console.log("this is featured events", featuredEvents);
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}
