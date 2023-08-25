import React, { useState } from "react";

import "./App.css";

const App = () => {

const ESCAPE_KEY = 27;//tecla enter tabela asc
const ENTER_KEY = 13;//teclas esc tabela asc

const [value, setValue] = useState("");

const erase = ()=>{
    setValue('');
}

const submit = () => {
    console.log('submit',value);
    erase();
}

const onChange = (event) => {
    setValue(event.target.value);
}

const onKeyDown = (event) =>{
    if(event.which === ENTER_KEY ){
       submit();

    }else if(event.which ===  ESCAPE_KEY){
        erase();
    }
}



  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">ToDo</h1>
      </header>

      <section className="main">
        <input className="new-todo" placeholder="O que precisa ser feito?"
        value={value} 
        onChange={onChange}
        onKeyDown={onKeyDown} />
      </section>


    </section>
  );
};
export default App;
