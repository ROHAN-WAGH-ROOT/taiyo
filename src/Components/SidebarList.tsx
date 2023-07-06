import { RiContactsLine } from "react-icons/ri";
import { CiMapPin } from "react-icons/ci";
import React from "react";
export const routes = [
  {
    name: "Contact",
    icon: <RiContactsLine />,
    route: "/",
  },
  {
    name: "Charts and Maps",
    icon: <CiMapPin />,
    route: "/charts",
  },
];
