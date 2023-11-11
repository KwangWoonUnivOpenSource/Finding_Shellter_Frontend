import { Route,Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Search from "./components/Search";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/shellter" element = {<Search/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
