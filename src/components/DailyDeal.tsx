import { addToCart } from "../store/cart-slice";
import { useAppDispatch } from "../store/hooks";
import { InventoryItem } from "../store/inventory-slice";

interface DailyDealProps {
  item: InventoryItem;
}

export function DailyDeal({ item }: DailyDealProps) {
  const { description, title, image, price } = item;
  const discountedPrice = (price * 0.85).toFixed(2);
  const dispatch = useAppDispatch();

  function handleAddToCart() {
    dispatch(addToCart({ ...item, price: +discountedPrice }));
  }

  return (
    <div>
      <section className="daily-deal">
        <img src={image} alt={title} />
        <div className="daily-deal-description">
          <h3>{title}</h3>
          <h5>{description}</h5>
          <div className="daily-deal-add-to-cart">
            <p><span>${price}</span>{" "}${discountedPrice}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </section>
    </div>
  );
}
