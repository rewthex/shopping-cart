import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./main.css";

import { Provider } from "react-redux";
import { store } from "./store/store";
import { router } from "./router";

import Modal from 'react-modal'
Modal.setAppElement("#root");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
