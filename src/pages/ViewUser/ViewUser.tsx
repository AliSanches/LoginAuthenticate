import { Button, Flex, Text } from "@chakra-ui/react";

import { CgLogOff } from "react-icons/cg";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "../../redux/user/store";
import { logout } from "../../redux/user/sliceUser";
import { RootState } from "../../redux/user/store";
import { welcomeUser } from "../../redux/user/UserThunk";
import { useEffect } from "react";

export default function ViewUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const user = useSelector((state: RootState) => state.login.userLogin);
  const userWelcome = useSelector(
    (state: RootState) => state.welcome.userWelcome
  );

  // const token = user?.token;
  const id = user?.mail.id;
  const data = userWelcome?.mail;

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  useEffect(() => {
    dispatch(welcomeUser(id));
  }, []);

  return (
    <Flex
      w={{ base: "90%", sm: "80%", md: "700px" }}
      h={700}
      flexDirection={"column"}
      bg={"transparent"}
      rounded={"md"}
      boxShadow="dark-lg"
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
          color={"red"}
          p={0}
          rounded={"50%"}
          fontSize={28}
          mt={2}
          mr={2}
          onClick={handleLogout}
        >
          <CgLogOff />
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
        gap={10}
      >
        <h1 style={{ fontSize: "32px" }}>
          Bem vindo(a): <Text as="b">{data.name}</Text>
        </h1>

        <p>
          <span>
            Seu email: <Text color="red">{data.email}</Text>
          </span>
        </p>
      </Flex>
    </Flex>
  );
}
