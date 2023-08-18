import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import  Home  from './components/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import  CartDetails  from './components/CartDetails';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<CartDetails/>}/>
      </Routes>
    </div>
  );
}


export default App;