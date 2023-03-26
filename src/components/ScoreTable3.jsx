import { Box, TableCaption, TableContainer,Thead,Tbody,Td,Tr,Table, Heading, Th } from '@chakra-ui/react'
import React from 'react'

const Scoretable3 = () => {

  return (
    <Box
    ml={4} mr={4}
    
    
    >
        <TableContainer m={2} border={"1px solid black"}  whiteSpace={"normal"}>
          <Table
          size={'sm'}
          align='center'  
          alignContent={'center'}
          fontSize={"xs"}
          fontWeight="semibold"
          sx={{'Td,Th':{
            border:"1px solid black",
            paddingLeft:"0.5rem"}
            ,
            'Tr Th:nth-child(1),Tr Td:nth-child(1)':{
            width:"15%",
            textAlign:'left'
            
            },
            'Th':{
              background: "#e3f6f5",
              textAlign:'center'
            },
            "Td":{
              textAlign:"center"
            }
           
            
          
          }}
          
          
          >
            <TableCaption borderColor={'#080000' } border={"0.5px solid"} mt={0} textAlign={'left'} >Grading System-1: A1:(91%-100%),A2:(81%-90%),B1:(71%-80%),B2:(61%-70%),C1:(51%-60%),C2:(41%-50%),
              D:(34%-40%),C1:(Less than equal to 33%)</TableCaption>
            <Thead>
              <Tr>
                <Th><Heading fontWeight={"semibold"} as={'h6'} size='md' textAlign={'center'}>COMPETIVIE EXAM</Heading></Th>
                <Th colSpan={6}><Heading fontWeight={"semibold"} as={'h6'} size='md' textAlign={'center'}>SEMESTER 2</Heading></Th>
              </Tr>
              <Tr>
                
                <Th>Subject</Th>
                <Th>Big Bang Brains</Th>
                <Th>Language Quest</Th>
                <Th>Ramanujan</Th>
                <Th>Total</Th>
                <Th rowSpan={2}>Grade</Th>
                <Th rowSpan={2}>OSR</Th>
              </Tr>
              <Tr>
              <Th>WEIGHTAGE%</Th>
              <Th>30</Th>
              <Th>30</Th>
              <Th>40</Th>
              <Th>100</Th>
              
              </Tr>
            </Thead>
            <Tbody >
              <Tr  >
                <Td>English</Td>
                <Td>24</Td>
                <Td>30</Td>
                <Td>30</Td>
                <Td>74</Td>
                <Td>B1</Td>
                <Td>-</Td>
              </Tr>
              <Tr>
                <Td>Natural Science</Td>
                <Td>24</Td>
                <Td>30</Td>
                <Td>30</Td>
                <Td>74</Td>
                <Td>B1</Td>
                <Td>-</Td>
              </Tr>

            </Tbody>
          </Table>
        </TableContainer>
    </Box>
  )
}

export default Scoretable3