import { addManyTodo } from "../features/productSlise";

export const fetchTodo = () => {
  const url = "http://localhost:3000/products";
  return (dispatsh) => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => dispatsh(addManyTodo(json)))
      .catch((error) => console.error(error));
  };
};
