import {  Box, Image, Table, TableContainer, Tbody,  Td,  Tr } from '@chakra-ui/react'

import React from 'react'
import student_image from "../helpers/student_image.jpg"


const Studentdetails = () => {
  return (
    <Box ml={4} mr={4} size={{base:'4xs',xl:'md',lg:'md',md:'xs',sm:'5xs'}}>
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
            background: "#e3f6f5"
            
            },
            'Tr Td:nth-child(2)':{
            width:"30%",
            background: "#bae8e8"
           },
            'Tr Td:nth-child(3)':{
            width:"15%",
            background: "#e3f6f5" 
           },
            'Tr Td:nth-child(4)':{
            width:"30%",
            background: "#bae8e8" 
           },
           
           'Tr Td:nth-child(5)':{
            width:"8%",
            margin:"0px",
            backdropFilter: "blur(10px)",
            background:"#F0F0F0"
            
            
           },
           'Td Image':{
            margin:"0px",
            padding:"0px",
            width:'auto'
           }
       
        }}
        >
            <Tbody border={"1px solid black"}
            
            >
                <Tr >
                    <Td >STUDENT'S NAME</Td>
                    <Td>ANSH KUMAR</Td>
                    <Td>ERP CODE</Td>
                    <Td>20220001384_K12</Td>
                    <Td rowSpan={4}>
                        <Box 
                        textAlign={'center'}
                        >
                        <span size={{base:'4xs',xl:'md',lg:'md',md:'sm',sm:'2xs'}} >Photo</span>
                            <Image  src={student_image} alt='StudentImg'
                               boxSize='100px'
                               objectFit='cover'
                               border={"1px solid black"}
                               borderRadius="0.1rem"
                               p={0}
                               mt={1}
                               
                            />


                        </Box>
                            
                        
                    
                    </Td>
                    
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