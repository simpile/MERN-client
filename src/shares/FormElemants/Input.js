import React, { useEffect, useReducer } from 'react'
import {validate} from '../utils/validators'

const inputReducer=(state, action)=>{
  switch(action.type){
    case"CHANGE"
    :return{...state,
      value:action.val,
      isValid:validate(action.val, action.validators),
    }
    case "BLUR":
      return{
      ...state,
      isBlured:true
    }
    default: return state
  }

}

function Input(props) {
  
const[inputState, dispatch]= useReducer(inputReducer,{value:"", isValid:false, isBlured:false})
const [id, onInput]= props;
const {value, isValid}= inputState;
useEffect(()=>{
  onInput(id, value, isValid)
},[id, value, isValid, onInput]) 


const changeHandler =(event)=>{
dispatch({
  type:"CHANGE",
  val:event.target.value,
  validators:props.validators
})
  }

const onBlurHandler =(e)=>{
  dispatch({
    type:'BLUR',

  })
}

    const element = props.element === "input"?(<input
    id={props.id}
    type={props.type}
    placeholder={props.placeholder}
    onChange={changeHandler}
    value={inputState.value}
    onBlur={onBlurHandler}

    />):(
        <textarea
        id={props.id}
        rows={props.row || 3}
        placeholder={props.placeholder}
        onChange={changeHandler}
        value={inputState.value}
        onBlur={onBlurHandler}
        />
    )
  return (
    <div>
        {element}
        {!inputState.isValid &&
        inputState.isBlured &&
        <p>{props.errorText}</p>}
    </div>
  )
}

export default Input