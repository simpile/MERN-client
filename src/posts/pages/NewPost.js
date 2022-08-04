import React, { useCallback, useReducer } from 'react'
import Button from '../../shares/FormElemants/Button'
import Input from '../../shares/FormElemants/Input'
import {validatorRequire} from'../../shares/utils/validators'

const formReducer=(state, action)=>{
  switch(action.type){
    case'INPUT-CHANGE':{
      let formIsValid = true;
      for (const InputId in state.inputs){if(InputId===action.InputId){
        formIsValid = formIsValid && action.isValid} else{
          formIsValid = formIsValid && state.inputs[InputId].isValid;
        }
      }
      return{
        ...state,
        ...state.inputs,
        [action.InputId]:{
          value:action.value,
          isValid:action.isValid
        },isValid:formIsValid
        }
      }
      default: return state
  }

}

function NewPost() {
  const [formState, formDispatch]=(formReducer,{
inputs:{
  postTitle:{
valu:"",
isValid:false
  },
  postDescript:{
    valu:"",
    isValid:false
  }
} ,
  isValid:false})
    const inputHandler =useCallback((id, value, isValid)=>{
formDispatch({
  type:'INPUT-CHANGE',
  value:value,
  isValid:isValid,
  inputId:id
})

    },[])
  return (
<div>
  <form>
    <Input id="postTitle" onInput={inputHandler}  element="input" placeholder="title" type="text" errorText="please enter a valid title" validators={validatorRequire()}/>
    <Input id="postDescript" onInput={inputHandler} placeholder="discription" errorText="please enter a valid description" validators={validatorRequire()}/>
    <Button>submit</Button>
  </form>
</div>
    )
}

export default NewPost