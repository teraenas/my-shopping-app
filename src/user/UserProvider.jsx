import React, { createContext, useContext, useEffect, useState } from 'react';
import userQuery from './user.json';

const UserContext = createContext();

const getUser = () => {
  const savedUser = JSON.parse(localStorage.getItem('user'));
  return savedUser ? savedUser : null;
};

function UserProvider({ children }) {
  const [user, setUser] = useState(getUser());
  const [error, setError] = useState(null);

  const logIn = async (email, pass) => {
    const user = userQuery;
    if (email === user.email && pass === user.password) {
      setUser(user);
    } else setError('Invalid email or password.');
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, logIn, error }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  return useContext(UserContext);
}

export { useUser, UserProvider };
