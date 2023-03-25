import { Box, Image, Table, TableContainer, Tbody,  Td,  Tr } from '@chakra-ui/react'

import React from 'react'
import student_image from "../helpers/student_image.jpg"


const Studentdetails = () => {
  return (
    <Box ml={4} mr={4}>
    <TableContainer  m={2} border={"1px solid black"}  whiteSpace={"normal"} >
        <Table  
        align='center'
        
        size={'sm'}  
        fontSize={"lg"}
        fontWeight="semibold"
        sx={{'Td':{
            border:"1px solid black",
            paddingLeft:"0.5rem"
            
            
            },
            'Tr Td:nth-child(1)':{
            width:"15%",
            
            },
            'Tr Td:nth-child(2)':{
            width:"30%"
           },
            'Tr Td:nth-child(3)':{
            width:"15%"
           },
            'Tr Td:nth-child(4)':{
            width:"30%"
           },
           
           'Tr Td:nth-child(5)':{
            width:"8%"
           }
       
        }}
        >
            <Tbody border={"1px solid black"}
            
            >
                <Tr >
                    <Td >STUDENT'S NAME</Td>
                    <Td>AMISHA PATEL</Td>
                    <Td>ERP CODE</Td>
                    <Td>20220001384_K12</Td>
                    <Td rowSpan={4}><Image  src={student_image} alt='StudentImg'
                     borderRadius='half' 
                     boxSize={'150px'}
                     
                     /></Td>
                    
                </Tr>
                <Tr >
                    <Td >MOTHER'S NAME</Td>
                    <Td>VISHANK TRIPATHI</Td>
                    <Td>GRADE / DIV.</Td>
                    <Td> GRADE 4 SEC B</Td>
                </Tr>    
                <Tr >
                    <Td>FATHER'S NAME</Td>
                    <Td>AJAY KUMAR TRIPATHI</Td>
                    <Td>DATE OF BIRTH</Td>
                    <Td>2022-12-04</Td>
                </Tr>
                <Tr>
                    <Td>ATTENDANCE</Td>
                    <Td>133/156</Td>
                    <Td>%ATTENDANCE</Td>
                    <Td>80.12%</Td>
                </Tr>
                
            </Tbody>
        </Table>
    </TableContainer>
    </Box>
  )
}

export default Studentdetails