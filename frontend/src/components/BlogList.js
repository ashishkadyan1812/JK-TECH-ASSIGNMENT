import React from "react";
import "./PostList.css";
import PostInfo from "./PostInfo";

const PostList = ({ posts }) => {
      return (
        <div className="post-list">
          {posts.map((post, index) => (
            <PostInfo
              key={index}
              title={post.title}
              content={post.content}
              tags={post.tags}
              author={post.author}
              onClick={() => alert(`You clicked on ${post.title}`)}
            />
          ))}
        </div>
      );
};

export default PostList;