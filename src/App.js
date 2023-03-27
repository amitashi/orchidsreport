import React, { useState } from 'react'
import { Box, Button,  ChakraProvider} from '@chakra-ui/react'
import Headerbox from "./components/Headerbox"
import Studentdetails from './components/Studentdetails'
import Remarkstable from './components/Remarkstable'
import Scoretable3 from './components/Scoretable3'
import Gradestable from './components/Gradestable'
import Scoretable1 from './components/Scoretable1'

const App = () => {
  const [state,setstate] = useState(false);
  const [loader,setloader] = useState(false);
  const clickhandler = ()=>{
    setloader(true);
    setTimeout(()=>{setstate(true)
      setloader(false)
    
    },2000)
    // 
    
  }
  

  return (
    <ChakraProvider>
     {state? <Box bg={"#fffafa"}>
        <Headerbox/>
        <Studentdetails/>
        <Scoretable1/>
        <Scoretable3/>
        <Gradestable/>
        <Remarkstable/>
        <Box m={4} 
        justifyContent={'center'}
        alignContent="center"
        display={'flex'}
        >
          <Button 
          colorScheme='teal' variant='solid'
          onClick={()=>setstate(false)}
          _hover={{bg:'red.600', transform:"scale(1.05)", variant:'outline'}}
          _active={{bg:"blue.500",transform:"scale(1.09)"}}
          >
            Back
          </Button>
        
        </Box>
        
        
      </Box> :<Box
            bgGradient="linear(to-t, green.200, blue.500)"

            backgroundPosition="center"
            backgroundRepeat="no-repeat"
          alignContent={'center'}
          width='100vw'
          height={'100vh'}
          display='flex'
          alignItems={'center'}
          justifyContent={'center'}
      >
            {loader?<Button

              isLoading
              loadingText='Loading'
              colorScheme='blue'
              variant='outline'
              spinnerPlacement='start'
            >
          Generate Report
          </Button >:<Button colorScheme='blue' variant='solid' onClick={clickhandler} 
          _hover={{bg:'red.600', transform:"scale(1.05)" , variant:'outline'}}
          _active={{
            bg: '#dddfe2',
            transform: 'scale(0.98)',
            borderColor: '#bec3c9',
          }}
          >Generate Report</Button>}
            
        </Box>}

    </ChakraProvider>
    
  )
}

export default App