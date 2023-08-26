import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import "./App.css";

const App = () => {
  const ESCAPE_KEY = 27; //tecla enter tabela asc
  const ENTER_KEY = 13; //teclas esc tabela asc

  const initialTodos = [
    { id: 1, title: "Estudar React", checked: false },
    { id: 2, title: "Estudar Java", checked: true },
    { id: 3, title: "Estudar Angular", checked: false },
    { id: 4, title: "Estudar Sql", checked: false },
  ];

  const [todos] = useState(initialTodos);
  const [value, setValue] = useState("");

  const erase = () => {
    setValue("");
  };

  const submit = () => {
    console.log("submit", value);
    erase();
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY) {
      submit();
    } else if (event.which === ESCAPE_KEY) {
      erase();
    }
  };

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">ToDo</h1>
      </header>

      <section className="main">
        <input
          className="new-todo"
          placeholder="O que precisa ser feito?"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id.toString()} >
              <span className="todo">{todo.title}</span>
              <button className="remove" type="button">
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
