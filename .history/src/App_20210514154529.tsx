import React, { useState, useRef } from "react";


const App: React.FC = () => {
  
  type arr = Array<number>
  type arrN = number[];

  const last = (arr: number[] ) => {
    return arr[arr.lenght - 1];
  }

  return (
    <div>
      <h1>This is header</h1>
    </div>
  )
}

export default App;
