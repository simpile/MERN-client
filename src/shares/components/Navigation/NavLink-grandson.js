import React from 'react';
import {NavLink} from 'react-router-dom';

function NavLinks(props) {
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
</ul>
    )
}

export default NavLinks