import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../../user/UserProvider';

function Account() {
  const { user } = useUser();

  if (!user) return <Navigate to="/login" replace />;
  return <div>Hello, {user.name.firstname}</div>;
}

export default Account;
