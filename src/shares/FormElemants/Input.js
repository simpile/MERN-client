import React, { useReducer } from 'react'
import {validate} from '../utils/validators'

const inputReducer=(state, action)=>{
  switch(action.type){
    case"CHANGE"
    :return{...state,
      value:action.val,
      isValid:validate(action.val, action.validators),
    }
    default: return state
  }

}
function Input(props) {
  const[inputState, dispatch]= useReducer(inputReducer,{value:"", isValid:false})
  const changeHandler =(event)=>{
dispatch({
  type:"CHANGE",
  val:event.target.value,
  validators:props.validators
})
  }
    const element = props.element === "input"?(<input
    id={props.id}
    type={props.type}
    placeholder={props.placeholder}
    onChange={changeHandler}
    value={inputState.value}
    />):(
        <textarea
        id={props.id}
        rows={props.row || 3}
        placeholder={props.placeholder}
        onChange={changeHandler}
        value={inputState.value}
        />
    )
  return (
    <div>
        {element}
        {!inputState.isValid && <p>{props.errorText}</p>}
    </div>
  )
}

export default Input