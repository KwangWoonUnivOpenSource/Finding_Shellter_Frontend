<<<<<<< HEAD
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Search from "./components/SearchAdress";
import Footer from "./components/footer/Footer";
=======
import { Route,Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages";
//import Search from "./components/Search";
import Footer from "./components/Footer";
>>>>>>> 3ec8c9b1499d704ad8f7fe921ca036e2641597e6

function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path ="/" element = {<Header/>}>
        
          </Route>
        </Routes>
       <Home/>
       <Footer/>
    </div>
  );
}

export default App;
