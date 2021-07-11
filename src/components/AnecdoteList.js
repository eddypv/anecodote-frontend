import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { addVotes } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

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
  const vote = (id, content) => {
    const message = `You voted '${content}'`
    dispatch(addVotes(id))
    dispatch(setNotification(message))
    setTimeout(()=>{
      dispatch(setNotification(''))
    },5000)
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
          <button onClick={() => vote(anecdote.id,anecdote.content)}>vote</button>
        </div>
      </div>
    )}
    </>
  ) 
}
export default AnecdoteList