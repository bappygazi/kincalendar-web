import attachPhone from "../assets/attach-phone.png";
import createIcon from "../assets/create-icon.svg";
import createPhone from "../assets/create-phone.png";
import editPhone from "../assets/edit-phone.png";

export const eventsData = [
  {
    title: "Create events",
    heading: "Create recurring events by talking",
    description:
      "Simply speak and let KIN handle the details and set up your recurring events in seconds.",
    icon: createIcon,
    image: createPhone,
    reverseOnDesktop: false,
  },
  {
    title: "Edit events",
    heading: "Change events with hold to talk",
    description:
      "Need to adjust plans? Hold an event to talk changes in real time.",
    icon: createIcon,
    image: editPhone,
    reverseOnDesktop: true,
  },
  {
    title: "Attach events",
    heading: "Create events from photos",
    description:
      "Snap a photo or screenshot and watch as KIN turns it into an event on your family calendar.",
    icon: createIcon,
    image: attachPhone,
    reverseOnDesktop: false,
  },
];
