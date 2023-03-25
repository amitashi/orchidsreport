import { Box,  Heading, Img,Text} from '@chakra-ui/react'
import React from 'react'
import cbseimage from "../helpers/cbseimage.png"
import orchidsimage from "../helpers/orchidsimage.png"


const Headerbox = () => {
  return (

    <Box  my={2} ml={2} mr={2} p={2} mb={0} display="flex" justifyContent={'space-between'} >
        <Img  
        borderRadius='half'
        boxSize='100px' 
        m={2}

        src={cbseimage} alt="CBSE_IMAGE" />
        <Box my={1} display={"flex"} justifyContent="space-between" alignContent={"center"} flexDirection={"column"} textAlign={'center'}>
            <Box my={1}>
                <Heading  as='h3' size={{base:'4xs',xl:'md',lg:'md',md:'sm',sm:'2xs'}} >CBSE AFFILIATION NO: 1130670</Heading>
                <Text  fontSize={{base:'3xs',xl:'md',lg:'md',md:'sm',sm:'2xs'}} >Marve Road, Behind Garden court Restaurent, Orlem, Malad West, Mumbai, Maharastra 400064</Text>
            </Box>

            <Box mt={4}>
                <Heading  as={"h2"} size={{base:'4xs',xl:'lg',lg:'md',md:'sm',sm:'2xs'}} fontWeight="medium"  >ANNUAL REPORT CARD</Heading>
                <Text  fontSize='lg'>ACADEMIC YEAR 2022-23</Text>
            </Box>




        </Box>
        <Img  
        objectFit='cover'  m={2}
        boxSize='100px' 
        src={orchidsimage} alt="CBSE_IMAGE" />
    </Box>
  )
}

export default Headerbox