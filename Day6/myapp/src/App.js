import React from 'react';
import About from './Pages/About';
 import Home from './Pages/Home'
 import Nav from './Components/NavBar';
 import Contact from './Pages/Contact'
import{Route,Routes} from "react-router-dom";
const App = () => {
  return (
    <>
    <Nav/>
    <Routes>
          <Route path="/" element={<Home /> }/>
          <Route path="/about" element={<About /> } />
          <Route path="/contact" element={<Contact /> } />
    </Routes>
    </>
  );
};

export default App;