import React from 'react';
import {NavLink} from 'react-router-dom';

function NavLinks() {
  return (
<ul>
  <li>
    <NavLink to="/">Home</NavLink>
  </li>
  <li>
    <NavLink to="/users">userss</NavLink>
      </li>
  <li>
    <NavLink to="/posts">posts</NavLink>
      </li>
  <li>
    <NavLink to="/newpost">add new post</NavLink>
      </li>
  <li>
    <NavLink to="/login">login</NavLink>
      </li>
</ul>
    )
}

export default NavLinks