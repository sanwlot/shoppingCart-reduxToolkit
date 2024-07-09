import { fetchAsync } from "./productsSlice"
import { useDispatch, useSelector } from "react-redux"
import { addAsync } from "../cart/cartSlice"
import { useEffect } from "react"
import "./Products.css"

export default function Products() {
  const dispatch = useDispatch()
  const products = useSelector(state => state.product.products)

  useEffect(() => {
    dispatch(fetchAsync())
  })

  return (
    <div>
      <div>
        {products.map(product => (
          <div className="card" key={product.id}>
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{ width: "100%" }}
            />
            <h1>{product.title}</h1>
            <p className="price">${product.price}</p>
            <p>{product.description}</p>
            <p>
              <button onClick={() => dispatch(addAsync(product))}>
                Add to Cart
              </button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
