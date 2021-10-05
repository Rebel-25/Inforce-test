import React, { useState } from "react";
import MyButton from "./Ul/button/MyButton";
import MyInput from "./Ul/input/MyInput";

const Postform = ({ setTogle, create, setVisible, setModalAlert }) => {
  const [post, setPost] = useState({
    name: "",
    count: "",
    imageUrl: "",
    weight: "",
  });
  const addNewPost = (e) => {
    e.preventDefault();
    const createNewPost = {
      ...post,
      id: Date.now(),
    };
    setModalAlert(true);
    setTogle(true);
    return create(createNewPost);
  };

  return (
    <form>
      <MyInput
        value={post.name}
        onChange={(e) => setPost({ ...post, name: e.target.value })}
        placeholder="Name"
        type="text"
      />
      <MyInput
        value={post.count}
        onChange={(e) => setPost({ ...post, count: e.target.value })}
        placeholder="Count"
        type="text"
      />
      <MyInput
        value={post.width}
        onChange={(e) => setPost({ ...post, size: { width: e.target.value } })}
        placeholder="width"
        type="text"
      />
      <MyInput
        value={post.weight}
        onChange={(e) => setPost({ ...post, weight: "" })}
        placeholder=" weight"
        type="text"
      />

      <div style={{ display: "flex", flexDirection: "row" }}>
        <MyButton type="submit" onClick={addNewPost}>
          Create
        </MyButton>
        <MyButton
          onClick={(e) => {
            e.preventDefault();
            setModalAlert(true);
            setTogle(false);
          }}
        >
          Remove
        </MyButton>
        <MyButton
          onClick={(e) => {
            e.preventDefault();
            setVisible(false);
          }}
          id="cancelBtn"
        >
          Close
        </MyButton>
      </div>
    </form>
  );
};

export default Postform;
