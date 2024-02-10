import { Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <Box display="flex" justifyContent="space-around" color={"teal"}>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/post">Post</Link>
      </Box>
    </>
  );
}
