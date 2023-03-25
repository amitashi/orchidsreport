import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Headerbox from "./components/Headerbox"
import Studentdetails from './components/Studentdetails'

const App = () => {
  return (
    <ChakraProvider>
        <Headerbox/>
        <Studentdetails/>
    </ChakraProvider>
    
  )
}

export default App