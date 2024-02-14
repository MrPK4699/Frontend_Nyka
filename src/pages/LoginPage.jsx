// // LoginPage.js

// pages/LoginPage.js
import React from 'react';
import LoginForm from '../components/auth/LoginForm';

const LoginPage = () => {
  return (
    <div>
      <h2>Login Page</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;






// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { loginUser } from '../redux/actions/authActions';
// import { Box, Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     dispatch(loginUser({ email, password }));
//   };

//   return (
//     <Box maxW="400px" m="auto" p="4">
//       <form onSubmit={handleLogin}>
//         <Stack spacing="4">
//           <FormControl>
//             <FormLabel>Email:</FormLabel>
//             <Input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </FormControl>
//           <FormControl>
//             <FormLabel>Password:</FormLabel>
//             <Input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </FormControl>
//           <Button type="submit" colorScheme="blue">Login</Button>
//         </Stack>
//       </form>
//     </Box>
//   );
// };

// export default LoginPage;
