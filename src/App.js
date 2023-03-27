import React, { useState } from 'react'
import { Box, Button,  ChakraProvider} from '@chakra-ui/react'
import Headerbox from "./components/Headerbox"
import Studentdetails from './components/Studentdetails'
import Remarkstable from './components/Remarkstable'
import Scoretable3 from './components/Scoretable3'
import Gradestable from './components/Gradestable'
import Scoretable1 from './components/Scoretable1'
import Home from './components/Home'


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
          boxShadow='dark-lg'
          _hover={{bg:'red.600', transform:"scale(1.05)", variant:'outline'}}
          _active={{bg:"blue.500",transform:"scale(1.09)"}}
          >
            Go Back
          </Button>
        
        </Box>
        
        
      </Box> : <Home loader={loader} clickhandler={clickhandler} />}

    </ChakraProvider>
    
  )
}

export default App