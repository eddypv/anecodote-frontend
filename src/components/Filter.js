import React from "react"
import { setFilter } from "../reducers/filterReducer" 
import {connect} from 'react-redux'

const Filter = (props) => {
  
  const handleChange = (event) => {
    const {target} = event
    props.setFilter(target.value)
    
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const mapDispatchToProps = {
  setFilter
}
const connectedFilter = connect(null, mapDispatchToProps)(Filter)

export default connectedFilter