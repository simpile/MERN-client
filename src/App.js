import React, { useCallback, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  
  // Link,
} from "react-router-dom";
// import Posts from "./posts/pages/Posts";
import NewPost from "./posts/pages/NewPost";
import UserPost from "./posts/pages/UserPost";
import MainNav from "./shares/components/Navigation/MainNav-parent";
import Home from "./shares/pages/Home";
import Users from "./users/pages/Users";
import Login from "./users/pages/Login";
import { AuthContext } from "./shares/context/authContext";
function App() {
  const [isLogin, setIsLogin]= useState(false)
  const login= useCallback(()=>{
    setIsLogin(true)
  },[])
  const logout= useCallback(()=>{
    setIsLogin(false)
  },[])
  return (
    <AuthContext.Provider
    value={{
      isLogedin: isLogin ,
      login: login,
      logout:logout
    }}
    >
    <BrowserRouter>
    <MainNav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:userId/posts" element={<UserPost />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Home />} />{/* redirect */}
      </Routes>
    </BrowserRouter>
     </AuthContext.Provider>
  );
}

export default App;