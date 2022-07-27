import React from 'react'
import { useParams } from 'react-router-dom'
import PostList from '../components/PostList'

const posts =[
  {
   id:"p1",
   title:"sucha good day1",
   description:"with friends",
   image:"",
   creator:"u1"
  },
  {
   id:"p2",
   title:"sucha good day2",
   description:"with friends",
   image:"",
   creator:"u2"
  },
  {
   id:"p3",
   title:"sucha good day3",
   description:"with friends",
   image:"",
   creator:"u3"
  },
  {
    id:"p3",
    title:"sucha good day3",
    description:"with friends",
    image:"",
    creator:"u3"
   }
 
   ]
function UserPost() {
  const userId = useParams().userId;
  const loadItem = posts.filter(posts=>posts.creator===userId);

  return (
    <ul>
     <PostList item={loadItem}/>
    </ul>
  )
}

export default UserPost