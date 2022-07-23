import React from "react";
import { Link } from "react-router-dom";

function UserItem(props){
return(
    <Link to={"/hi"}>
    <li>
<h1>{props.name}</h1>
<img src={props.img} alt={props.name}/>
<h3>{props.posts}</h3>
    </li>
</Link>
)
}

export default UserItem;