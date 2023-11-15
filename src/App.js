import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Header from './components/header';
import Home from "./pages";
import Footer from "./components/footer";
import Post from './components/KakaoPostService/Post';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path ="/" element = {<Home/>}></Route>
        </Routes>
       <Post/>
       <Footer/>
    </div>
  );
}

export default App;
