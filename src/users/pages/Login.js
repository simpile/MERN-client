import React, { useContext, useState } from 'react'
import Button from '../../shares/components/FormElemants/Button'
import Input from '../../shares/components/FormElemants/Input'
import { validatorRequire } from '../../shares/utils/validators'
import {useForm} from '../../shares/hooks/useForm'
import { AuthContext } from '../../shares/context/authContext'

 function Login() {
  const auth= useContext(AuthContext)
  const[isLogin, setIsLogin]=useState(true)
const[formState, inputHandler, setFormData]=useForm({
email:{
    value:"",
    isValid:false
},
password:{
    value:"",
    isValid:false
}

},false)
const submitHandler =(event)=>{
  event.preventDefault()
  console.log(formState.inputs)
  auth.login()
}
const changeModeHandler =()=>{
if(!isLogin){
  setFormData({...formState.inputs,
                name:undefined},
                formState.inputs.email.isValid &&
                formState.inputs.password.isValid )}
                else{setFormData({...formState.inputs,
                name:{
                  value:"",
                  isValid:false
                }},
                false)
                
}
  setIsLogin(mode=>!mode)
}
  return (
    <div>
        <form onSubmit={submitHandler}>
      {
       !isLogin&&
                      <Input id="userName" type="text" placeholder="username" element="input" validators={[validatorRequire()]} errorText="wrong userName" onInput={inputHandler}/>
          }
            <Input id="email" type="email" placeholder="email" element="input" validators={[validatorRequire()]} errorText="wrong email" onInput={inputHandler}/>
            <Input id="password" type="password" placeholder="password" element="input" validators={[validatorRequire()]} errorText="wrong password" onInput={inputHandler}/>
            <Button type="submit" disabled={!formState.isValid}>{isLogin?"login":"signup"}</Button>

        </form>
            <Button type="submit" onClick={changeModeHandler}>{isLogin?"don't you have account yet?":"do you already Have account?"}</Button>
    </div>
  )
}
export default Login