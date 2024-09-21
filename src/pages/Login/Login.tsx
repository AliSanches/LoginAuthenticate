import { Box, FormLabel, Input, Flex, Button, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { FaUserPlus } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";
import { notify } from "../../components/notify";

import { loginUser } from "../../redux/user/UserThunk";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/user/store";

export default function Login() {
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { userLogin, status } = useSelector((state: RootState) => state.login);

  // monitorar os estados userLogin, status
  useEffect(() => {
    if (status === "succeeded" && userLogin) {
      notify("Autenticado", "success");
      navigate("/view");
    }
  }, [userLogin, status, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "" || password === "") {
      notify("Preencha todos os campos", "error");
    } else {
      await dispatch(loginUser({ email, password })).unwrap();
    }
  };

  const handleCreate = () => {
    navigate("/register");
  };

  return (
    <form onSubmit={handleLogin}>
      <Flex
        w={{ base: "300px", sm: "320px", md: "500px" }}
        h={700}
        flexDirection={"column"}
        bg={"transparent"}
        rounded={"md"}
        boxShadow="dark-lg"
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
            rightIcon={<FaArrowRight />}
            colorScheme="blue"
            variant="solid"
            mb={10}
            type="submit"
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
    </form>
  );
}
