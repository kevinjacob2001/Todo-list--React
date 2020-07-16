import React from 'react';
import { Component } from 'react';

import './TodoApp.css';

class TodoApp extends Component{
state={
    input:"",
    items:[]
}

handleChange=(e)=>this.setState({input:e.target.value})


storeItems=()=>{
    const {input}=this.state;

}

    render(){

        const {input}=this.state;

        return(
            <div >
<div className="todo-container">
    

        <form className="input-section" 
        onSubmit={this.storeItems}>

        <h1>Todo App</h1>
        <input 
        value={input}
        onChange={this.handleChange}
        type="text" 
        placeholder="Enter items"/>
     
        </form>

        <ul >
        <li>Items <i className="fas fa-trash-alt"></i></li>
        
        </ul>
</div>

</div>

            )
            }
                                }

export default TodoApp;