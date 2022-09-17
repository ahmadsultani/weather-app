import { useState, useEffect } from "react";

import Weather from "./components/Weather";
import Form from "./components/Form";
import { API_KEY } from "./apikey";

import { Box, Text, VStack } from "@chakra-ui/react";

function App() {
  const [city, setCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    if (city.length !== 0) {
      setIsLoading(true)
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setError(null);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setCity('');
        setIsLoading(false);
      })
    }
  }, [city, isLoading, data]);

  return (
    <VStack w={'full'} spacing={5}>
      <Text 
        bg={"#e58429"}
        color={"whiteAlpha.900"}
        fontSize={"2xl"}
        p={2}
        fontWeight={"bold"}
        letterSpacing={1.5}
        w={{ base: "90%", sm: "75%", md: "45%", xl: "35%" }}
        alignItems={"center"}
        justifyContent={"center"}
        textAlign={"center"}
        borderRadius={8}
      >
        Weather Forecast
      </Text>
      <Box
        background={"#3B4B58"}
        p={6}
        color={"#1F2937"}
        borderRadius={16}
        h={350}
        w={{ base: "90%", sm: "75%", md: "45%", xl: "35%" }}
        justifyContent={"center"}
        alignItems={"center"}
        boxShadow={"0px 0px 10px 0px rgba(0,0,0,0.75)"}
      >
        <Form setCity={setCity} setIsLoading={setIsLoading}/>
        <Weather data={data} error={error} isLoading={isLoading}/>
      </Box>
    </VStack>
  );
}

export default App;
