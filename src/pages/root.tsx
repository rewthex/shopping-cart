import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchInventory } from "../store/inventory-slice";
import { AppDispatch } from "../store/store";

export default function Root() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchInventory());
  }, [dispatch])

  return (
    <div>
      Hello!
    </div>
  )
}


