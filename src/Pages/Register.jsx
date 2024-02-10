import { Box, Button, Heading, Input } from "@chakra-ui/react";
import React from "react";
import axios from "axios";

export default function Register() {
  const [userData, setUserData] = React.useState({
    name: "",
    email: "",
    gender: "",
    password: "",
  });
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit =  async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://evaluation4backend-production.up.railway.app/users/register",
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
        <Heading>Register</Heading>
        <Box
          display="flex"
          flexDirection="column"
          gap="10px"
          w={"40%"}
          m={"auto"}
        >
          <Input
            type="text"
            name="name"
            value={userData.name}
            placeholder="Name"
            onChange={handleChange}
          />
          <Input
            type="email"
            name="email"
            value={userData.email}
            placeholder="Email"
            onChange={handleChange}
          />
          <Input
            type="text"
            name="gender"
            value={userData.gender}
            placeholder="Gender"
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
            Register
          </Button>
        </Box>
      </form>
    </>
  );
}
