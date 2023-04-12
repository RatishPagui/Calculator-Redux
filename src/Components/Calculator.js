import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNumbers,subtractNumbers,multiplyNumbers,divideNumbers } from '../State/action-creators'

function Calculator() {

    const dispatch = useDispatch()

  const [num1,setnum1] = useState('')
  const [num2,setnum2] = useState('')

  return (

    <div className='my-3'>
      <label className='mx-3'>Enter Number 1</label>
      <input value={num1} onChange={(event)=>setnum1(event.target.value)}/>
      <br/><br/>
      <label className='mx-3'>Enter Number 2</label>
      <input value={num2} onChange={(event)=>setnum2(event.target.value)}/>
      <br/><br/>
      <button onClick={()=>dispatch(addNumbers(parseInt(num1),parseInt(num2)))} className='btn btn-primary mx-3'>+</button>
      <button onClick={()=>dispatch(subtractNumbers(parseInt(num1),parseInt(num2)))} className='btn btn-primary mx-3'>-</button>
      <button onClick={()=>dispatch(multiplyNumbers(parseInt(num1),parseInt(num2)))} className='btn btn-primary mx-3'>*</button>
      <button onClick={()=>dispatch(divideNumbers(parseInt(num1),parseInt(num2)))} className='btn btn-primary mx-3'>/</button>
    </div>
  )
}

export default Calculator
