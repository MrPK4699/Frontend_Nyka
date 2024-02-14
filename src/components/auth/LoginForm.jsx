// components/auth/LoginForm.js
import React, { useState } from 'react';
import { login } from '../../api/auth';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Center,
  Divider,
} from '@chakra-ui/react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make API call to login endpoint
      // const response = await fetch('/api/user/login', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(formData)
      // });

      // if (!response.ok) {
      //   throw new Error('Login failed');
      // }
      login(formData);
      // Handle successful login
      // For example, redirect to dashboard
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Login error:', error);
      // Handle error (e.g., display error message to user)
    }
  };

  return (
    // <div>
    //   <h2>Login</h2>
    //   <form onSubmit={handleSubmit}>
    //     <label htmlFor="email">Email:</label>
    //     <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
    //     <label htmlFor="password">Password:</label>
    //     <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
    //     <button type="submit">Login</button>
    //   </form>
    // </div>
    <Center h="100vh">
      <Box p={8} maxW="md" borderWidth={1} borderRadius={8} boxShadow="lg">
        <Heading mb={4}>Login</Heading>
        <Divider mb={6} />
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </FormControl>
            <Button type="submit" colorScheme="blue">
              Login
            </Button>
          </Stack>
        </form>
        <Divider my={6} />
        <Center>
          <Link to="/register">Create an account</Link>
        </Center>
      </Box>
    </Center>
  );
}

export default LoginForm;
