import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'get job done'},
      {id: 2, content: 'play fifa pro mode'}
    ]
  }

  deleteTodo = (id) => {
    // console.log('todo with id', id, 'clicked');
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    console.log(todo);
    
    if(todo.content !== null){
      let todos = [...this.state.todos, todo] //using spread operator to match the new array to the current one element by element
      this.setState({
        todos: todos
      })
    }
  }
  // whats render to the DOM
  render() {
    return (
      <BrowserRouter>
        <div className="todo-app container">
          {/* <Route exact path='/' component={AddTodo} />
          <Route path='/todoslist' component={Todos} /> */}
          <h1 className="center blue-text">My todo's</h1>
          <AddTodo addTodo = {this.addTodo}/>
          <Todos deleteTodo={ this.deleteTodo} todos={ this.state.todos }/> {/* pass array 'todos via props to the Todos component */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
