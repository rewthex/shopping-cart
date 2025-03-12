import { useEffect } from "react";
import { fetchInventory } from "../store/inventory-slice";

import { addToCart, removeFromCart } from "../store/cart-slice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export default function Root() {
  const dispatch = useAppDispatch();
  const inventoryItem = useAppSelector((state) => state.inventory.inventory)[0]
  const cart = useAppSelector((state) => state.cart.items)
  console.log(cart)

  useEffect(() => {
    dispatch(fetchInventory());
  }, [dispatch])

  function handleAddToCart() {
    dispatch(addToCart(inventoryItem))
    
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(inventoryItem.id))
    
  }

  return (
    <div>
      <button onClick={handleAddToCart}>Add to cart</button>
      <button onClick={handleRemoveFromCart}>Remove from cart</button>
    </div>
  )
}


