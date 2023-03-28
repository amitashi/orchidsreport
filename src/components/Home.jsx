import { Box, Button, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import Form from './Form'
import Navbar from './Navbar'

const Home = ({loader,clickhandler,loggedin,setloggedin}) => {
 
  return (
    <>
    <Box m={'0.5px'}
    pos="fixed" w="100%" zIndex={2}
    mt={'0px'}
    border={'1px black'}
    >
                <Navbar loggedin={loggedin} setloggedin={setloggedin}/>
                </Box>
    <Box
            bgGradient="linear(to-t, green.200, blue.500)"

            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            alignContent={'center'}
            width='100vw'
            height={'100vh'}
            display='flex'
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            >
                
                
                
                <Box display={'flex'}
                justifyContent={'center'}
                flexDirection={'column'}
                alignItems={'center'}
                color={"#080000"}
                _hover={{transform:'scale(1.01)', fontStyle:'italic', color:'blue.700'}}
                mb={0}
            >
                <Heading colorScheme={'teal'}
                fontStyle={'italic'}
                size='2xl'
                
                
                >Welcome To....</Heading>
                <br></br>
                <Heading
                    
                >ORCHIDS: THE INTERNATIONAL SCHOOL</Heading><br></br>
                <i>Please login to generate the Report Card...</i>
                <br></br>
            </Box>
        
        <Box>
          
          <Form loggedin={loggedin} setloggedin={setloggedin} />
        </Box>
            {loader?<Button

              isLoading
              loadingText='Opening report'
              colorScheme='black'
              variant='outline'
              spinnerPlacement='start'
              boxShadow='dark-lg'
            >
            Opening Report
            </Button >:<Button colorScheme='blue' variant='solid' onClick={clickhandler} 
                display={loggedin?"":'none'}
                m={10}
                _hover={{bg:'red.600', transform:"scale(1.05)" , variant:'outline'}}
                _active={{
                    bg: '#dddfe2',
                    transform: 'scale(0.98)',
                    borderColor: '#bec3c9',
                }}
                boxShadow='dark-lg'
            >Get Report</Button>}
            
        </Box>
        </>
  )
}

export default Home