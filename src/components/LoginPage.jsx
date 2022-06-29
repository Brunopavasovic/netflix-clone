import { Box } from '@chakra-ui/react';
import React from 'react';
import img1 from '../images/ntflix-bg.png';
import logo from '../images/ntflix-logo.png';
import { Img } from '@chakra-ui/react';
import { LoginForm } from './LoginForm';

export const LoginPage = () => {
  return (
    <Box w="100vw" h="100vh">
      <LoginForm />
      <Img w="100vw" h="100vh" src={img1} filter="auto" brightness="50%"></Img>
      <Img
        src={logo}
        w="200px"
        h="100px"
        position="absolute"
        mt="-100vh"
        ml="50px"
      ></Img>
    </Box>
  );
};
