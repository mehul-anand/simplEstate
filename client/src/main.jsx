import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./pages/layoutPage/Layout.jsx";
import { Layout, RequireAuth } from "./pages/layoutPage/Layout.jsx";
import HomePage from "./pages/homePage/HomePage.jsx";
import ListingPage from "./pages/listingPage/ListingPage.jsx";
import SinglePage from "./pages/singlePage/SinglePage.jsx";
import ProfilePage from "./pages/profilePage/ProfilePage.jsx";
import RegisterPage from "./pages/registerPage/RegisterPage.jsx";
import LoginPage from "./pages/loginPage/LoginPage.jsx";
import ProfileUpdatePage from "./pages/profileUpdatePage/ProfileUpdatePage.jsx";
import NewPostPage from "./pages/newPostPage/NewPostPage.jsx";
import { AuthContextProvider } from "./contexts/AuthContext.jsx";
import { SocketContextProvider } from "./contexts/SocketContext.jsx";
import {
  singlePageLoader,
  listPageLoader,
  profilePageLoader,
} from "./lib/loaders.js";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<HomePage />} />
      <Route path="list" element={<ListingPage />} loader={listPageLoader} />
      <Route path="/:id" element={<SinglePage />} loader={singlePageLoader} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<RequireAuth />}>
        <Route
          path="/profile"
          element={<ProfilePage />}
          loader={profilePageLoader}
        />
        <Route path="/profile/update" element={<ProfileUpdatePage />} />
        <Route path="/add" element={<NewPostPage />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <SocketContextProvider>
        <RouterProvider router={appRouter} />
      </SocketContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
