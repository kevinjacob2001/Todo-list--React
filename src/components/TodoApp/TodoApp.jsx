import React from 'react';
import { Component } from 'react';

import './TodoApp.css';

class TodoApp extends Component{
    render(){
        return(
            <div >
<div className="todo-container">
    

        <form className="input-section" onSubmit>
        <h1>Todo App</h1>
        <input type="text" placeholder="Enter items"/>
     
        </form>

        <ul>
        <li>Items</li>
        <li>Items</li>
        </ul>
</div>

</div>

            )
            }
                                }

export default TodoApp;