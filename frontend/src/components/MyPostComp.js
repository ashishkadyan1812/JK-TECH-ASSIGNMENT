import React from "react";
import PostList from "./PostList";
import { useSelector } from "react-redux";

const MyPosts = () => {
      const posts = useSelector(state => state.post.userPosts);
  return <>
      <h1>Welcome to the Home Page</h1>
      <PostList posts={posts} />
  </>
};

export default MyPosts;
