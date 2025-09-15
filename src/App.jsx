import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Navbar from "./Components/Small Components/Navbar";
import Homepage from "./Components/Large Components/Homepage";
import WeatherDesc from "./Components/Small Components/Project Case Study/WeatherDesc";
import ScrollToTop from "./Components/Small Components/Router/ScrollToTop";
import YtCrawlerDesc from "./Components/Small Components/Project Case Study/YtCrawlerDesc";
import DarkModeContext from "./Components/Contexts/DarkModeContext";
import LoaderDemo from "./Components/Small Components/LoaderDemo";
import ThemeManager from "./Components/Small Components/ThemeManager";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Homepage />
        </>
      ),
      errorElement: <>OOPS! PAGE NOT FOUND</>,
    },
    {
      path: "/weather",
      element: (
        <ScrollToTop> <WeatherDesc /> </ScrollToTop>
      ),
    },
    {
      path: "/ytcrawler",
      element: (
        <ScrollToTop>
          <YtCrawlerDesc />
        </ScrollToTop>
      ),
    },
    {
      path: "/loader",
      element: (
        <ScrollToTop>
          <LoaderDemo />
        </ScrollToTop>
      ),
    },
  ]);

  return (
    <div>
      <DarkModeContext>
        <ThemeManager />
        <RouterProvider router={router} />
      </DarkModeContext>
    </div>
  );
}

export default App;
