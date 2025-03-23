import { addToCart } from "../../store/cart-slice";
import { useAppDispatch } from "../../store/hooks";
import { InventoryItem } from "../../store/inventory-slice";
import styles from "./DailyDeal.module.css";

interface DailyDealProps {
  item: InventoryItem;
}

export function DailyDeal({ item }: DailyDealProps) {
  const { description, title, image, price } = item;
  const fixedPrice = price.toFixed(2);
  const discountedPrice = (price * 0.85).toFixed(2);
  const dispatch = useAppDispatch();

  function handleAddToCart() {
    dispatch(
      addToCart({
        item: { ...item, price: +discountedPrice },
        quantity: 1,
      })
    );
  }

  return (
    <div>
      <section className={styles.dailyDeal}>
        <img src={image} alt={title} />
        <div className={styles.dailyDealDescription}>
          <h3>{title}</h3>
          <h5>{description}</h5>
          <div className={styles.dailyDealAddToCart}>
            <p>
              <span>${fixedPrice}</span> ${discountedPrice}
            </p>
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </section>
    </div>
  );
}
