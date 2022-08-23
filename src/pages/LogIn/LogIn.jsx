import React, { useEffect, useState } from 'react';
import { Navigate, useLocation, Link } from 'react-router-dom';
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  TextField,
  Box,
  Button,
  Alert,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useUser } from '../../user/UserProvider';
import './LogIn.css';

function LogIn() {
  const { state } = useLocation();
  const { user, logIn, error, setError } = useUser();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleLogin = async e => {
    e.preventDefault();
    await logIn(email, password);
  };

  useEffect(() => setError(null), []);

  if (user) return <Navigate to={state?.from || '/'} replace />;

  return (
    <section className="login-page">
      <div className="container">
        <Link to="/" className="logo">
          shopApp
        </Link>
        <Box component="form" className="login-form">
          <h1>Sign in</h1>
          {error && <Alert severity="error">{error}</Alert>}
          {state?.redirectMessage && (
            <Alert severity="info">{state?.redirectMessage}</Alert>
          )}
          <FormControl sx={{ m: 1 }} variant="standard">
            <TextField
              id="email-input"
              label="Email"
              variant="standard"
              onChange={e => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel htmlFor="password-input">Password</InputLabel>
            <Input
              id="password-input"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl>
            <Button
              variant="contained"
              size="large"
              type="submit"
              onClick={async e => await handleLogin(e)}
              sx={{ marginBlockStart: '2rem' }}
            >
              Login
            </Button>
          </FormControl>
        </Box>
      </div>
    </section>
  );
}

export default LogIn;
