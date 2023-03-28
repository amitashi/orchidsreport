import { FormControl,FormLabel,Input,Box, Button, useToast} from '@chakra-ui/react'
import React, { useState } from 'react'

const Form = ({loggedin,setloggedin}) => {

    const [state,setstate] = useState({user:"",password:""})
    const [loader,setloader] = useState(false);
    const toast = useToast()
    const loginhandler=()=>{
        
        if(state.user && state.password){
            setloader(true);
            setTimeout(() => {
                setloggedin(true)   
                setloader(false)
            }, 2000);
             
        }
        else{
            toast({
                title: `Please enter correct username and password`,
                variant: 'top-accent',
                isClosable: true,
                duration:3000
              })
        }
        
    }

  return (
  <Box m ={10}
  display={loggedin?"none":""}
  >
        <FormControl isRequired>
        <FormLabel>Username</FormLabel>
        <Input type={'text'} placeholder='First name' value={state.user} onChange={(e)=>setstate({...state,user:e.target.value})} />
        <br></br>
        <br></br>
        <FormLabel>Password</FormLabel>
        <Input type={'password'} placeholder='Password' value={state.password} onChange={(e)=>setstate({...state,password:e.target.value})}  />   

         <Button
            mt={10}
            colorScheme='teal'
            isLoading={loader}
            loadingText='loggin in'
            width={'100%'}
            type='submit'
            _hover={{bg:'red.600', transform:"scale(1.05)" , variant:'outline'}}
            _active={{
                bg: '#dddfe2',
                transform: 'scale(0.98)',
                borderColor: '#bec3c9'}}
                onClick={loginhandler}
         >Login</Button>   
        </FormControl>

  </Box>
        
        
    


  )
}

export default Form