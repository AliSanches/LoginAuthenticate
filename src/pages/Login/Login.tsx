import "./Login.css";
import { Box } from "@chakra-ui/react";
import Label from "../../components/Label";

export default function Login() {
  return (
    <div className="login">
      <Box w={500} h={800} bg={"transparent"} boxShadow='dark-lg'  rounded='md'>
        <Box w={500} h={200} className="imgHeaderLogin" roundedTop='md' >
          <Label/>
        </Box>
      </Box>
    </div>
  );
}
