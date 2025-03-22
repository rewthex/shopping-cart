import { useState } from "react";
import { type InventoryItem } from "../store/inventory-slice";
import { useAppSelector } from "../store/hooks";

import ItemCard from "../components/ItemCard";
import ItemDetail from "../components/ItemDetail";

export default function Shop() {
  const inventoryItems = useAppSelector((state) => state.inventory.inventory);
  const [currentItem, setCurrentItem] = useState<InventoryItem | null>(null);

  function handleOpenItemDetailClick(
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    const target = event.currentTarget as HTMLElement;
    const itemId = target.dataset.itemId;
    console.log(target, itemId);
    if (!itemId) return;

    const selectedItem = inventoryItems.find((item) => item.id === +itemId);
    if (!selectedItem) return;

    setCurrentItem(selectedItem);
  }

  function handleCloseItemDetailClick() {
    setCurrentItem(null);
  }

  return (
    <>
      {currentItem && (
        <ItemDetail
          isOpen={!!currentItem}
          item={currentItem}
          onClose={handleCloseItemDetailClick}
        />
      )}
      <main className="content-container card-container">
        {inventoryItems.map((inventoryItem) => (
          <section
            key={inventoryItem.id}
            data-item-id={inventoryItem.id}
            onClick={handleOpenItemDetailClick}
            className="inventory-card"
          >
            <ItemCard {...inventoryItem} />
          </section>
        ))}
      </main>
    </>
  );
}
