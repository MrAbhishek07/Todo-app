import { useState, useContext } from "react";
import TextField from "./TextField";
import Button from "./Button";
import { context } from "../TodoProvider";

export default function AddTodos() {
  const [todoValue, setVal] = useState("");
  const { addTodo } = useContext(context);
  const onKeyPressHandler = (e) => {
    if (e.charCode === 13) {
      addTodo(todoValue);
    }
  };

  const onChangeHandler = (e) => {
    setVal(e.target.value);
  };
  return (
    <>
      <div
        className="col-md-8 col-sm-8"
        style={{ padding: "20px  20px  10px" }}
      >
        <TextField
          onKeyPress={onKeyPressHandler}
          value={todoValue}
          onChange={onChangeHandler}
          placeholder="Add Your Todo here..."
        />
      </div>
      <div className="col-md-4 col-sm-4">
        <Button
          onClick={() => {
            addTodo(todoValue);
            setVal("");
          }}
          className="btn btn-primary pointer float-right"
          value="Add Todo"
        />
      </div>
    </>
  );
}
