import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import img1 from '../images/ntflix-bg-dark.png';
import logo from '../images/ntflix-logo.png';
import { LoginForm } from './LoginForm';

export const LoginPage = () => {
  return (
    <Box
      w="100vw"
      h="100vh"
      backgroundImage={img1}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Box ml="10" w="200px" h="200px">
        <Image src={logo}></Image>
      </Box>
      <LoginForm />
    </Box>
  );
};
