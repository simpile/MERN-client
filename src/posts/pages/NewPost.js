import React from 'react'
import Button from '../../shares/FormElemants/Button'
import Input from '../../shares/FormElemants/Input'
import { useForm } from '../../shares/hooks/useForm'
import {validatorRequire} from'../../shares/utils/validators'



function NewPost() {
const [formState, inputHandler]=useForm({ 
  postTitle:{
valu:"",
isValid:false
  },
  postDescript:{
    valu:"",
    isValid:false
  }
}, false )

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