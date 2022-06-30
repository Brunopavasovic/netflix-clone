import React from 'react';
import { VStack, Text, Input, Box, Button } from '@chakra-ui/react';

export const LoginForm = () => {
  return (
    <VStack
      mt="-80px"
      ml="75vh"
      backgroundColor="blackAlpha.700"
      w="400px"
      h="600px"
    >
      <VStack alignItems="flex-start" w="300px" h="500px" m=" auto">
        <Text fontWeight="bold" fontSize="4xl" color="white">
          Sign in
        </Text>
        <VStack
          alignItems="flex-start"
          h="105px"
          w="full"
          justifyContent="space-between"
          pt="10px"
        >
          <Input
            color="whiteAlpha.800"
            outline="none"
            border="none"
            backgroundColor="#333"
            placeholder="Username"
            _placeholder={{ color: 'gray' }}
          ></Input>
          <Input
            color="whiteAlpha.800"
            placeholder="Password"
            outline="none"
            backgroundColor="#333"
            border="none"
            _placeholder={{ color: 'gray' }}
          ></Input>
        </VStack>
        <Box
          alignItems="flex-start"
          h="105px"
          w="full"
          justifyContent="space-between"
          pt="30px"
        >
          <Button
            backgroundColor="red"
            fontSize="18px"
            fontWeight="bold"
            border="none"
            w="full"
            color="white"
            _hover={{ backGroundColor: 'none' }}
          >
            Sign In
          </Button>
        </Box>
      </VStack>
    </VStack>
  );
};
