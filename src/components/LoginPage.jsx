import { Box } from '@chakra-ui/react';
import React from 'react';
import img1 from '../images/ntflix-bg.png';
import logo from '../images/ntflix-logo.png';
import { Img } from '@chakra-ui/react';

export const LoginPage = () => {
  return (
    <Box
      w="100vw"
      h="100vh"
      backgroundImage={img1}
      bgRepeat="no-repeat"
      bgSize="cover"
      filter="auto"
      brightness="60%"
      zIndex="1"
    >
      <Img w="300px" zIndex="-1" h="150px" src={logo}></Img>
    </Box>
  );
};
