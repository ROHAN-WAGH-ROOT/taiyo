import { Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import ResSidebar from "./Components/resSidebar";
import React from "react";
import Contact from "./Components/Contact";
import Maps from "./Components/Maps";
import NotFound from "./Components/NotFound";
import { QueryClientProvider, QueryClient } from "react-query";
import { Provider } from "react-redux";
import reducer from "./Reducer/reduce";
import { configureStore } from "@reduxjs/toolkit";
import { useState } from "react";

function App() {
  const [side, setSide] = useState(false);

  const store = configureStore({
    reducer,
  });
  const queryClient = new QueryClient();
  const getValue = (value: boolean) => {
    setSide(value);
  };
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <div className="flex">
          {side ? (
            <div className="w-52 h-screen fixed bg-[#8270C1]">
              <div className="h-full">
                <Sidebar side={side} getValue={getValue} />
              </div>
            </div>
          ) : (
            <div className="w-16 h-screen fixed bg-[#8270C1]">
              <div className="h-full">
                <ResSidebar side={side} getValue={getValue} />
              </div>
            </div>
          )}
          <div className="px-10 w-full xl:2xl:ml-52 ml-20 bg-[#FAFAFA] overflow-hidden xl:2xl:text-center xl:2xl:align-middle xl:2xl:justify-center xl:2xl:overflow-y-auto">
            <div>
              <Routes>
                <Route path="/" element={<Contact />}></Route>
                <Route path="/charts" element={<Maps />}></Route>
                <Route path="*" element={<NotFound />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </Provider>
    </QueryClientProvider>
  );
}
