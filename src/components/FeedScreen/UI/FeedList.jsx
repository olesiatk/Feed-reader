import React, { useState } from 'react';

export const FeedList = ({ posts, getActiveLink }) => {



  return (
    <ul>
      {posts.map(post => (
        <li 
          key={post.id} 
          onClick={()=>getActiveLink(post.body)}
        >
          {post.title}
        </li>
      ))}
    </ul>
  )
}