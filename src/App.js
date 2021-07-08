import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {addVotes, addAnecdote} from './reducers/anecdoteReducer'
const App = () => {
  const anecdotes = useSelector(state => {
    state.sort((first, second)=>{
      const votesFirst = first.votes
      const votesSecond = second.votes
      return votesFirst - votesSecond
    })
    return state.map( item => item)
  })
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(addVotes(id))
  }
  const handleSubmit =(event)=>{
    event.preventDefault()
    const {target} = event
    dispatch(addAnecdote(target.anecdote.value))

  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={handleSubmit}>
        <div><input name="anecdote" /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App