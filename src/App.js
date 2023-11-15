import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element = {<Header/>}>
          <Route  path ="/" element = {<Home/>}></Route>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
