import { useAppSelector } from "../../store/hooks";
import { DailyDeal } from "../../components/DailyDeal/DailyDeal";
import styles from "./Home.module.css";

export default function Home() {
  const inventoryItems = useAppSelector((state) => state.inventory.inventory);

  return (
    <main className={styles.index}>
      {inventoryItems.length > 0 && (
        <>
          <h1>DEALS THAT WONT LAST</h1>
          <DailyDeal item={inventoryItems[0]} />
          <DailyDeal item={inventoryItems[1]} />
          <DailyDeal item={inventoryItems[2]} />
        </>
      )}
    </main>
  );
}
