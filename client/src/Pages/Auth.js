import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/authReducer';
import { useNavigate } from 'react-router-dom';

function Auth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async (type = 'login') => {
    try {
      const res = await axios.post(`http://localhost:8080/api/user/${type}`, {
        name: input.name,
        email: input.email,
        password: input.password,
      });

      const data = res.data;
      return data;
    } catch (err) {
      console.log(err);
      setError('Invalid Email or password');
      throw err;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      sendRequest('signup')
        .then(() => dispatch(authActions.login()))
        .then(() => navigate('/dashboard'))
        .then((data) => console.log(data));
    } else {
      sendRequest()
        .then(() => dispatch(authActions.login()))
        .then(() => navigate('/dashboard'))
        .then((data) => console.log(data));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={400}
          display="flex"
          flexDirection={'column'}
          alignItems="center"
          justifyContent={'center'}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin="auto"
          marginTop={5}
          borderRadius={5}
        >
          <Typography variant="h2" padding={3} textAlign="center">
            {isSignup ? 'Signup' : 'Login'}
          </Typography>
          {isSignup && (
            <TextField
              name="name"
              onChange={handleChange}
              value={input.name}
              placeholder="name"
              margin="normal"
            />
          )}
          <TextField
            name="email"
            onChange={handleChange}
            value={input.email}
            type={'email'}
            placeholder="email"
            margin="normal"
          />
          <TextField
            name="password"
            onChange={handleChange}
            value={input.password}
            type={'password'}
            placeholder="password"
            margin="normal"
          />
          {error && <div>Error: {error}</div>}
          <Button
            type="submit"
            variant="contained"
            sx={{ borderRadius: 3, marginTop: 3 }}
            color="warning"
          >
            Submit
          </Button>
          <Button
            onClick={() => setIsSignup(!isSignup)}
            sx={{ borderRadius: 3, marginTop: 3 }}
          >
            Changer to {isSignup ? 'Login' : 'Signup'}
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default Auth;
