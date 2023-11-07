import { Route,Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Home from "./components/Home";
import Search from "./components/Search";
import Footer from "./components/Footer";

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
