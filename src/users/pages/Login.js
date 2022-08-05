import React from 'react'
import Button from '../../shares/FormElemants/Button'
import Input from '../../shares/FormElemants/Input'
import { validatorRequire } from '../../shares/utils/validators'
import {useForm} from '../../shares/hooks/useForm'

 function Login() {
const[formState, inputHandler]=useForm({
email:{
    value:"",
    isValid:false
},
password:{
    value:"",
    isValid:false
}

},false)
  return (
    <div>
        <form onSubmit={formState}>
            <Input id="email" type="email" placeholder="email" element="input" validators={[validatorRequire()]} errorText="wrong email" onInput={inputHandler}/>
            <Input id="password" type="password" placeholder="password" element="input" validators={[validatorRequire()]} errorText="wrong password" onInput={inputHandler}/>
            <Button disabled={!formState.isValid}>login</Button>
        </form>
    </div>
  )
}
export default Login