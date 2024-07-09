import "./Cart.css"
import { useDispatch, useSelector } from "react-redux"
import { deleteAsync, updateAsync } from "./cartSlice"

export default function Cart() {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.items)

  function handleChange(e, id) {
    dispatch(updateAsync({ id, change: { quantity: +e.target.value } }))
  }

  const cartTotal = items.reduce(
    (sum, item) => item.price * item.quantity + sum,
    0,
  )
  return (
    <div>
      {items.map(item => (
        <div className="cart-item" key={item.id}>
          <img src={item.thumbnail} alt="" className="img-fluid" />
          <div className="description">
            <p>{item.title}</p>
            <span>{item.brand}</span>
            <strong>${item.price}</strong>
          </div>
          <div className="quantity">
            Quanitity
            <select
              value={item.quantity}
              onChange={e => handleChange(e, item.id)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="close">
            <button onClick={() => dispatch(deleteAsync(item.id))}>X</button>
          </div>
        </div>
      ))}
      <h1>Total: ${cartTotal}</h1>
    </div>
  )
}
