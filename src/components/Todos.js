import React from 'react'

// functional CompositionEvent, here we will be destructuring to acces the props via app component
const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                   <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">You have no todo's left</p>
    )

    return (
       <div className="todos collection">
        {todoList}
       </div> 
    )
}

export default Todos;