import { HStack,Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <HStack
        position={'sticky'}
        display={'flex'}
        fontSize={'2xl'}
        justifyContent={'space-evenly'}
        m={0}
        p={0}
        
        fontWeight={'bold'}
        color={'gray.700'}
        boxShadow='sm'
        textShadow= '0 0 20px gray.200'
        bgGradient={[
            'linear(to-tr, teal.300, yellow.400)',
            'linear(to-t, blue.200, teal.500)',
            'linear(to-b, teal.100, blue.300)',
          ]}
          _hover={{
            bgGradient: 'linear(to-r, blue.200, teal.100)',
          }}
          
        
    
    >
        <Text >Home</Text>
        <Text >Our Schools</Text>
        <Text >About us</Text>
        <Text >Careers</Text>
        <Text> Contact Us</Text>
    </HStack>
  )
}

export default Navbar