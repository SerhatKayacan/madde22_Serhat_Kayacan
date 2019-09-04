import React from "react";
const TodoItem = props => {
  const { todo, todoindex } = props;
  return (
    <div>
      <li className="list-group-item">
        <input
          type="checkbox"
          onChange={event => props.toggleTodoDone(event, todoindex)}
          checked={todo.done}
        />
        <span className={todo.done ? "done" : ""}>{todo.title}</span>
        <i
          onClick={() => props.removeTodo(todoindex)}
          className="fas fa-times"
        ></i>
      </li>
    </div>
  );
};
export default TodoItem;
