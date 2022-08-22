import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  TextField,
  Box,
  Button,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useUser } from '../../user/UserProvider';

function LogIn() {
  const { user, logIn, error } = useUser();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleLogin = async e => {
    e.preventDefault();
    await logIn(email, password);
  };

  return (
    <section className="login-page">
      <div className="container">
        {user && <Navigate to="/" replace />}
        {error && <p>{error}</p>}
        <Box component="form">
          <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
            <TextField
              id="email-input"
              label="Standard"
              variant="standard"
              onChange={e => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
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
