import attach4x from "../assets/4xandupdate/attach-4x.webp";
import change4x from "../assets/4xandupdate/change-4x.webp";
import create4xSS from "../assets/4xandupdate/create-4x.webp";
import createIcon from "../assets/create-icon.svg";

export const eventsData = [
  {
    title: "Create events",
    heading: "Create recurring events by talking",
    description:
      "Simply speak and let KIN handle the details and set up your recurring events in seconds.",
    icon: createIcon,
    image: create4xSS,
    reverseOnDesktop: false,
  },
  {
    title: "Edit events",
    heading: "Change events with hold to talk",
    description:
      "Need to adjust plans? Hold an event to talk changes in real time.",
    icon: createIcon,
    image: change4x,
    reverseOnDesktop: true,
  },
  {
    title: "Attach events",
    heading: "Create events from photos",
    description:
      "Snap a photo or screenshot and watch as KIN turns it into an event on your family calendar.",
    icon: createIcon,
    image: attach4x,
    reverseOnDesktop: false,
  },
];
