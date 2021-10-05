import React from "react";
import PostItem from "./PostItem";
import { useSelector } from "react-redux";

const PostList = ({ title, removePost }) => {
  const posts = useSelector((state) => state.productsTodo.product);

  if (!posts.length) {
    return (
      <h1 style={{ textAlign: "center", color: "red" }}>
        The list product is empty
      </h1>
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <div>
        {posts.map((post, index) => (
          <div key={post.id}>
            <PostItem remove={removePost} index={index + 1} post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
