import React from "react";
const NewTodoForm = props => {
  return (
    <form onSubmit={props.formSubmitted}>
      <input onChange={props.newTodoChanged} value={props.newTodo} />
      <button type="submit">Add Todo</button>
    </form>
  );
};
export default NewTodoForm;
