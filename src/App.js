
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home';
import BasicExample from './component/Navbar';
import { Routes,Route } from 'react-router-dom'
import Cart from './component/Card';
function App() {
  return (
    <div className="App">
     <BasicExample/>
     <Routes >
     <Route path='/' element={<Home/>}/>
     <Route path='/cart' element={<Cart/>}/>
     </Routes>
  
    </div>
  );
}



export default App;
