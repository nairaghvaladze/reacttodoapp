import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function Toadd({ todo, index, completetodo, remove }) {
  return (
    
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div className="todo-button">
        <button  className="complete" onClick={() => completetodo(index)}>Complete</button>
        <button className="index" onClick={() => remove(index)}>x</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input mt-5 input1"
        placeholder="შეიყვანე ტექსტი"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "სწავლა სიბერემდე",
      isCompleted: false
    },
    {
      text: "პროგრამირების სწავლა კარგი გადაწყვეტილებაა",
      isCompleted: false
    },
    {
      text: "სწავლა, სწავლა და სწავლა",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completetodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const remove = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const sum=todos.reduce((sum, todo) => (todo.isCompleted ? sum  : sum +1 ), 0)

  return (
    <div className="app">
      <div className="todo-list">
      <h1 > To Do App ({sum}) </h1>
        {todos.map((todo, index) => (
          <Toadd
            key={index}
            index={index}
            todo={todo}
            completetodo={completetodo}
            remove={remove}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}



var root=document.getElementById("root")
ReactDOM.createRoot(root).render(<App />);