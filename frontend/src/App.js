import React from "react";

import Todos from './components/todos/Todos';
import FormAdd from "./components/todos/FormAdd";

const  App = ()=> {
  return (
   
    <div >
      <section className="cardWith">
            <header>
                <h2>ToDo List Project</h2>
            </header>
            <div className="cardStyle">
                <h3>List To Do</h3>
               <Todos/>

            </div>
            <div className="cardStyle">
                <h3>Add Todo</h3>
                <FormAdd/>
            </div>
            
        </section>

    </div>

  );
}

export default App;
