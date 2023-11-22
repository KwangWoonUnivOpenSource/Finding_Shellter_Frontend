import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Post from './components/KakaoPostService/Post';
import PostBind from './components/KakaoPostService/PostBind';
import Header from './components/Header'
import Home from "./pages/Home";
import War from "./pages/Escape/War";
import Gas from "./pages/Escape/Gas";
import Report from "./pages/Escape/Report";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element = {<Header/>}>
          <Route  path ="/" element = {<Home/>}></Route>
          <Route path = "/howtowar" element = {<War/>}></Route>
          <Route path = "/howtogas" element = {<Gas/>}></Route>
          <Route path = "/howtoreport" element = {<Report/>}></Route>
          <Route path ="/post" element = {<PostBind/>}></Route>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
