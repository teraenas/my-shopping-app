import React from 'react';
import { useCart } from '../Cart/Cart';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import SearchField from '../SearchField/SearchField';
import './Header.css';

function Header(props) {
  const { totalItems } = useCart();

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          shopApp
        </Link>
        {props.displaySeachField && (
          <SearchField setSearchTerm={props.setSearchTerm} />
        )}
        <nav className="main-nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            <Badge
              badgeContent={totalItems}
              color="error"
              anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
              <ShoppingCartOutlined />
            </Badge>
            Cart
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
