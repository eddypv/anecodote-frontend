const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

export  function anecdoteReducer(state = initialState, action) {
  
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

export function initAnecdotes(anecdotes){
  return {
    type:'@anecdote/init',
    payload:{
      anecdotes
    }
  }
}

