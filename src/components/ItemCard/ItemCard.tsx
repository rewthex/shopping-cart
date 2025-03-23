import { InventoryItem } from "../../store/inventory-slice";
import { useAppDispatch } from "../../store/hooks";
import { addToCart } from "../../store/cart-slice";
import styles from "./ItemCard.module.css";

export default function ItemCard(inventoryItem: InventoryItem) {
  const { title, price, image } = inventoryItem;
  const shortenedTitle = title.slice(0, 24) + "...";
  const fixedPrice = price.toFixed(2);
  const dispatch = useAppDispatch();

  function handleAddToCart(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    dispatch(addToCart({ item: inventoryItem, quantity: 1 }));
  }

  return (
    <>
      <img src={image} alt={title} />
      <h5>{shortenedTitle}</h5>
      <p className={styles.priceAndButton}>
        ${fixedPrice}
        <button onClick={handleAddToCart}>Add to cart</button>
      </p>
    </>
  );
}
