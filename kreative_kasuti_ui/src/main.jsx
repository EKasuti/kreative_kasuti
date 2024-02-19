import React from "react";

import "./index.css";
import { createBrowserRouter } from "react-router-dom";

import { LandingPage, PortfolioPage, ContactPage, ShopPage, Root } from "./pages";
import PortfolioPage from "./pages/portfolio_page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
    ],
  },
]);
