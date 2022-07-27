import React from 'react'
import { Link } from 'react-router-dom'

function Button(props) {
  
if(props.href){
    return(<a
    href={props.href}
        >
        {props.children}
    </a>)}
if(props.to){
    return(
<Link
to={props.to}
>
{props.children}
</Link>
    )
}

return (
<button
type={props.type}
onClick={props.onClick}
className={`btn`}
>
    {props.children}
</button>
    )
}

export default Button