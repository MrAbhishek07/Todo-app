import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";
import AddTodo from "./Components/AddTodo";
import TodoProvider from "./TodoProvider";
function App() {
  return (
    <TodoProvider>
      <div className="container" style={{textAlign: "center", backgroundColor:"black"}}>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <Header />
            <div className="addtodo">
              <AddTodo />
            </div>

            <TodoList />
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}
export default App;
