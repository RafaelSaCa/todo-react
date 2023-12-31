import React, { useState } from "react";


import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";


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
  };

  const onToggle = (todo) => {
    //RISCAR CHECAR A TAREFA
    setTodos(
      todos.map((obj) =>
        obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj
      )
    );
  };

  const onRemove = (todo) => {
    setTodos(todos.filter((obj) => obj.id !== todo.id));
  };

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">ToDo</h1>
      </header>
      <section className="main">
        <NewTodo onNewTodo={onNewTodo} />
        <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
      </section>
    </section>
  );
};
export default App;
