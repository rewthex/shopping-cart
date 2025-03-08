import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Root from "./pages/root";
import ErrorPage from "./error-page";
import Index from "./pages";
import Shop from "./pages/shop";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />} />
      <Route index element={<Index />} />
      <Route path="shop" element={<Shop />} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
