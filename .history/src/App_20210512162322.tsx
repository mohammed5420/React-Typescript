import React, { useState, useRef } from "react";
import Header from './Header'


const App:React.FC  = () => {


  return (
    <div>
      <Header buttonText='press this button' i={10}  ok={true} person={{lastName: 'altyeb', firstName:'abdulrhman'}} />
    </div>
  )
}

export default App;
