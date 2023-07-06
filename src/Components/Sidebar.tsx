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
      <div className="flex p-3 my-3 text-center font-sans font-medium text-2xl text-white">
        App
        <div
          onClick={() => getValue(!side)}
          className="cursor-pointer absolute left-48 border-4 top-0 bg-[#8270C1] hover:bg-[#8270c1eb] m-2 text-white rounded-full"
        >
          <TfiViewList className="m-3 w-4 h-4" />
        </div>
      </div>
      <div>
        {routes.map((ele: abc) => {
          return (
            <div
              key={ele.name}
              className={`
            flex text-white cursor-pointer hover:bg-[#b5a8e43f]`}
            >
              <NavLink
                to={ele?.route}
                className={`${
                  ele.route === location?.pathname ? "bg-black" : ""
                } flex w-52`}
              >
                <div className={`text-center mx-2 my-5`}>{ele?.icon}</div>
                <div className={`mx-2 my-4`}>{ele?.name}</div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}
