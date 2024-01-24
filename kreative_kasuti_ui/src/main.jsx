import React from "react";

import "./index.css";
import { createBrowserRouter } from "react-router-dom";

import { LandingPage, GalleryPage, ContactPage, ShopPage, Root } from "./pages";

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
        path: "/gallery",
        element: <GalleryPage />,
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
