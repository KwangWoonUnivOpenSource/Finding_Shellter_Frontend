import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Search from "./components/SearchAdress";
import Footer from "./components/footer/Footer";

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
