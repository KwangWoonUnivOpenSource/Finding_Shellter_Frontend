import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Post from './components/KakaoPostService/Post';
import PostBind from './components/KakaoPostService/PostBind';
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from './components/Footer';
import War from "./pages/Escape/War";
import Gas from "./pages/Escape/Gas";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element = {<Header/>}>
          <Route  path ="/" element = {<Home/>}></Route>
          <Route path = "/howtowar" element = {<War/>}></Route>
          <Route path = "/howtogas" element = {<Gas/>}></Route>
          </Route>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
