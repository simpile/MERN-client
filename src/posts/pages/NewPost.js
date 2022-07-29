import React from 'react'
import Button from '../../shares/FormElemants/Button'
import Input from '../../shares/FormElemants/Input'

function NewPost() {
  return (
<div>
  <form>
    <Input element="input" placeholder="title" type="text" errorText="unvalid text title"/>
    <Input placeholder="discription" errorText="unvalid text title"/>
    <Button>submit</Button>
  </form>
</div>
    )
}

export default NewPost