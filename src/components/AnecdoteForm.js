import React from "react"
import { useDispatch } from "react-redux"
import { addAnecdote } from "../reducers/anecdoteReducer"

const AnecdoteForm = () =>{
  const dispatch = useDispatch()
  const handleSubmit =(event)=>{
    event.preventDefault()
    const {target} = event
    dispatch(addAnecdote(target.anecdote.value))

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