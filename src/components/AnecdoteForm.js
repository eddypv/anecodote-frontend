import React from "react"
import { useDispatch } from "react-redux"
import { addAnecdote } from "../reducers/anecdoteReducer"
import anecodteService from '../services/anecdoteService'

const AnecdoteForm = () =>{
  const dispatch = useDispatch()
  const handleSubmit = async (event)=>{
    event.preventDefault()
    const {target} = event
    const newAnecdote = await anecodteService.addAnecdote(target.anecdote.value)
    console.log(newAnecdote)
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