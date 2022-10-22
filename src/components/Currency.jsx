import { Box, Flex, Text , Heading, Button,} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
import { CloseIcon } from '@chakra-ui/icons';

function Currency() {

    const [data,setData] = useState("")
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)
    const [max, setMax] = useState("")
    const [min, setMin] = useState("")
    const[flag, setFlag] = useState(false)





    // https://api.apilayer.com/currency_data/convert?base=USD&symbols=EUR,GBP,JPY&amount=5&date=2018-01-01
const getData = ()=>{
    setLoading(true)
   
    axios({
        method: 'GET',
        url: 'https://api.apilayer.com/currency_data/live?base=USD&apikey=EP3RUYmSS4r0UD4Gy4GuL6j2SZFUFAjn',
        // EP3RUYmSS4r0UD4Gy4GuL6j2SZFUFAjn
        
        // https://api.apilayer.com/exchangerates_data/convert?&apikey=E7RnFhUjS7YvkrqM3UR31cFFUh2qwAgR&base=USD
      })
    .then((res)=>{
     setData(res.data.quotes)
     setLoading(false)
    })
    .then((err)=>{
    setError(true)
    })

}

const getMax = ()=>{
   
    var keys = Object.keys(data);
    var minV = data[keys[0]]; // ignoring case of empty data for conciseness
    var maxV = data[keys[0]];
    var i;
    
    for (i = 1; i < keys.length; i++) {
        var value = data[keys[i]];
        if (value < minV) minV = value;
        if (value > maxV) maxV = value;
    }
   setMax(maxV)
   setMin(minV)
   setFlag(true)
  }




  useEffect(()=>{
    getData()
  
    },[])

  
 







const data2 = [
    {name: 'China', currency: data.USDCNY},
    {name: 'Canada', currency: data.USDCAD},
    {name: 'Netherlands', currency: data.USDANG},
    {name: 'Russian', currency: data.USDRUB},
    {name: 'South African', currency: data.USDZAR},

  ];





// let arr = Object.values(data);
// let max = Math.max(...arr);
// Math.max.apply( null, data.map(q => q.ordinal) );
// console.log("data max",max)



  return (
    <>
    {/* {loading &&  <Text>Loading....</Text>} */}


    <Heading fontSize={"20px"}  textColor={"brown"} marginBottom={"30px"} >Exchange Rate</Heading>
    <Flex>
      
      {/* <Text>Date: {data.date}</Text>
     <Text>Exchange value: {data.result}</Text>
     <Text>Rate: {info.rate}</Text> */}

     <Box>
 <BarChart width={600} height={600} data={data2}>
 <Bar dataKey="currency" fill="brown" />
 <CartesianGrid stroke="#ccc" />
 <XAxis dataKey="name" />
 <YAxis />
</BarChart>
     </Box>
  
<Box marginLeft={"100px"} textAlign={"left"}>
     <Text fontWeight={"medium"}>Rate of China: ¥{data.USDCNY}</Text>
     <Text fontWeight={"medium"}>Rate of Canada: Can${data.USDCAD}</Text>
     <Text fontWeight={"medium"}>Rate of Netherlands: ANG {data.USDANG}</Text>
     <Text fontWeight={"medium"}>Rate of Russian: 	₽{data.USDRUB}</Text>
     <Text fontWeight={"medium"}>Rate of South African: R{data.USDZAR}</Text>
     <Text fontWeight={"bold"} marginTop={"100px"} textColor={"red"} textDecoration={"underline"}>Importent Updates</Text>
     <Text fontWeight={"medium"} textColor={"teal"}>1$ vs ₹{data.USDINR} </Text>
     <Button onClick={getMax}>
      Show maximum rate and Minimum Rate
     </Button>
     {flag&& 
        <>
        <Text fontWeight={"medium"} textColor={"teal"}>Maximum Rate: {max}</Text>
     <Text fontWeight={"medium"} textColor={"teal"}>Minimum Rate: {min}</Text>
     </>}
</Box>


 </Flex>
    {/* {error &&  <Box textAlign="center" py={10} px={6}>
      <Box display="inline-block">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg={'red.500'}
          rounded={'50px'}
          w={'55px'}
          h={'55px'}
          textAlign="center">
          <CloseIcon boxSize={'20px'} color={'white'} />
        </Flex>
      </Box>
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Error....
      </Heading>
      <Text color={'gray.500'}>
        Found a specific error, will be fixed automatically.
      </Text>
    </Box>} */}
    </>
  )
}

export default Currency


// USDAED
// : 
// 3.67304
// USDAFN
// : 
// 87.398364
// USDALL
// : 
// 120.158629
// USDAMD
// : 
// 405.483546
// USDANG
// : 
// 1.808776









