import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import "./App.css";

const App = () => {
  const ESCAPE_KEY = 27; //tecla enter tabela asc
  const ENTER_KEY = 13; //teclas esc tabela asc

  
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  const erase = () => {
    setValue("");
  };

  const submit = () => {
    console.log("submit", value);

    setTodos([
      ...todos,//array com os elementos anteriores
      { //novo elemento do array
        id: new Date().getTime(),//função para gerar um "id" com base no tempo
        title: value, 
        checked: false 
      }
    ]);


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
