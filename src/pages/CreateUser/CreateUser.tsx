import {
  Box,
  FormLabel,
  Input,
  Flex,
  Button,
  FormControl,
} from "@chakra-ui/react";

import { GiConfirmed } from "react-icons/gi";
import { FaDeleteLeft } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  const navigate = useNavigate();

  const handleCreateUser = () => {
    navigate("/");
  };

  return (
    <FormControl
      w={{ base: "90%", sm: "80%", md: "500px" }}
      h={700}
      display={"flex"}
      flexDirection={"column"}
      bg={"transparent"}
      rounded={"md"}
      boxShadow="dark-lg"
    >
      <Box w={"100%"} h={200} className="imgHeaderLogin" roundedTop="md"></Box>
      <Flex
        w={{ md: "auto" }}
        h={500}
        marginLeft={5}
        marginRight={5}
        color={"white"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <FormLabel>Nome</FormLabel>
        <Input size={"sm"} rounded={"md"} mb={5} placeholder="seu nome"></Input>

        <FormLabel>E-mail</FormLabel>
        <Input
          size={"sm"}
          rounded={"md"}
          mb={5}
          placeholder="exemplo@gmail.com.br"
        ></Input>

        <FormLabel color={"white"}>Senha</FormLabel>
        <Input
          type="password"
          size={"sm"}
          rounded={"md"}
          mb={10}
          placeholder="senha"
        ></Input>

        <Button
          rightIcon={<GiConfirmed />}
          colorScheme="blue"
          variant="solid"
          mb={10}
          onClick={handleCreateUser}
        >
          Cadastrar
        </Button>

        <Flex flexDirection={"column"} textAlign={"left"}>
          <Button p={2} w={170} h={8} leftIcon={<FaDeleteLeft />}>
            Limpar Campos
          </Button>
        </Flex>
      </Flex>
    </FormControl>
  );
}
