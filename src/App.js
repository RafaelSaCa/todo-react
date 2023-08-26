import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

import NewTodo from "./components/NewTodo";
import "./App.css";


const App = () => {
  const [todos, setTodos] = useState([]);
 
  const onNewTodo = (value) => {
    setTodos([
      ...todos, //array com os elementos anteriores
      {
        //novo elemento do array
        id: new Date().getTime(), //função para gerar um "id" com base no tempo
        title: value,
        checked: false,
      },
    ]);
  }

  const onToggle = (todo) => {
    //RISCAR CHECAR A TAREFA
    setTodos(
      todos.map((obj) =>
      (obj.id === todo.id ? {...obj, checked: !todo.checked } : obj))
    );
  };

 const onRemove = (todo) => {
  setTodos(todos.filter((obj) => obj.id !== todo.id));
 }

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">ToDo</h1>
      </header>

      <section className="main">
        <NewTodo onNewTodo={ onNewTodo } />
        
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id.toString()}>
              <span
                className={["todo",todo.checked ? 
                "checked" : ""].join(" ")}
                onClick={() => onToggle(todo)}
                onKeyPress={() => onToggle(todo)}
                role="button"
                tabIndex={0}
              >
                {todo.title}
              </span>
              <button className="remove" type="button"
                onClick={()=> onRemove(todo)}
              >
                <MdDelete size={28} />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};
export default App;
