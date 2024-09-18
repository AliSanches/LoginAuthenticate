import { Button, Flex, Text } from "@chakra-ui/react";

import { CgLogOff } from "react-icons/cg";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "../../redux/user/store";
import { logout } from "../../redux/user/sliceUser";
import { RootState } from "../../redux/user/store";
import { welcomeUser } from "../../redux/user/UserThunk";

export default function ViewUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const user = useSelector((state: RootState) => state.login.userLogin);

  const token = user?.token;
  const id = user?.mail.id;

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  // useEffect(() => {
  //   dispatch(welcomeUser(token, id));
  // }, []);

  const handleLog = () => {
    dispatch(welcomeUser(token, id));

    console.log(token);
    console.log(id);
  };

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
          color={"white"}
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
      >
        <h1 style={{ fontSize: "32px" }}>
          Bem vindo(a): <Text as="b"></Text>
        </h1>

        <Button onClick={handleLog}>Log</Button>
      </Flex>
    </Flex>
  );
}
