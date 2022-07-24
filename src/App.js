import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  
  // Link,
} from "react-router-dom";
import Posts from "./posts/pages/Posts";
import Users from "./users/pages/Users";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<Users />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;