import React from 'react';
import TodoListITems from './TodoListItems';

interface ListItemProps {
    todos: Array<ListProps>;
    toggleTodo: (selectedTodo:ListProps) => void;
}

const ListItem:React.FC<ListItemProps> = ({todos ,toggleTodo}) => {
    return(
        <ul>
            {todos.map(todo => {
                return (
                    <TodoListITems key={todo.text} prop={todo} toggleTodo={toggleTodo}/>
                )
            })}
        </ul>
    )
}
export default ListItem