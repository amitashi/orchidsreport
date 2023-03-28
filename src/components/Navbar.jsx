import { Button, HStack,Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = ({loggedin,setloggedin}) => {
  const clickhandler=()=>{
    setloggedin(false);
  }
  return (
    <HStack
        
        position={'relative'}
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
        <Text borderRadius={8}  _hover={{bg:'gray.200', color:'red.300', transform:"scale(1.02)" , variant:'outline'}}>Home</Text>
        <Text borderRadius={8}  _hover={{bg:'gray.200', color:'red.300', transform:"scale(1.02)" , variant:'outline'}}>Our Schools</Text>
        <Text borderRadius={8}  _hover={{bg:'gray.200', color:'red.300', transform:"scale(1.02)" , variant:'outline'}}>About us</Text>
        <Text borderRadius={8}  _hover={{bg:'gray.200', color:'red.300', transform:"scale(1.02)" , variant:'outline'}}>Careers</Text>
        <Text borderRadius={8}  _hover={{bg:'gray.200', color:'red.300', transform:"scale(1.02)" , variant:'outline'}} > Contact Us</Text>
        <Button colorScheme='blue' variant='solid' onClick={clickhandler} 
                size={'sm'}
                display={loggedin?"":'none'}
                _hover={{bg:'gray.700', color:'red.300', transform:"scale(1.02)" , variant:'outline'}}
                _active={{
                    bg: '#dddfe2',
                    transform: 'scale(0.98)',
                    borderColor: '#bec3c9',
                }}
                boxShadow='sm'
            >Log Out</Button>
    </HStack>
  )
}

export default Navbar