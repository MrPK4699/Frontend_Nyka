// components/auth/RegisterForm.js
import React, { useState } from 'react';
import { register } from '../../api/auth';
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


const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    // avatar: null // Add avatar field to formData
  });

  const handleChange = (e) => {
    if (e.target.name === 'avatar') {
      setFormData({
        ...formData,
        avatar: e.target.files[0] // Set avatar to the selected file
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create FormData object to send file data
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('password', formData.password);
      formDataToSend.append('avatar', formData.avatar);

      // Make API call to register endpoint
      // console.log(formData);
      await register(formData);

      // Handle successful registration
      // For example, redirect to login page
      // window.location.href = '/login';
    } catch (error) {
      console.error('Registration error:', error);
      // Handle error (e.g., display error message to user)
    }
  };

  return (
    // <div>
    //   <h2>Register</h2>
    //   <form onSubmit={handleSubmit}>
    //     <label htmlFor="name">Name:</label>
    //     <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
    //     <label htmlFor="email">Email:</label>
    //     <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
    //     <label htmlFor="password">Password:</label>
    //     <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
    //     <label htmlFor="avatar">Avatar:</label>
    //     <input type="file" id="avatar" name="avatar" onChange={handleChange} accept="image/*"  />
    //     <button type="submit">Register</button>
    //   </form>
    // </div>
    <Center h="100vh">
      <Box p={8} maxW="md" borderWidth={1} borderRadius={8} boxShadow="lg">
        <Heading mb={4}>Register</Heading>
        <Divider mb={6} />
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormControl>
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
              Register
            </Button>
          </Stack>
        </form>
        <Divider my={6} />
        <Center>
          <Link to="/login">Already have an account? Login</Link>
        </Center>
      </Box>
    </Center>
  );
}

export default RegisterForm;
