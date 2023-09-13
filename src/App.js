import './App.css';
import Order from './pages/order';
import Cart from './pages/cart';
import Itempage from './pages/itempage';


import { BrowserRouter as Router, Routes,  Route} from 'react-router-dom';

function App() {

  
  return (
  <div className='App'>
    <Router>
      <Routes>
        <Route path="/" exact element={<Order/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/item" element={<Itempage/>} />  
      </Routes>
  </Router>
  

  </div>

  );
}

export default App;
