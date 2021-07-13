let timeOutId = undefined
export function notificationReducer(state='', action){

  switch(action.type){
    case '@notification/set':
      return action.payload.message

    default: return state
  }
}

export function setNotification(message, seconds=5){
  return  dispatch =>{
    let action = {
      type:'@notification/set',
      payload:{
        message
      }
    } 
    dispatch(action)
    
    //verify already  timeOutId
    if (typeof timeOutId === 'number'){
      clearTimeout(timeOutId)
    }
    // clean notification
    timeOutId= setTimeout(()=>{
      action.payload.message= ''
      dispatch(action)
      timeOutId= undefined
    }, seconds*1000)
  }
}