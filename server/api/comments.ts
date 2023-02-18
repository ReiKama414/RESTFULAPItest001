import axios from 'axios'

const API_URL = 'https://jsonplaceholder.typicode.com'

export const getComments = async (postid: number) => {
  const response = await axios.get(`${API_URL}/comments?postId=${postid}`)
  return response.data
}