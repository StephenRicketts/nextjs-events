import { getAllEvents } from "../../helpers/api-utils";
import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";

function AllEventsPage(props) {
  const { events } = props;
  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    fullPath;
  }

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: { events },
    revalidate: 60,
  };
}

export default AllEventsPage;
