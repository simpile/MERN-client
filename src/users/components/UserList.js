import React from "react";
import UserItem from "./UserItem";

function UserList(props){
if(props.item.length === 0 )
{ return(<h2>users not found</h2>)}
return( 
    <div>
        <ul>
           
               {
                props.item.map(
                    (user)=>{
                        return(
                            <UserItem
                            key={user.id}
                            id={user.id}
                            img={user.img}
                            name={user.name}
                            posts={user.posts}
                            />
                        )
                    }
                )
               }
         
        </ul>
    </div>

);

}

export default UserList;