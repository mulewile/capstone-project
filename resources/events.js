export const events = [
  {
    id: "0",
    name: "Reut",
    date: "24 March 2023",
    location: "Oslo",
    event: "50th Birthday",
    tasks: "Write a speech",
    ideas: "Play Yatzy",
    guests: "Jasmine, Alex",
  },
  {
    id: "1",
    name: "Asa e Giulio",
    date: "2 April 2023",
    location: "Da decidere",
    event: "Matrimonio",
    tasks: "Tiramisu- ci penso io",
    ideas: "?",
    guests: "89",
  },
  {
    id: "2",
    name: "Neue Fische",
    date: "17 May 2023",
    location: "Online",
    event: "Graduation",
    tasks: "Moderate",
    ideas: "?",
    guests: "?",
  },
];
export function getAllEvents() {
  return events;
}

export function getEventById(id) {
  return events.find((event) => event.id === id);
}
