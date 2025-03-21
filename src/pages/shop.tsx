import { useAppSelector } from "../store/hooks";
import ItemCard from "../components/ItemCard";

export default function Shop() {
  const inventoryItems = useAppSelector((state) => state.inventory.inventory);

  return (
    <main className="content-container card-container">
      {inventoryItems.map((inventoryItem) => (
        <ItemCard key={inventoryItem.id} {...inventoryItem} />
      ))}
    </main>
  );
}
