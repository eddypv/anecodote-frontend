import React from "react"
import { useDispatch } from "react-redux"
import { addAnecdote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"
const AnecdoteForm = () =>{
  const dispatch = useDispatch()
  const handleSubmit = async (event)=>{
    event.preventDefault()
    const {target} = event
    const message = `new anecdote '${target.anecdote.value}'`
    dispatch(addAnecdote(target.anecdote.value))
    dispatch(setNotification(message, 10))
    target.anecdote.value = ''
  }
  return (
    <>
    <h2>create new</h2>
      <form onSubmit={handleSubmit}>
        <div><input name="anecdote" /></div>
        <button>create</button>
      </form>
    </>
  )
}

export default AnecdoteForm