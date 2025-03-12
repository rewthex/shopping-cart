import { useAppSelector } from "../store/hooks";
import { DailyDeal } from "../components/DailyDeal";
import { About } from "../components/About";

export default function Index() {
  const inventoryItem = useAppSelector((state) => state.inventory.inventory)[0];

  return (
    <main className="index">
      <About />
      
      {inventoryItem && <DailyDeal item={inventoryItem} />}
    </main>
  );
}
