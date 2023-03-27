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
              <TableCaption borderColor={'#080000' } border={"0.5px solid"} mt={0} textAlign={'left'} >FA 1- Home Engagement, FA2 - Class Engagement, FA3 - All Assesment tests, SA - Summative Assestment</TableCaption>
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
                <Td>Maths</Td>
                <Td>3</Td>
                <Td>3</Td>
                <Td>6</Td>
                <Td>6</Td>
                <Td>18</Td>
                <Td>E</Td>
                <Td>54</Td>
                <Td>3</Td>
                <Td>3</Td>
                <Td>6</Td>
                <Td>20</Td>
                <Td>32</Td>
                <Td>E</Td>
                <Td>-</Td>
                <Td>25</Td>
                <Td>E</Td>
                <Td>-</Td>
                
              </Tr>

             <Tr  >
                <Td>English</Td>
                <Td>4</Td>
                <Td>4</Td>
                <Td>18</Td>
                <Td>13</Td>
                <Td>39</Td>
                <Td>D</Td>
                <Td>39</Td>
                <Td>4</Td>
                <Td>4</Td>
                <Td>9</Td>
                <Td>23</Td>
                <Td>40</Td>
                <Td>D</Td>
                <Td>-</Td>
                <Td>40</Td>
                <Td>D</Td>
                <Td>-</Td>
                
              </Tr>
              
              <Tr  >
                <Td>Natural Science</Td>
                <Td>3</Td>
                <Td>3</Td>
                <Td>6</Td>
                <Td>9</Td>
                <Td>21</Td>
                <Td>E</Td>
                <Td>57</Td>
                <Td>3</Td>
                <Td>3</Td>
                <Td>3</Td>
                <Td>11</Td>
                <Td>20</Td>
                <Td>E</Td>
                <Td>-</Td>
                <Td>21</Td>
                <Td>E</Td>
                <Td>-</Td>
                
              </Tr>
              <Tr  >
                <Td>IDP</Td>
                <Td>NA</Td>
                <Td>NA</Td>
                <Td>7</Td>
                <Td>6</Td>
                <Td>14</Td>
                <Td>E</Td>
                <Td>53</Td>
                <Td>NA</Td>
                <Td>NA</Td>
                <Td>7</Td>
                <Td>15</Td>
                <Td>24</Td>
                <Td>E</Td>
                <Td>-</Td>
                <Td>19</Td>
                <Td>E</Td>
                <Td>-</Td>
                
              </Tr>
              <Tr  >
                <Td>Hindi (2nd Lang)</Td>
                <Td>NA</Td>
                <Td>NA</Td>
                <Td>6</Td>
                <Td>13</Td>
                <Td>21</Td>
                <Td>E</Td>
                <Td>47</Td>
                <Td>NA</Td>
                <Td>NA</Td>
                <Td>16</Td>
                <Td>10</Td>
                <Td>29</Td>
                <Td>E</Td>
                <Td>-</Td>
                <Td>25</Td>
                <Td>E</Td>
                <Td>-</Td>
                
              </Tr>
              <Tr  >
                <Td>Marathi (3rd Lang)</Td>
                <Td>NA</Td>
                <Td>NA</Td>
                <Td>14</Td>
                <Td>4</Td>
                <Td>20</Td>
                <Td>E</Td>
                <Td>49</Td>
                <Td>NA</Td>
                <Td>NA</Td>
                <Td>8</Td>
                <Td>14</Td>
                <Td>24</Td>
                <Td>E</Td>
                <Td>-</Td>
                <Td>22</Td>
                <Td>E</Td>
                <Td>-</Td>
                
              </Tr>
              <Tr>
                <Td>Total</Td>
                <Td colSpan={5}>130 out of 600 (22.17%)</Td>
                <Td>E</Td>
                <Td>84</Td>
                <Td colSpan={5}>169 out of 600 (28.17%)</Td>
                <Td>E</Td>
                <Td>-</Td>
                <Td>152</Td>
                <Td>E</Td>
                <Td>-</Td>
              </Tr>
              
            </Tbody>
          </Table>
        </TableContainer>
    </Box>
  )
}

export default Scoretable1