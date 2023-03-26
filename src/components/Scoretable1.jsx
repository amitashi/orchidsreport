import { Box, Table,TableCaption, TableContainer, Tbody,Th,Thead,Td,  Tr,Text, Heading} from '@chakra-ui/react'
import React from 'react'

const Scoretable1 = () => {
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
            padding:"0.5rem"}
            ,
            'Tr Th:nth-child(1),Tr Td:nth-child(1)':{
            width:"20%",
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
                <Th colSpan={1}>
                  <Heading fontWeight={"semibold"} as={'h6'} size='md' textAlign={'center'}>SCHOLISTIC</Heading> 
                </Th>
                <Th colSpan={7}>
                  <Heading fontWeight={"semibold"}  as={'h6'} size='md' textAlign={'center'}>SEMESTER1</Heading>
                </Th>
                <Th colSpan={7}>
                  <Heading fontWeight={"semibold"}  as={'h6'} size='md' textAlign={'center'}>SEMESTER2</Heading>
                </Th>
                <Th colSpan={3}>
                  <Heading fontWeight={"semibold"} as={'h6'} size='md' textAlign={'center'}>ANNUAL SCORE/GRADE</Heading>
                </Th>
              </Tr>
            
              <Tr>
                <Th>Subject</Th>
                <Th>FA 1</Th>
                <Th>FA 2</Th>
                <Th>FA 3</Th>
                <Th>SA 1</Th>
                <Th>Total</Th>
                <Th rowSpan={2}>Grade</Th>
                <Th rowSpan={2}>OSR</Th>
                
                <Th>FA 1</Th>
                <Th>FA 2</Th>
                <Th>FA 3</Th>
                <Th>SA 1</Th>
                <Th>Total</Th>
                <Th rowSpan={2}>Grade</Th>
                <Th rowSpan={2}>OSR</Th>
                <Th rowSpan={2}>(S1+S2)/2</Th>
                <Th rowSpan={2}>Grade</Th>
                <Th rowSpan={2}>OSR</Th>
              </Tr>
             
              <Tr>
                <Th>WEIGHTAGE%</Th>
                <Th>5</Th>
                <Th>5</Th>
                <Th>30</Th>
                <Th>60</Th>
                <Th>100</Th>

                <Th>5</Th>
                <Th>5</Th>
                <Th>30</Th>
                <Th>60</Th>
                <Th>100</Th>
                
              </Tr>

            </Thead>
            <Tbody >
              <Tr  >
                
                
              </Tr>
             

            </Tbody>
          </Table>
        </TableContainer>
    </Box>
  )
}

export default Scoretable1