import { useAppSelector } from "../store/hooks";
import { DailyDeal } from "../components/DailyDeal";

export default function Index() {
  const inventoryItems = useAppSelector((state) => state.inventory.inventory);

  return (
    <main className="content-container index"> 
    <h1>DEALS THAT WONT LAST</h1>
      {inventoryItems.length > 0 && <>
        <DailyDeal item={inventoryItems[0]} />
        <DailyDeal item={inventoryItems[1]} />
        <DailyDeal item={inventoryItems[2]} />
      </> 
      }
    </main>
  );
}
