import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { authReducer, loginAction } from "../../redux-store/slice/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux-store/hook";

interface FormProps {
  SubmitForm: React.FormEventHandler<HTMLFormElement>;
}

const FlexController = () => {
  return (
    <Stack
      direction={{ base: "column", sm: "row" }}
      align={"center"}
      justify={"space-between"}
    >
      <Checkbox>Remember me</Checkbox>
      <Link color={"blue.400"}>Forgot password?</Link>
    </Stack>
  );
};

const FormLogin = ({ SubmitForm }: FormProps) => {
  const { username, password } = useAppSelector(authReducer);
  const dispatch = useAppDispatch();

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.100", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} width={"100%"}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>REACT PROJECT SANBOX</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form onSubmit={SubmitForm}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Username</FormLabel>
                <Input
                  value={username}
                  onChange={(ev) =>
                    dispatch(loginAction({ username: ev.target.value }))
                  }
                  type="text"
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  value={password}
                  onChange={(ev) =>
                    dispatch(loginAction({ password: ev.target.value }))
                  }
                  type="password"
                />
              </FormControl>

              <Stack spacing={10}>
                <FlexController />
                <Button
                  type="submit"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default FormLogin;
