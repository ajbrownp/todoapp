import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault() //prevent page to reload on submit 
        this.props.addTodo(this.state);
        this.setState({
            content: '' //reset input value after submit
        })
             
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        )
    }
}

export default AddTodo;