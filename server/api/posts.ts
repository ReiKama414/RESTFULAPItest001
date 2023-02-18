import axios from 'axios'

const API_URL = 'https://jsonplaceholder.typicode.com'

export const getPosts = async (userid: number) => {
  const response = await axios.get(`${API_URL}/posts?userId=${userid}`)
  return response.data
}

export const getPost = async (id: number) => {
  const response = await axios.get(`${API_URL}/posts/${id}`)
  return response.data
}