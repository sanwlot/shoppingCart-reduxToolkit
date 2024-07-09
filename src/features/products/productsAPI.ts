import axios from "axios"

export const fetchProducts = () => {
  return axios.get("http://localhost:7777/products")
}
