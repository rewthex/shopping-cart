import { InventoryItem } from "../store/inventory-slice";

export default function ItemCard(inventoryItem: InventoryItem) {
  const { id, title, price, image } = inventoryItem;
  const shortenedTitle = title.slice(0, 24) + "...";

  function handleItemCardClick() {
    console.log(id);
  }

  return (
    <section onClick={handleItemCardClick} className="inventory-card">
      <img src={image} alt={title} />
      <h5>{shortenedTitle}</h5>
      <p className="price-and-button">
        <h5>${price}</h5>
        <button>Add to cart</button>
      </p>
    </section>
  );
}
