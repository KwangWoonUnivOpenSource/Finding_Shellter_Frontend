import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Header from './components/header';
import Home from "./pages";
import Footer from "./components/footer";
import Post from './components/KakaoPostService/Post';

function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path ="/" element = {<Header/>}>
     
          </Route>
        </Routes>
       <Home/>
       <Post/>
       <Footer/>
    </div>
  );
}

export default App;
