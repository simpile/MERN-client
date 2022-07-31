import React, { useCallback } from 'react'
import Button from '../../shares/FormElemants/Button'
import Input from '../../shares/FormElemants/Input'
import {validatorRequire} from'../../shares/utils/validators'

function NewPost() {
  const inputHandler =useCallback((id, value, isValid)=>{},[])
  return (
<div>
  <form>
    <Input onInput={inputHandler}  element="input" placeholder="title" type="text" errorText="unvalid text title" validators={validatorRequire()}/>
    <Input placeholder="discription" errorText="unvalid text title" validators={validatorRequire()}/>
    <Button>submit</Button>
  </form>
</div>
    )
}

export default NewPost