import Modal from "react-modal";
import { useAppSelector } from "../../store/hooks";
import CartItem from "../CartItem/CartItem";
import styles from "./Cart.module.css"

type CartProps = {
  onClose: () => void;
  isOpen: boolean;
};

export default function Cart({ isOpen, onClose }: CartProps) {
  const cartItems = useAppSelector((state) => state.cart.items);
  const cartTotal = cartItems
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toFixed(2);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.cartModal}
      overlayClassName="modal-backdrop"
    >
      <button className={styles.closeCart} onClick={onClose}>
        X
      </button>
      <ul>
        {cartItems.map((cartItem) => (
          <li key={cartItem.id} className={styles.cartItem}>
            <CartItem {...cartItem} />
          </li>
        ))}
      </ul>
      <div className={styles.totalAndCheckout}>
        Total: ${cartTotal}
        <button className={styles.checkoutButton}>Checkout</button>
      </div>
    </Modal>
  );
}
