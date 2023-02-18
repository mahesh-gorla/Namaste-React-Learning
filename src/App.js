import React, { lazy, useState, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { About } from "./components/About";
import Error from "./components/Error";
import { Contact } from "./components/Contact";
import { RestaurantMenu } from "./components/RestaurantMenu";
import { Profile } from "./components/Profile";
import { Shimmer } from "./components/Shimmer";

const Instamart = lazy(() => import("./components/Instamart"));
export const AppLayout = () => {
  console.log(useState());
  const [stateUp, setStateUp] = useState(false);
  return (
    <>
      <Header />
      <Outlet />
      <Footer setStateUp={setStateUp} stateUp={stateUp} />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile", //about /{path}
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/resturant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
