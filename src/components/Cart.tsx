import Modal from "react-modal";
import { useAppSelector } from "../store/hooks";
import CartItem from "./CartItem";

Modal.setAppElement("#root");

type CartProps = {
  onClose: () => void;
  isOpen: boolean;
};

export default function Cart({ isOpen, onClose }: CartProps) {
  const cartItems = useAppSelector((state) => state.cart.items);
  const cartTotal = cartItems.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  ).toFixed(2);

  return (
    <Modal
      isOpen={isOpen}
      className="cart-modal"
      overlayClassName="modal-backdrop"
    >
      <button className="close-cart" onClick={onClose}>
        X
      </button>
      <ul>
        {cartItems.map((cartItem) => (
          <li key={cartItem.id} className="cart-item">
            <CartItem {...cartItem} />
          </li>
        ))}
      </ul>
      <div className="total-and-checkout">
        Total: ${cartTotal}
        <button className="checkout-button">Checkout</button>
      </div>
    </Modal>
  );
}
