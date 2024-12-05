import { IoIosArrowDown } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export const HEADER_LINKS = [
  {
    id: 0,
    name: "Home",
    icon: <FaHome />,
    url: "/",
  },
  {
    id: 1,
    name: "Discovery",
    icon: <IoIosArrowDown />,
    url: "discovery",
  },
  {
    id: 2,
    name: "About",
    icon: null,
    url: "about",
  },
  {
    id: 3,
    name: "Contact us",
    icon: null,
    url: "contact-us",
  },
  {
    id: 6,
    name: "Likes",
    icon: <FaHeart />,
    url: "likes",
  },
];

export const FOOTER_LINKS = [
  {
    id: 1,
    link: "Discovery",
  },
  {
    id: 2,
    link: "New Season",
  },
  {
    id: 3,
    link: "Most searched",
  },
  {
    id: 4,
    link: "Most selled",
  },
  {
    id: 5,
    link: "About",

  },
  {
    id: 6,
    link: "Help ",
  },
  {
    id: 7,
    link: "Shipping",
  },
  {
    id: 8,
    link: "Affiliate",
  },
  {
    id: 9,
    link: "Info",
  },
  {
    id: 10,
    link: "Contact us",
  },
  {
    id: 11,
    link: "Privacy Policies",
  },
  {
    id: 12,
    link: "Terms & Conditions"
  },
];
