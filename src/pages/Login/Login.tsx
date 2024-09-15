import { Box, FormLabel, Input, Flex, Button, Text } from "@chakra-ui/react";

import { FaUserPlus } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate("/register");
  };

  return (
    <Flex
      w={{ base: "90%", sm: "80%", md: "500px" }}
      h={700}
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
          rightIcon={<FaArrowRight />}
          colorScheme="blue"
          variant="solid"
          mb={10}
        >
          Entrar
        </Button>

        <Flex flexDirection={"column"} textAlign={"left"}>
          <Text>Não possui uma conta?</Text>
          <Button
            p={2}
            w={132}
            h={8}
            leftIcon={<FaUserPlus />}
            onClick={handleCreate}
          >
            Criar Conta
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
