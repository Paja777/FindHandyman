import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import Login from "../features/account/Login";
import Register from "../features/account/Register";
import HomePage from "../layout/HomePage";
import AboutPage from "../features/about/About";
import ContactPage from "../features/contact/Contact";
import CreateAd from "../features/roleHandyman/CreateAd";
import CreateUserAd from "../features/roleHandyman/CreateUserAd";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/createad", element: <CreateAd /> },
      { path: "/createuserad", element: <CreateUserAd /> },
    ],
  },
]);
