import React, { useState } from "react";
import TodoList from "./components/todoList/TodoList";
import { addTodo, clearCompletedTodos } from "./redux/index";
import { connect, useSelector } from "react-redux";

function App(props) {
  const [input, setInput] = useState("");
  const todosList = useSelector((state) => state.todos);
  const todosLeft = todosList.filter((x) => x.completed === false);

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      props.addTodo(input);
      setInput("");
    }
  }
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          onKeyPress={handleKeyPress}
          className="new-todo"
          placeholder="What needs to be done?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
        />
      </header>
      <TodoList />
      <footer className="footer">
        <span className="todo-count">
          <strong>{todosLeft.length}</strong> item(s) left
        </span>
        <button
          onClick={() => props.clearCompletedTodos()}
          className="clear-completed"
        >
          Clear completed
        </button>
      </footer>
    </section>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTodo(text)),
  clearCompletedTodos: () => dispatch(clearCompletedTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
