import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from "./pages/Products";
import Home from "./pages/Home"
import Checkout from './pages/Checkout';
import CartContextProvider from './contextProviders/CartContextProvider';
import About from './pages/About';

function App() {
  return ( 
    <CartContextProvider>
    <Router>
    <div className="App"> 
    <Routes>  
    <Route path="/" element={<Home />}/>
    <Route path="/products" element={<Products />}/>
    <Route path="/checkout" element={<Checkout />}/>
    <Route path="/about" element={<About />}/>
    </Routes>
    </div>
    </Router>
    </CartContextProvider> 
  );
}

export default App;
