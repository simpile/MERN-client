import React from 'react'

function Input(props) {
    const element = props.element === "input"?(<input
    id={props.id}
    type={props.type}
    placeholder={props.placeholder}
    />):(
        <textarea
        id={props.id}
        rows={props.row || 3}
        placeholder={props.placeholder}
        />
    )
  return (
    <div>
        {element}
    </div>
  )
}

export default Input