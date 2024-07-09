import { useState, useEffect } from "react"
import "./App.css"
import Cart from "./features/cart/Cart"
import Products from "./features/products/Products"
import { useDispatch, useSelector } from "react-redux"
import { fetchAsync } from "./features/cart/cartSlice"

export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAsync())
  }, [])

  const items = useSelector(state => state.cart.items)
  const [showCart, setShowCart] = useState(false)
  return (
    <div className="App">
      {showCart && <Cart />}
      <button onClick={() => setShowCart(!showCart)}>
        {showCart ? "Hide" : "Show"} Cart [ {items.length} ]
      </button>
      <Products />
    </div>
  )
}
