import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./store/store";

import Root from "./pages/root";
import ErrorPage from "./error-page";
import Index from "./pages";
import Shop from "./pages/shop";

import 'material-icons/iconfont/material-icons.css';

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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
