import Login from './Components/Login'
import Home from './Components/Home'
import Reg from'./Components/Reg'
import Wooden from'./Components/Wooden'
import Remote from'./Components/Remote'
import Doll from'./Components/Doll'
// import Side from'./Components/Side'
import {Routes,Route} from 'react-router-dom'
import './App.css';
function App() {
  return (
    <div className="App">
      {/* <Login/>
      <Reg/>
       <Home/>   */}
       <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Reg' element={<Reg/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/Wooden' element={<Wooden/>}/>
        <Route path='/Remote' element={<Remote/>}/>
        <Route path='/Doll' element={<Doll/>}/>
       </Routes>
    </div>
  );
}

export default App;
