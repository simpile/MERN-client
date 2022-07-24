import React from "react";
import UserList from "../components/UserList";

function Users(){
    const users =[
        {
            id:1,
            img:"",
            name:"name",
            posts:0
        },
        {
            id:2,
            img:"",
            name:"name",
            posts:0
        }
    ];
    return(
<div>
    <UserList item={users}/>
</div>)
}

export default Users;