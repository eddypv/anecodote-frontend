
export function notificationReducer(state='', action){
  console.log(state, action)
  switch(action.type){
    case '@notification/set':
      return action.payload.message

    default: return state
  }
}

export function setNotification(message){
  return {
    type:'@notification/set',
    payload:{
      message
    }
  }
}