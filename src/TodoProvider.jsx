import { useState, createContext } from "react";
export const context = createContext(null);
const TodoProvider = ({ children }) => {

  const [todos, setTodos] = useState([]);
  const addTodo = (todoValue) => {
    if (todoValue.length === 0) {
      alert("enter todo")
    } else {
      const newTodo = { text: todoValue, completed: false };
      setTodos([newTodo, ...todos]);
    }
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos[id].iscompleted = !newTodos[id].iscompleted;
    setTodos(newTodos);
  };
  const deleteTodo = (id) => {
    const newTodos = todos.filter((_, index) => index !== id);
    setTodos(newTodos);
  };


  return (
    <context.Provider
      value={{
        todos,
        deleteTodo,
        completeTodo,
        addTodo,
      }}
    >
      {children}</context.Provider>
  )
}
export default TodoProvider;