import {
  Button,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

import { FaUserEdit } from "react-icons/fa";
import { AiOutlineUserDelete } from "react-icons/ai";
import { CgLogOff } from "react-icons/cg";

import { useNavigate } from "react-router-dom";

export default function ViewUser() {
  const navigate = useNavigate();

  const handleExit = () => {
    navigate("/");
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
          onClick={handleExit}
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
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Usuários</TableCaption>
            <Thead>
              <Tr>
                <Th>Nome</Th>
                <Th>E-mail</Th>
                <Th>Editar</Th>
                <Th>Deletar</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td>
                  <FaUserEdit />
                </Td>
                <Td>
                  <AiOutlineUserDelete />
                </Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td>
                  <FaUserEdit />
                </Td>
                <Td>
                  <AiOutlineUserDelete />
                </Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td>
                  <FaUserEdit />
                </Td>
                <Td>
                  <AiOutlineUserDelete />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Flex>
  );
}
