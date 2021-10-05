import React from "react";

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>{`Product name:${props.post.name}`}</strong>
        <div>{`Product count: ${props.post.count}`}</div>
        <div>{`Product width: ${props.post.imageUrl}`}</div>
      </div>
      <div className="post__btns"></div>
    </div>
  );
};

export default PostItem;
