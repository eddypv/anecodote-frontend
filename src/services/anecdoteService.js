import axios from "axios";
const URL ="http://localhost:3001/anecdotes"

const getAll = async()=> { 
  try{
    const response = await axios.get(URL)
    return response.data
  }catch(error){
    throw new Error('Error service anecdote all')
  }
  
}
const addAnecdote = async(anecdote) =>{
  try{
    const count = getAll().length
    const response = await axios.post(URL, {
      content:anecdote,
      votes:0,
      id:count+1
    })
    return response.data
  }catch(error){
    throw new Error('Error service add anecdote')
  }
}

export default { getAll, addAnecdote}
