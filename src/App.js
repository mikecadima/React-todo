import React, { useState } from "react";
import "./App.css";

function Todo({todo,index,completeTodo,removeTodo}){
  return(
  <div className="todo" style={{textDecoration:todo.onCompleted ? 'line-through':""}}>
    {todo.text}
    <div>
    <button onClick={() => completeTodo(index)}>Complete</button>
    <button onClick={() => removeTodo(index)}>x</button>
  </div>
  </div>

  );
}

function TodoForm({addTodo}){

  const [value,setValue] = useState("")

  function handleSubmit(e) {
    e.preventDefault();

    if(!value) 
    return;

    addTodo(value)

    setValue("")
  }
  return(
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" value={value}
      onChange={e => setValue(e.target.value)}/>
    </form>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Clean floors",
      onCompleted: false
    },
    {
      text:"fix garage",
      onCompleted:false
    }
  ]);

  function addTodo(text){
    const newTodos = [...todos,{text}];
    setTodos(newTodos);
  }

  function completeTodo(index){

    const newTodos = [...todos];

    newTodos[index].onCompleted = true;

    setTodos(newTodos);

  }

  function removeTodo(index) {
    const newTodos = [...todos];

    newTodos.splice(index,1);

    setTodos(newTodos);
  }

  return(
    <div className="app">
      <h1 className="title">To Do List</h1>
    <div class="todo-list">
      {todos.map((todo,index) => (
        <Todo
        key={index}
        index={index}
        todo={todo}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        />
      ))}
    </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  );
}
export default App

