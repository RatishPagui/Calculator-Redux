import React from 'react'
import { useSelector } from 'react-redux'

function Output() {

  const number = useSelector(state => state.addReducer)

  return (
    <div className='my-3'>
      <label>Output : {number} </label>
    </div>
  )
}

export default Output
