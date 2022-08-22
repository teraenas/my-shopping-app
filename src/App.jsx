import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Account from './pages/Account/Account';
import LogIn from './pages/LogIn/LogIn';
import './App.css';

function App() {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [displaySearchField, setDisplaySearchField] = useState(true);
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProductList(data))
      .catch(error => setError('OOPS! Looks like something went wrong...'));
  }, []);

  useEffect(
    () => setDisplaySearchField(location.pathname === '/' ? true : false),
    [location]
  );

  return (
    <div className="App">
      <Header
        setSearchTerm={setSearchTerm}
        displaySeachField={displaySearchField}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              searchTerm={searchTerm}
              productList={productList}
              error={error}
            />
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
