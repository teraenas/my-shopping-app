import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Account from './pages/Account/Account';
import LogIn from './pages/LogIn/LogIn';
import './App.css';

function App() {
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProductList(data))
      .catch(error => setError('OOPS! Looks like something went wrong...'));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<Home productList={productList} error={error} />}
          />
          <Route path="account" element={<Account />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
        <Route path="/*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
