import React from "react";

function UserItem(props){
return(
    <li>

<h1>{props.name}</h1>
<img src={props.img} alt={props.name}/>
<h3>{props.posts}</h3>
    </li>
)
}

export default UserItem;