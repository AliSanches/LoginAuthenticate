import { FormLabel, Input, Flex, Button, FormControl } from "@chakra-ui/react";

import { useState } from "react";

import { GiConfirmed } from "react-icons/gi";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdExitToApp } from "react-icons/md";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../redux/user/UserThunk";
import { AppDispatch, RootState } from "../../redux/user/store";
import { notify } from "../../components/notify";

export default function CreateUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector((state: RootState) => state.users.status);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();

    if (name === "" || email === "" || password === "") {
      notify("Preencha todos os campos", "error");
    } else {
      dispatch(createUser({ name, email, password }));

      if (status === "succeeded") {
        notify("Sucesso", "success");
        navigate("/");
      } else {
        notify("Falha", "error");
      }
    }
  };

  const handleHome = () => {
    navigate("/");
  };

  const handleClear = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleCreateUser}>
      <FormControl
        w={{ base: "300px", sm: "320px", md: "500px" }}
        h={700}
        display={"flex"}
        flexDirection={"column"}
        bg={"transparent"}
        rounded={"md"}
        boxShadow="dark-lg"
        onSubmit={handleCreateUser}
      >
        <Flex
          w={"100%"}
          h={200}
          className="imgHeaderLogin"
          roundedTop="md"
          justifyContent={"right"}
          color={"white"}
        >
          <Button
            bg={"transparent"}
            color={"white"}
            p={0}
            rounded={"50%"}
            fontSize={28}
            mt={2}
            mr={2}
            colorScheme="orange"
            onClick={handleHome}
          >
            <MdExitToApp />
          </Button>
        </Flex>

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
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Input>

          <FormLabel>E-mail</FormLabel>
          <Input
            size={"sm"}
            rounded={"md"}
            mb={5}
            placeholder="exemplo@gmail.com.br"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Input>

          <FormLabel color={"white"}>Senha</FormLabel>
          <Input
            type="password"
            size={"sm"}
            rounded={"md"}
            mb={10}
            placeholder="senha"
            value={password}
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
            <Button
              p={2}
              w={170}
              h={8}
              leftIcon={<FaDeleteLeft />}
              onClick={handleClear}
            >
              Limpar Campos
            </Button>
          </Flex>
        </Flex>
      </FormControl>
    </form>
  );
}
