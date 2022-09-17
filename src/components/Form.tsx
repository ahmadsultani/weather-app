import { useState } from 'react';
import {
  FormControl,
  Input,
  Button,
  VStack,
  HStack,
} from '@chakra-ui/react';

export default function Form({ setCity, setIsLoading } : any) {
  const [cityForm, setCityForm] = useState('');

  function handleSubmit(e: any) {
    e.preventDefault();
    if (cityForm.length !== 0) {
      cityForm.trim()
      setCity(cityForm);
    }
  }

  function handleCityChange(e : any) {
    setCityForm(e.target.value);
  }

  return (
    <FormControl onSubmit={handleSubmit}>
      <HStack spacing={3} > 
        <VStack
          spacing={0}
          alignItems={"left"}
          w={"50%"}
        >
          <Input 
            name='City'
            bg={"whiteAlpha.900"}
            type="text" 
            size={"sm"}
            border={"1px solid #e58429"}
            borderRadius={8} 
            placeholder={"City"}
            onChange={handleCityChange}
            value={cityForm}
          />  
        </VStack>
        <Button
          type="button"
          bg={"#e58429"}
          color={"whiteAlpha.900"}
          _hover={{
            opacity: 0.8,
          }}
          borderRadius={8}
          size={"sm"}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </HStack>
    </FormControl>
  );
};