import React from "react";
import BlogList from "./BlogList";
import { useDispatch, useSelector } from "react-redux";
import {fetchBlogs} from "./../redux/actions/blogAction.js";

const Home = () => {
    const blogs = useSelector(state => state.blog.blogs) ?? [];
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchBlogs());
    }, [dispatch]);

  return <>
      <h1>Welcome to the Home Page</h1>
      <BlogList blogs={blogs} />
  </>
};

export default Home;
