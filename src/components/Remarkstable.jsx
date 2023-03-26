import { Box, Table, TableContainer, Tbody, Td,  Tr,Text, Image} from '@chakra-ui/react'
import React, { useMemo } from 'react'
import Data from "../helpers/remarksdata.json"
import principalsign from "../helpers/principalsign.png"




const Remarkstable = () => {
    const data = useMemo(()=>Data,[]);

  return (
   
    <Box  ml={4} mr={4} >
        <TableContainer  m={2} border={"1px solid black"}  whiteSpace={"normal"}>
            <Table size={'sm'}
             align='center'  
             fontSize={"lg"}
             fontWeight="semibold"
            sx={{
                'Td':{
                    border:"1px solid black",
                    paddingLeft:"0.5rem",
                    height:'auto'
                },
                'Td:nth-child(1)':{
                    background: "#f5f5f5",
                    width:"20%"
                },
                'Td:nth-child(2)':{
                    background: "#f5f5f5",
                    Width:"70%"
                }

            }}
            >
                <Tbody>
                    {data.map((item)=>(
                        <Tr key={item.id}>
                            <Td >{item.title}</Td>
                            <Td h={4} wordWrap={'brea-word'} whiteSpace='normal' >{item.title=="PRINCIPAL"?<Box>
                            <Image
                           height={20}
                           objectFit='cover'
                           ml={4}
                              
                            
                            src={principalsign}  alt="Sign" />
                            <Text pt={2} pl ={2}>{item.description}</Text>

                            </Box>:item.description}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>



    </Box>


)
}


export default Remarkstable;