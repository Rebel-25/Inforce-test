/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchTodo } from "../Api/productTodo";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import MyButton from "../components/Ul/button/MyButton";
import MyModal from "../components/Ul/modal/MyModal";
import { addTodo, removeTodo } from "../features/productSlise";

const Post = () => {
  const [modal, setModal] = useState(false);
  const [modalAlert, setModalAlert] = useState(null);
  const [newPost, setNewPost] = useState(false);
  const [togle, setTogle] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodo());
  }, []);

  return (
    <div className="Post">
      <MyModal title="Create Product" visible={modal} setVisible={setModal}>
        <PostForm
          setTogle={setTogle}
          create={setNewPost}
          setVisible={setModal}
          setModalAlert={setModalAlert}
        />
      </MyModal>
      <PostList />
      <MyButton onClick={() => setModal(true)}>Create Product</MyButton>
      <MyModal
        title="Are You Sure You Want to Continue?"
        id="MyModalCheangStyle"
        visible={modalAlert}
        setVisible={setModalAlert}
      >
        <strong className="modalContainerTitle"></strong>
        <div>
          <MyButton
            onClick={() => {
              setModalAlert(false);
              if (togle) {
                return dispatch(addTodo(newPost));
              }
              dispatch(removeTodo());
            }}
          >
            Yes
          </MyButton>
          <MyButton id="cancelBtn" onClick={() => setModalAlert(false)}>
            No
          </MyButton>
        </div>
      </MyModal>
    </div>
  );
};

export default Post;
