import { Routes, Route} from 'react-router-dom'
import Header from './components/header';
import Home from "./pages";
import Footer from "./components/footer";
import PostBind from './components/KakaoPostService/PostBind';
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
        <PostBind/>
        <Footer/>
    </div>
  );
}

export default App;
