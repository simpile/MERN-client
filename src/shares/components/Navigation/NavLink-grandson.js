import React, { useContext } from 'react';
import {NavLink} from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

function NavLinks() {
const auth = useContext(AuthContext)
  return (
<ul>
  <li>
    <NavLink to="/">Home</NavLink>
  </li>
  {auth.isLogedin && ( 
  <li>
    <NavLink to="/users">userss</NavLink>
      </li>
      )}
  <li>
    <NavLink to="/posts">posts</NavLink>
      </li>
      {auth.isLogedin&&
  <li>
    <NavLink to="/newpost">add new post</NavLink>
      </li>
}

  <li>
    <NavLink to="/login">{auth.isLogedin?"logout":"login/signin"}</NavLink>
    </li>
</ul>
    )
}

export default NavLinks