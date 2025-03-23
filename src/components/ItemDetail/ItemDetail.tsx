import Modal from "react-modal";
import { InventoryItem } from "../../store/inventory-slice";
import styles from "./ItemDetail.module.css";
import { ArrowBigLeft, Minus, Plus } from "lucide-react";
import ItemRating from "../ItemRating/ItemRating";
import { useState } from "react";
import { addToCart } from "../../store/cart-slice";
import { useAppDispatch } from "../../store/hooks";

type ItemDetailProps = {
  item: InventoryItem;
  onClose: () => void;
  isOpen: boolean;
};

export default function ItemDetail({ isOpen, item, onClose }: ItemDetailProps) {
  const { image, title, price, description, rating } = item;
  const fixedPrice = "$" + price.toFixed(2);
  const dispatch = useAppDispatch();

  const [addQuantity, setAddQuantity] = useState<number>(1);

  function handleIncrementQuantity() {
    setAddQuantity((prevState: number) => prevState + 1);
  }

  function handleDecrementQuantity() {
    if (addQuantity <= 1) return;
    setAddQuantity((prevState: number) => prevState - 1);
  }

  function handleAddToCart() {
    dispatch(addToCart({ item, quantity: addQuantity }));
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.itemDetailModal}
      overlayClassName="modal-backdrop"
    >
      <section className={styles.itemDetailContainer}>
        <button className={styles.closeItem} onClick={onClose}>
          <ArrowBigLeft fill="black" size={50} />
        </button>
        <img className={styles.itemImage} src={image} alt={title} />
        <article className={styles.itemTitle}>{title}</article>
        <article className={styles.itemDescription}>{description}</article>
        <section className={styles.itemRating}>
          <ItemRating {...rating} />
        </section>
        <section className={styles.itemPurchase}>
          {fixedPrice}
          <span>
            <Minus onClick={handleDecrementQuantity} />
            <input value={addQuantity} readOnly />
            <Plus onClick={handleIncrementQuantity} />
          </span>
          <button onClick={handleAddToCart}>Add to cart</button>
        </section>
      </section>
    </Modal>
  );
}
