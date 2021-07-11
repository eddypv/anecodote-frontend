import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { addVotes } from "../reducers/anecdoteReducer"

const AnecdoteList = ()=>{
  const anecdotes = useSelector(state => {
    const anecdotesList = state.anecdotes
    anecdotesList.sort((first, second)=>{
      const votesFirst = first.votes
      const votesSecond = second.votes
      return votesFirst - votesSecond
    })
    return anecdotesList.map( item => item)
  })
  const dispatch = useDispatch()
  const vote = (id) => {
    dispatch(addVotes(id))
  }
  return(
    <>
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
    </>
  ) 
}
export default AnecdoteList