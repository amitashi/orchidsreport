import React, { useState } from 'react'
import { Box, Button,  ChakraProvider } from '@chakra-ui/react'
import Headerbox from "./components/Headerbox"
import Studentdetails from './components/Studentdetails'
import Remarkstable from './components/Remarkstable'
import { click } from '@testing-library/user-event/dist/click'

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
        <Remarkstable/>
        
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
          </Button >:<Button colorScheme='blue' variant='solid' onClick={clickhandler}  >Generate Report</Button>}
            
        </Box>}

    </ChakraProvider>
    
  )
}

export default App