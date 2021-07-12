import anecdoteService from "../services/anecdoteService"

const getId = () => (100000 * Math.random()).toFixed(0)
export  function anecdoteReducer(state = [], action) {
  
  switch(action.type){
    case 'ADD_VOTES':
      const newState = state.map(item => {
        if(item.id === action.payload.id){
          return {...item, votes:item.votes +1}
        }
        return item
      })
      return newState

    case 'ADD_ANECDOTE':
      return [...state, action.payload]
    
    case '@anecdote/init':
      return action.payload.anecdotes

    default: return state
  }
}
export  function addVotes(id){
  return {
    type:'ADD_VOTES',
    payload:{
      id
    }
  }
}

export function addAnecdote(anecdote){
  return {
    type:'ADD_ANECDOTE',
    payload:{
      content:anecdote,
      id:getId(),
      votes:0
    }
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

