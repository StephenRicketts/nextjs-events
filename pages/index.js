import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-utils";
import Head from "next/head";
import { useRouter } from "next/router";
import NewsletterRegistration from "@/components/input/newsletter-registration";

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
        <NewsletterRegistration />
        <EventList items={props.events} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}
