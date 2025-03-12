import { addToCart } from "../store/cart-slice";
import { useAppDispatch } from "../store/hooks";
import { InventoryItem } from "../store/inventory-slice";

interface DailyDealProps {
  item: InventoryItem;
}

export function DailyDeal({ item }: DailyDealProps) {
  const { description, title, id, image, price, rating } = item;
  const discountedPrice = (price * 0.85).toFixed(2);
  const dispatch = useAppDispatch();

  function handleAddToCart() {
    dispatch(addToCart({ ...item, price: +discountedPrice }));
  }

  return (
    <div>
      <h1>Featured Item</h1>
      <section className="daily-deal">
        <img src={image} alt={title} />
        <div className="daily-deal-description">
          <h2>{title}</h2>
          <h3>{description}</h3>
          <div className="daily-deal-add-to-cart">
            <p>${discountedPrice}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </section>
    </div>
  );
}
