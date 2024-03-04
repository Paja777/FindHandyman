import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import Login from "../features/account/Login";
import Register from "../features/account/Register";
import HomePage from "../layout/HomePage";
import AboutPage from "../features/about/About";
import ContactPage from "../features/contact/Contact";
import CreateAd from "../features/ads/CreateAd";
import CreateUserAd from "../features/ads/CreateUserAd";
import DetailPage from "../layout/DetailPage";
import RequireAuth from "./RequireAuth";
import NotFound from "../errors/NotFound";
import ServerError from "../errors/ServerError";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <RequireAuth />,
        children: [
          { path: "/createuserad", element: <CreateUserAd /> },
          { path: "/createad", element: <CreateAd /> },
        ],
      },
      { path: "/", element: <HomePage data-testid="homepage" /> },
      { path: "/:id", element: <DetailPage /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage data-testid="contactpage" /> },
      { path: "server-error", element: <ServerError /> },
      { path: "not-found", element: <NotFound /> },
    ],
  },
]);
