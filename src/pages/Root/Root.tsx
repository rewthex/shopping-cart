import { useEffect } from "react";
import { fetchInventory } from "../../store/inventory-slice";
import { useAppDispatch } from "../../store/hooks";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";

import Modal from 'react-modal'

Modal.setAppElement("#root");

export default function Root() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchInventory());
  }, [dispatch]);

  return (
    <div className="main-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
