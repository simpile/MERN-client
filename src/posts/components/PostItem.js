import React from 'react'
import {Link} from 'react-router-dom'

function PostItem(props) {
  return (
//     <Link to={`/${props.id}/usersPost`}>
//         <li>
// <image src={props.img} alt={props.name}/>
// <h1>
//     {props.title}
// </h1>
// </li>
// </Link>

<li>
    <div>
        <img src={props.image} alt={props.title}/>
    </div>
    <div>
        <h1>{props.creator}</h1>
        <h2>{props.title}</h2>
        <h3>{props.description}</h3>
    </div>
    <div>
        <button>delete</button>
    </div>
</li>
    )
}

export default PostItem