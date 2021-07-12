import axios from "axios";
const URL ="http://localhost:3001/anecdotes"

const getAll = async()=> { 
  const response = await axios.get(URL)
  return response.data
}
export default { getAll }