import React from 'react'
import PostList from '../components/PostList'
function UserPost() {
  const posts =[
 {
  id:"1",
  title:"sucha good day",
  description:"with friends",
  image:"",
  creator:"user1"
 },
 {
  id:"2",
  title:"sucha good day",
  description:"with friends",
  image:"",
  creator:"user1"
 },
 {
  id:"3",
  title:"sucha good day",
  description:"with friends",
  image:"",
  creator:"user1"
 }

  ]
  return (
    <ul>
     <PostList item={posts}/>
    </ul>
  )
}

export default UserPost