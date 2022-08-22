import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShoppingCartOutlined, Person } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { useCart } from '../CartProvider/CartProvider';
import { useUser } from '../../user/UserProvider';
import SearchField from '../SearchField/SearchField';
import './Header.css';

function Header() {
  const { pathname } = useLocation();
  const { totalItems } = useCart();
  const { user } = useUser();

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          shopApp
        </Link>
        {pathname === '/' && <SearchField />}
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
            to={user ? '/account' : '/login'}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            <Person sx={{ marginRight: '0.2rem' }} />
            {user ? 'My Account' : 'Sign In'}
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
