import { VStack, HStack, Text, Skeleton } from "@chakra-ui/react";
import _ from "lodash";

function Weather({ data, error, isLoading }: any) {
  const name = _.get(data, "name");
  const country = _.get(data, "sys.country");
  const temp = _.get(data, "main.temp");
  const humidity = _.get(data, "main.humidity");
  const description = _.get(data, "weather[0].description");

  return (
    <VStack id="Weather" pt={8} spacing={6} w={'full'} alignItems={"center"} letterSpacing={1} fontSize={"sm"}>
      {
        isLoading &&
        [...Array(4)].map((e, index) => (
          <HStack key={index} bg={"whiteAlpha.900"} w={'full'} h={10} alignItems={"center"} borderRadius={8}>
            <VStack
              bg="#e58429"
              h={"full"}
              justify={"center"}
              alignItems={"baseline"}
              fontWeight={600}
              textAlign={"left"}
              borderRadius={8}
              borderTopRightRadius={0}
              borderBottomRightRadius={0}
              w={{base: "35%", lg: "25%"}}
              p={2}
            >
              <Skeleton 
              w="full" 
              h='full'
              borderRadius={8}
            />
            </VStack>
            <Skeleton w={'70%'} h={'60%'} borderRadius={8} />
          </HStack>
      ))}
      {
        (error || data.cod === "404") &&
        [
          {title: "Location", value: "Not found"}, 
          {title: "Temperature", value: "Not found"},
          {title: "Humidity", value: "Not found"},
          {title: "Description", value: "Not found"}
        ].map(({title, value}) => (
          <HStack bg={"whiteAlpha.900"} w={'full'} h={10} alignItems={"center"} borderRadius={8}>
             <VStack
              bg="#e58429"
              color={"whiteAlpha.900"}
              h={"full"}
              justify={"center"}
              alignItems={"baseline"}
              fontWeight={600}
              textAlign={"left"}
              borderRadius={8}
              borderTopRightRadius={0}
              borderBottomRightRadius={0}
              w={{base: "35%", lg: "25%"}}
            >
              <Text p={2} fontSize="xs">
                {title}
              </Text>
            </VStack>
            <Text p={2} fontSize="sm">
              {value}
            </Text>
          </HStack>
      ))}
      {
        data.cod !== "404" && isLoading === false && name && country &&
        [ 
          {title: "Location", value: name+ ", " + country}, 
          {title: "Temperature", value: temp + "°C"}, 
          {title: "Humidity", value: humidity + "%"}, 
          {title: "Description", value: description.charAt(0).toUpperCase() + description.slice(1)}
        ].map(({title, value}, index) => (
          <HStack key={index} bg={"whiteAlpha.900"} w={'full'} h={10} alignItems={"center"} borderRadius={8}>
             <VStack
              bg="#e58429"
              h={"full"}
              color={"whiteAlpha.900"}
              justify={"center"}
              alignItems={"baseline"}
              fontWeight={600}
              textAlign={"left"}
              borderRadius={8}
              borderTopRightRadius={0}
              borderBottomRightRadius={0}
              w={{base: "35%", lg: "25%"}}
            >
              <Text p={2} fontSize="xs" >
                {title}
              </Text>
            </VStack>
            <Text p={2} fontSize="sm">
              {value}
            </Text>
          </HStack>
        ))
      }
    </VStack>
  );
}

export default Weather;