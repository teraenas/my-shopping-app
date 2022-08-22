import React from 'react';
import { Button } from '@mui/material';
import { Logout } from '@mui/icons-material';
import { Navigate } from 'react-router-dom';
import { useUser } from '../../user/UserProvider';
import './Account.css';

function Account() {
  const { user, logOut } = useUser();

  if (!user) return <Navigate to="/login" replace />;
  return (
    <section className="account-page">
      <div className="container">
        <h1>Hello, {user.name.firstname}</h1>
        <Button
          variant="contained"
          endIcon={<Logout />}
          onClick={() => logOut()}
        >
          LOGOUT
        </Button>
      </div>
    </section>
  );
}

export default Account;
