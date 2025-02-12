import React from "react";
import PostList from "./PostList";
import { useDispatch, useSelector } from "react-redux";
import {fetchPosts} from "./../redux/actions/postAction.js";

const Home = () => {
    const posts = useSelector(state => state.post.posts) ?? [];
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

  return <>
      <h1>Welcome to the Home Page</h1>
      <PostList posts={posts} />
  </>
};

export default Home;
