import { InventoryItem } from "../store/inventory-slice";
import { useAppDispatch } from "../store/hooks";
import { addToCart } from "../store/cart-slice";

export default function ItemCard(inventoryItem: InventoryItem) {
  const { title, price, image } = inventoryItem;
  const shortenedTitle = title.slice(0, 24) + "...";
  const fixedPrice = price.toFixed(2);
  const dispatch = useAppDispatch();

  function handleAddToCart(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    dispatch(addToCart(inventoryItem));
  }

  return (
    <>
      <img src={image} alt={title} />
      <h5>{shortenedTitle}</h5>
      <p className="price-and-button">
        <p>${fixedPrice}</p>
        <button onClick={handleAddToCart}>Add to cart</button>
      </p>
    </>
  );
}
