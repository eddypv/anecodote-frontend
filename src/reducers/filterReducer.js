export function filterReducer(state= '', action){
  switch(action.type){
    case '@filter/set':
      return action.payload.search
    default: return state
  }
}

export function setFilter(search){
  return {
    type:'@filter/set',
    payload:{
      search
    }
  }
}