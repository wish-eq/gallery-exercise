import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AlbumPage from "./pages/AlbumPage";
import FoldersPage from "./pages/FoldersPage";
import GalleryPage from "./pages/GalleryPage";
import MemoriesPage from "./pages/MemoriesPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "album",
    element: <AlbumPage></AlbumPage>,
  },
  {
    path: "folder",
    element: <FoldersPage></FoldersPage>,
  },
  {
    path: "gallery",
    element: <GalleryPage></GalleryPage>,
  },
  {
    path: "memories",
    element: <MemoriesPage></MemoriesPage>,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
