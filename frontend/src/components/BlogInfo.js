import React from "react";
import "./PostInfo.css";

const PostInfo = ({ title, content, tags, author }) => {
  return (
    <div className="post-container">
      <h2 className="post-title">{title}</h2>
      <p className="post-content">{content}</p>
      <div className="post-tags">
        {tags.map((tag, index) => (
          <span key={index} className="post-tag">
            #{tag}
          </span>
        ))}
      </div>
      <p className="post-author">By <span className="post-author-name">{author}</span></p>
    </div>
  );
};

export default PostInfo;