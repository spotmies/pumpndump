import React from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/home_page";
import ReactGA from "react-ga";
const TRACKING_ID = "UA-230631230-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
function Routing() {
  return useRoutes([
    {
      path: "/",
      // element: <App />,
      element: <HomePage />,
    },
    {
      path: "home",
      element: <HomePage />,
    },
  ]);
}

export default function Main() {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}
