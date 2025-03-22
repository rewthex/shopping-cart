import { type CartItem } from "../store/cart-slice";
import { removeFromCart } from "../store/cart-slice";
import { useAppDispatch } from "../store/hooks";
export default function CartItem({
  id,
  title,
  quantity,
  price,
  image,
}: CartItem) {
  const dispatch = useAppDispatch();
  const shortenedTitle = title.slice(0, 24) + "...";

  function handleDeleteItem() {
    dispatch(removeFromCart(id));
  }

  return (
    <>
      <img src={image} alt={title} />
      <div className="description-and-delete">
        <p>{shortenedTitle}</p>
        <p>
          <span onClick={handleDeleteItem} className="delete-item">
            Delete
          </span>
          <input value={quantity} readOnly />
        </p>
      </div>
      <p className="cart-item-price">
        ${(Math.round(price * quantity * 100) / 100).toFixed(2)}
      </p>
    </>
  );
}
