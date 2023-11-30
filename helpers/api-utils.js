export async function getAllEvents() {
  const response = await fetch(
    "https://events-97a53-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();
  console.log("this is data", data);

  const events = [];

  for (const key in data) {
    console.log("this is key", key);
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}
