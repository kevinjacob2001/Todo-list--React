import React from 'react';
import { Component } from 'react';

import './TodoApp.css';

class TodoApp extends Component{
state={
    input:"",
    items:[]
}

handleChange=(e)=>this.setState({input:e.target.value})


storeItems=(e)=>{
    e.preventDefault();
    const {input}=this.state;
    const allItems=this.state.items;
  allItems.push(input);
  this.setState({items:allItems})
  this.setState({input:""})
}

deleteItem=(index)=>{
const allItems =this.state.items;
allItems.splice(index,1)
this.setState({items:allItems})
}


    render(){


        const {input,items}=this.state;

        return(
            <div >
<div className="todo-container">
    

        <form className="input-section" 
        onSubmit={this.storeItems}>

        <h1>To do App</h1>
        <input 
        value={input}
        onChange={this.handleChange}
        type="text" 
        placeholder="Enter items"/>
     
        </form>

        <ul >
     {items.map((data,index)=>(
 <li key={index}>{data}<i className="fas fa-trash-alt" onClick={()=>this.deleteItem(index)}></i></li>
      ))} 
        
        </ul>
</div>

</div>

            )
            }
                                }

export default TodoApp;
