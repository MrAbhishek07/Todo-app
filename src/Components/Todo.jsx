import Button from "./Button";
import { useContext } from "react";
import { context } from "../TodoProvider";
export default function Todo({ todo, id }) {
  const { deleteTodo, completeTodo } = useContext(context);
  return (
    <div style={{margin:"10px 600px", backgroundColor:"yellow", width:"250px", textAlign:"center", height:"60px"}}>
    <list
    
      key={id}
    >
      <ul>
        <span onClick={() => completeTodo(id)}>{todo.text}</span>
        <Button style={{margin:"20px 15px", background:"Yellow", color:"red"}}
          onClick={() => {
            deleteTodo(id);
          }}
          className="badge badge-primary"
          value="Delete"
        ></Button>
      
      </ul>
    </list>
    </div>
  );
}
