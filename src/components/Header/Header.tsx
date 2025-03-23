import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { useState } from "react";
import Cart from "../Cart/Cart";
import styles from "./Header.module.css";

export default function Header() {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((val, item) => val + item.quantity, 0);

  function handleOpenCartClick() {
    if (!cartIsOpen) setCartIsOpen(true);
  }

  function handleCloseCartClick() {
    setCartIsOpen(false);
  }

  return (
    <>
      <Cart isOpen={cartIsOpen} onClose={handleCloseCartClick} />
      <div className={styles.headerContainer}>
        <header className={styles.header}>
          <span>
            <h1>Everything Emporium</h1>
            <h3>Where everything has to go!</h3>
          </span>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="shop">Store</Link>
              </li>

              <a onClick={handleOpenCartClick}>
                <li>Cart ({totalQuantity})</li>
              </a>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
}
