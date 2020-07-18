import React from 'react';

import './App.css';


import  TodoApp from './components/TodoApp/TodoApp';
import Navbar from './components/TodoApp/Navbar'

function App() {
  return (
    <div >
<Navbar/>
<TodoApp/>
    </div>
  );
}

export default App;
