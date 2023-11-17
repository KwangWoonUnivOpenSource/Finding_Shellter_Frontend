import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Header from './components/header';
import Home from "./pages";
import Footer from "./components/footer";
import Post from './components/KakaoPostService/Post';
import PostBind from './components/KakaoPostService/PostBind';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path ="/" element = {<Home/>}></Route>
        </Routes>
       <Home/>
       <PostBind/>

       <Footer/>
    </div>
  );
}

export default App;
