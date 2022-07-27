import React from "react";
import UserList from "../components/UserList";

function Users(){
    const users =[
        {
            id:"u1",
            img:"",
            name:"name1",
            posts:1
        },
        {
            id:"u2",
            img:"",
            name:"name2",
            posts:1
        },
        {
            id:"u3",
            img:"",
            name:"name3",
            posts:2
        }
    ];
    return(
<div>
    <UserList item={users}/>
</div>)
}

export default Users;