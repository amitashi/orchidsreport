import { Box, Table,TableCaption, TableContainer, Tbody,Th,Thead,Td,  Tr,Text, Heading} from '@chakra-ui/react'
import React from 'react'

const Gradestable = () => {
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
            'Tr Th:nth-child(1),Tr Td:nth-child(1),Tr Th:nth-child(3),Tr Td:nth-child(3)':{
            width:"40%",
            textAlign:'left'
            
            },
            'Th':{
              background: "#e3f6f5",
              textAlign:'center'
            },
            "Td":{
              textAlign:"center"
            },
            "Tr Th:nth-child(2),Tr Td:nth-child(2),Tr Th:nth-child(4),Tr Td:nth-child(4)":{
              width:"5%"
            }
           
            
          
          }}
          
          
          >
            <TableCaption borderColor={'#080000' } border={"0.5px solid"} mt={0} textAlign={'left'} >Grading System-1: A1:(91%-100%),A2:(81%-90%),B1:(71%-80%),B2:(61%-70%),C1:(51%-60%),C2:(41%-50%),
              D:(34%-40%),C1:(Less than equal to 33%)</TableCaption>
            
            <Thead>
              <Tr>
                <Th colSpan={2}>
                  <Heading fontWeight={"semibold"} as={'h6'} size='md' textAlign={'center'}>SEMESTER1</Heading> 
                </Th>
                <Th colSpan={2}>
                  <Heading fontWeight={"semibold"} as={'h6'} size='md' textAlign={'center'}>SEMESTER2</Heading>
                </Th>
                <Th>
                  <Heading fontWeight={"semibold"} as={'h6'} size='md' textAlign={'center'}>OVERALL</Heading>
                </Th>
              </Tr>
            
              <Tr>
                
                <Th>PERSONALITY TRAIT AND SELF DISCIPLINE</Th>
                <Th>GRADE</Th>
                <Th>PERSONALITY TRAIT AND SELF DISCIPLINE</Th>
                <Th>GRADE</Th>
                <Th>ANNUAL SCORE / GRADE</Th>
                
              </Tr>
             
            </Thead>
            <Tbody >
              <Tr  >
                <Td><Text>Attitute and Respect Towards Nation, Society, School, Parents, Teachers and Mates.</Text></Td>
                <Td>A1</Td>
                <Td><Text>Attitute and Respect Towards Nation, Society, School, Parents, Teachers and Mates.</Text></Td>
                <Td>A1</Td>
                <Td>A1</Td>
                
               
                
              </Tr>
              <Tr>
                <Td>Regularity, Punctuality, Sincerity, Caring, Ethical, Conduct, and Behaviour</Td>
                <Td>A1</Td>
                <Td>Regularity, Punctuality, Sincerity, Caring, Ethical, Conduct, and Behaviour</Td>
                <Td>A1</Td>
                <Td>A1</Td>
                
              </Tr>
              <Tr  >
                <Td>Principled, Open-minded, Conscientious, and Self Managed-Emotionally and Mentally.</Td>
                <Td>A1</Td>
                <Td>Principled, Open-minded, Conscientious, and Self Managed-Emotionally and Mentally.</Td>
                <Td>A1</Td>
                <Td>A1</Td>
                
              </Tr>
              <Tr>
                <Td>Leadership, Team-work, Communication, Co-ordination, and Collaboration.</Td>
                <Td>B1</Td>
                <Td>Leadership, Team-work, Communication, Co-ordination, and Collaboration.</Td>
                <Td>B1</Td>
                <Td>B1</Td>
                
              </Tr>
              <Tr>
                <Td>Risk Taking, Problem-Solving, Creative Thinking, Critical Thinking, and Design Thinking</Td>
                <Td>B1</Td>
                <Td>Risk Taking, Problem-Solving, Creative Thinking, Critical Thinking, and Design Thinking</Td>
                <Td>B1</Td>
                <Td>B1</Td>
                
              </Tr>
             

            </Tbody>
          </Table>
        </TableContainer>
    </Box>
  )
}

export default Gradestable