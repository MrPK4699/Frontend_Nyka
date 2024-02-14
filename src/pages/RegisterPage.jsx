// // RegisterPage.js

// pages/RegisterPage.js
import React from 'react';
import RegisterForm from '../components/auth/RegisterForm';

const RegisterPage = () => {
  return (
    <div>
      <h2>Register Page</h2>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;





// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { registerUser } from '../redux/actions/authActions';
// import { Box, Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';

// const RegisterPage = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [avatar, setAvatar] = useState(null);
//   const dispatch = useDispatch();

//   const handleRegister = (e) => {
//     e.preventDefault();
//     const userData = new FormData();
//     userData.append('name', name);
//     userData.append('email', email);
//     userData.append('password', password);
//     userData.append('avatar', avatar);

//     dispatch(registerUser(userData));
//   };

//   const handleAvatarChange = (e) => {
//     setAvatar(e.target.files[0]);
//   };

//   return (
//     <Box maxW="400px" m="auto" p="4">
//       <form onSubmit={handleRegister}>
//         <Stack spacing="4">
//           <FormControl>
//             <FormLabel>Name:</FormLabel>
//             <Input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </FormControl>
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
//           <FormControl>
//             <FormLabel>Avatar:</FormLabel>
//             <Input
//               type="file"
//               accept="image/*"
//               onChange={handleAvatarChange}
//               required
//             />
//           </FormControl>
//           <Button type="submit" colorScheme="blue">Register</Button>
//         </Stack>
//       </form>
//     </Box>
//   );
// };

// export default RegisterPage;
