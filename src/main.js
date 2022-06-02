import React from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/home_page";
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
