import { routes } from "./SidebarList";
import { TfiViewList } from "react-icons/tfi";
import { NavLink, useLocation } from "react-router-dom";
import React from "react";
export default function Sidebar({ side, getValue }: any) {
  const location = useLocation();
  type abc = {
    name: string;
    icon: React.ReactNode;
    route: string;
  };

  return (
    <div>
      <div
        onClick={() => getValue(!side)}
        className="cursor-pointer absolute left-0 border-4 top-0 bg-[#8270C1] hover:bg-[#8270c1eb] m-2 text-white rounded-full"
      >
        <TfiViewList className="m-3 w-4 h-4" />
      </div>
      <div>
        {routes.map((ele: abc) => {
          return (
            <div
              key={ele.name}
              className={`
            flex text-white cursor-pointer mt-16 hover:bg-[#b5a8e43f]`}
            >
              <NavLink
                to={ele?.route}
                className={`${
                  ele.route === location?.pathname ? "bg-black" : ""
                } flex text-center w-64 align-middle`}
              >
                <div className={`text-center justify-center align-middle m-auto py-3`}>{ele?.icon}</div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}
