// PostList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { VStack, Button, Box, Heading, Text, grid } from "@chakra-ui/react";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("https://evaluation4backend-production.up.railway.app/posts", {
        withCredentials: true,
      });
      setPosts(response.data.posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      await axios.delete(`https://evaluation4backend-production.up.railway.app/posts/delete/${postId}`, {
        withCredentials: true,
      });
      setPosts(posts.filter((post) => post._id !== postId));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <Box display={"grid"} gridTemplateColumns={"1fr 1fr 1fr"} gap={4}>
      {posts.map((post) => (
        <Box
          border={"1px solid black"}
          p={4}
          key={post._id}
          display={"grid"}
          gridTemplateColumns={"1fr 1fr 1fr"}
        >
          <Heading>{post.title}</Heading>
          <Text>{post.body}</Text>
          <Button onClick={() => handleDeletePost(post._id)}>Delete</Button>
        </Box>
      ))}
    </Box>
  );
};

export default PostList;
