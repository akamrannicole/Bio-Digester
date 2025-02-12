import axios from "axios"

const API_URL = "http://localhost:5000" // Adjust this to your backend URL

export const createOrder = async (orderData) => {
  try {
    const response = await axios.post(`${API_URL}/orders`, orderData)
    return response.data
  } catch (error) {
    throw error.response ? error.response.data : new Error("An error occurred while creating the order")
  }
}

export const getOrderStatus = async (orderId) => {
  try {
    const response = await axios.get(`${API_URL}/orders/${orderId}`)
    return response.data
  } catch (error) {
    throw error.response ? error.response.data : new Error("An error occurred while fetching the order status")
  }
}

