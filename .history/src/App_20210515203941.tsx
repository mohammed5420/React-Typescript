import React, { useState, useRef } from "react";
import ListItem from "./ListItem";

const intialItems: Array<ListProps> = [
  {text:'click me to shade', complete:true},
  {text:'dont\'t click me' ,complete:flase},
]

const App: React.FC = () => {

  const [todos, setTodos] = useState(intialItems);
  
  const toggleTodo = (selectedTodo:ListProps) => {
    const newTodo = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      else {
        return todo
      }
    });
    setTodos(newTodo);
  }

  return (
    <>
      <ListItem todos={todos} toggleTodo={toggleTodo}/>
    </>
  )
}

export default App;
