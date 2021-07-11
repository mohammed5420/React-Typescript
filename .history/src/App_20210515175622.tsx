import React, { useState, useRef } from "react";
import ListItem from "./ListItem";

interface ListItem {
   text: string, complete: boolean 
}


const App: React.FC<ListItem> = () => {

  const ListItems: Array<ListItem> = [
   {text:'click me to shade', complete:true},
   {text:'dont\'t click me' ,complete:false},
  ]

  return (
    <>
      {ListItem.map(item => {
        return (
          <h1>{item.text}</h1>
          <p>{item.complete}</p>
        )
      }}
    </>
  )
}

export default App;
