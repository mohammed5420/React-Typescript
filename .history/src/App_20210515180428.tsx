import React, { useState, useRef } from "react";
import ListItem from "./ListItem";

const ListItems: Array<ListProps> = [
  {text:'click me to shade', complete:true},
  {text:'dont\'t click me' ,complete:false},
]

const App: React.FC = () => {

  const [todos, setTodos] = useState(intialItems);


  return (
    <>
      {/* <ListItem /> */}
    </>
  )
}

export default App;
