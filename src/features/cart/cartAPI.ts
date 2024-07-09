import axios from "axios"

export const fetchItems = () => {
  return axios.get("http://localhost:7777/cart")
}

export const addItems = item => {
  return axios.post("http://localhost:7777/cart", item)
}

export const updateItem = (id, itemUpdate) => {
  return axios.patch(`http://localhost:7777/cart/${id}`, itemUpdate)
}

export const deleteItem = id => {
  return axios.delete(`http://localhost:7777/cart/${id}`)
}
