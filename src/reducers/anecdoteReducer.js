import anecdoteService from "../services/anecdoteService"

export  function anecdoteReducer(state = [], action) {
  
  switch(action.type){
    case '@anecdote/add_vote':
      const newState = state.map(item => {
        if(item.id === action.payload.id){
          return {...item, votes:item.votes +1}
        }
        return item
      })
      return newState

    case '@anecdote/add':
      return [...state, action.payload]
    
    case '@anecdote/init':
      return action.payload.anecdotes

    default: return state
  }
}
export  function addVotes(id){
  return async dispatch =>{
    await anecdoteService.setVote(id)
    dispatch({
      type:'@anecdote/add_vote',
      payload:{
        id
      }
    })
  } 
}

export function addAnecdote(anecdote){
  return async dispatch =>{
    const newAnecdote = await anecdoteService.addAnecdote(anecdote)
    dispatch({
      type:'@anecdote/add',
      payload:newAnecdote
    })
  }
  
}

export function initAnecdotes(){
  return async dispatch =>{
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type:'@anecdote/init',
      payload:{
        anecdotes
      }
    })
    
  }
}

