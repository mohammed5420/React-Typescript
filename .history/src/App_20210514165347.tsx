import React, { useState, useRef } from "react";

interface Props <T>{
  id: string,
  name: string,
  age:T
  }


const App: React.FC<Props<number>> = () => {
  
  const obj = (obj:{firstName:string,lastName:string}) => {
    return {
      ...obj,
      fullName:obj.firstName +' ' + obj.lastName,
    }
  }
  const u1 = obj({ firstName: 'abdo', lastName: 'alboshra' })
  console.log(u1)







  return (
    <div>
      <h1>This is header</h1>
    </div>
  )
}

export default App;
