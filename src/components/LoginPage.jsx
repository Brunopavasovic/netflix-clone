import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import img1 from '../images/ntflix-bg-dark.jpg';
import logo from '../images/ntflix-logo.png';
import { LoginForm } from './LoginForm';

export const LoginPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      w="full"
      h="100vh"
      backgroundImage={img1}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Box top="-20px" pl="50px" display="flex" w="full" h="max-content">
        <Image w="200px" h="150px" src={logo}></Image>
      </Box>
      <Box
        m="0 auto"
        display="flex"
        alignItems="center"
        w="full"
        h="max-content"
      >
        <LoginForm />
      </Box>
    </Box>
  );
};
