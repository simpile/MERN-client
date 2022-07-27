import React from 'react'
import PostItem from './PostItem'

function PostList(props) {
    
    if(props.item.length===0){
        return(<h2>Nothing found</h2>);
    }
  return (
  props.item.map(
    (userPost)=>{
        return( 
        <ul>
        <PostItem key={userPost.id}
            title={userPost.title}
            id={userPost.id}
      description={userPost.description}
      img={userPost.img}
      creactor={userPost.creactor}
      />
      </ul>
      )
    }
  )
    );
}

export default PostList