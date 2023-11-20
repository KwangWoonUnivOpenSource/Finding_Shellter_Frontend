import { Routes, Route} from 'react-router-dom'
import Header from './components/header'; 
import Footer from "./components/footer";
import PostBind from './components/KakaoPostService/PostBind';
import War from "./pages/Escape/War";
import Gas from "./pages/Escape/Gas";
import Home from './pages/Home';


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
        <PostBind/>
        <Footer/>
    </div>
  );
}

export default App;
