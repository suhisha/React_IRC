import './Assets/CSS/login.css';
import './Assets/CSS/nav.css';
import  Home from './Components/Home.js';
import  Login from './Components/Login.js';
import Reg from './Components/Reg.js';
import './Assets/CSS/reg.css'
import Nav from './Components/Nav.js';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
   
    {/* <Home/> */}
    {/* <Reg/> */}
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Reg/>}/>
        </Routes>
        
    </>
  )
}

export default App;
