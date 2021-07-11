import React, { Children, useState } from 'react'


interface Props{
    children: (count:number, setCount:) => JSX.Element | null
}


const Counter: React.FC<Props> = ({ children }) => {
    const [count, setCount] = useState(0);
        return <div>{xhildren(count,setCount)}</div>;
}


export default Counter<div>
