import React, { useCallback, useReducer } from 'react'
import Button from '../../shares/FormElemants/Button'
import Input from '../../shares/FormElemants/Input'
import {validatorRequire} from'../../shares/utils/validators'

const formReducer=(statee, action)=>{
  switch(action.type){
    case'INPUT-CHANGE':
      let formIsValid = true
      for (const inputId in statee.inputs){
        if(inputId===action.inputId){
        formIsValid = formIsValid && action.isValid}
         else{
          formIsValid = formIsValid && statee.inputs[inputId].isValid
        }
      }
      return{
        ...statee,
        inputs:{
        ...statee.inputs,
        [action.inputId]:{
          value:action.value,
          isValid:action.isValid}
        },
        isValid:formIsValid
        
      }
      default: 
      return statee
  }

}

function NewPost() {
  const [formState, formDispatch]=useReducer(formReducer,{
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
})},[])
const onSubmitHandler =(event)=>{
event.preventDefault()
console.log(formState.inputs)
}

  return (
<div>
  <form onSubmit={onSubmitHandler}>
    <Input id="postTitle" onInput={inputHandler}  element="input" placeholder="title" type="text" errorText="please enter a valid title" validators={validatorRequire()}/>
    <Input id="postDescript" onInput={inputHandler} placeholder="discription" errorText="please enter a valid description" validators={validatorRequire()}/>
    <Button disabled={!formState.isValid}>submit</Button>
  </form>
</div>
    )
}

export default NewPost