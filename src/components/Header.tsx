import { Link } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

export default function Header() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((val, item) => val + item.quantity, 0);

  return (
    <div className="header-background">
      <header className="header content-container">
        <h1>Everything Emporium</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="shop">Store</Link>
            </li>
            <li>Cart ({totalQuantity})</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
