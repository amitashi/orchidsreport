import { Table, TableContainer, Tbody,  Td,  Tr } from '@chakra-ui/react'
import React from 'react'



const Studentdetails = () => {
  return (
    <TableContainer borderBlock={true} m={2} border={"1px solid black"} w ={"80%"} whiteSpace={"normal"} >
        <Table      size={'sm'}   >
            <Tbody>
                <Tr >
                    <Td >STUDENT'S NAME</Td>
                    <Td>AMISHA PATEL</Td>
                    <Td>ERP CODE</Td>
                    <Td>20220001384_K12</Td>
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
  )
}

export default Studentdetails