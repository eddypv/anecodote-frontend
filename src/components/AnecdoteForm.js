import React from "react"
import { connect } from "react-redux"
import { addAnecdote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

const AnecdoteForm = (props) =>{
  const handleSubmit = async (event)=>{
    event.preventDefault()
    const {target} = event
    const message = `new anecdote '${target.anecdote.value}'`
    props.addAnecdote(target.anecdote.value)
    props.setNotification(message, 10)
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
const mapDispatchToProps ={
  addAnecdote,
  setNotification,
}

const connectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)

export default connectedAnecdoteForm