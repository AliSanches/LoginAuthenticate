import {
  Box,
  FormLabel,
  Input,
  Flex,
  Button,
  FormControl,
} from "@chakra-ui/react";

import { useState } from "react";

import { GiConfirmed } from "react-icons/gi";
import { FaDeleteLeft } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../redux/user/UserThunk";
import { AppDispatch, RootState } from "../../redux/user/store";
import { notify } from "../../components/notify";

export default function CreateUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector((state: RootState) => state.users.status)

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleCreateUser = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(createUser({ name, email, password }));
  
    if (status === "succeeded") {
      notify("Sucesso", "success");
      navigate("/");
    }
    else {
      notify("Falha", "error");
    }
  };


  return (
    <form onSubmit={handleCreateUser}>
      <FormControl
        w={{ base: "90%", sm: "80%", md: "500px" }}
        h={700}
        display={"flex"}
        flexDirection={"column"}
        bg={"transparent"}
        rounded={"md"}
        boxShadow="dark-lg"
        onSubmit={handleCreateUser}
      >
        <Box
          w={"100%"}
          h={200}
          className="imgHeaderLogin"
          roundedTop="md"
        ></Box>
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
          <Input
            size={"sm"}
            rounded={"md"}
            mb={5}
            placeholder="seu nome"
            onChange={(e) => setName(e.target.value)}
          ></Input>

          <FormLabel>E-mail</FormLabel>
          <Input
            size={"sm"}
            rounded={"md"}
            mb={5}
            placeholder="exemplo@gmail.com.br"
            onChange={(e) => setEmail(e.target.value)}
          ></Input>

          <FormLabel color={"white"}>Senha</FormLabel>
          <Input
            type="password"
            size={"sm"}
            rounded={"md"}
            mb={10}
            placeholder="senha"
            onChange={(e) => setPassword(e.target.value)}
          ></Input>

          <Button
            rightIcon={<GiConfirmed />}
            colorScheme="blue"
            variant="solid"
            mb={10}
            type="submit"
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
    </form>
  );
}
