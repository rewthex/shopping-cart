import { type CartItem } from "../../store/cart-slice";
import { removeFromCart } from "../../store/cart-slice";
import { useAppDispatch } from "../../store/hooks";
import { Trash } from "lucide-react";
import styles from "./CartItem.module.css";

export default function CartItem({
  id,
  title,
  quantity,
  price,
  image,
}: CartItem) {
  const dispatch = useAppDispatch();
  const shortenedTitle = title.slice(0, 40) + "...";
  const fixedItemTotal = (Math.round(price * quantity * 100) / 100).toFixed(2);

  function handleDeleteItem() {
    dispatch(removeFromCart(id.toString()));
  }

  return (
    <>
      <img src={image} alt={title} />
      <div>
        <p>{shortenedTitle}</p>
        <span className={styles.trashAndQuantity}>
          <Trash color="red" size={30} onClick={handleDeleteItem} />
          <input value={quantity} readOnly />
        </span>
      </div>
      <p className={styles.cartItemPrice}>${fixedItemTotal}</p>
    </>
  );
}
