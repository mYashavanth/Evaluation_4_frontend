import { Box, Button, Heading, Input } from "@chakra-ui/react";
import React from "react";
import axios from "axios";

export default function Login() {
  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    try {
      const response = await axios.post(
        "https://evaluation4backend-production.up.railway.app/users/login",
        userData,
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Heading>Login</Heading>
        <Box
          display="flex"
          flexDirection="column"
          gap="10px"
          w={"40%"}
          m={"auto"}
        >
          <Input
            type="email"
            name="email"
            value={userData.email}
            placeholder="Email"
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            value={userData.password}
            placeholder="Password"
            onChange={handleChange}
          />
          <Button colorScheme="teal" type="submit">
            Login
          </Button>
        </Box>
      </form>
    </>
  );
}
