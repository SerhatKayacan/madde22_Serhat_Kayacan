import React, { Component } from "react";
import TodoItem from "./TodoItem.js";
class Todos extends Component {
  render() {
    return (
      <div>
        <h6 className="mt-3">Goals to achieve</h6>
        <ul className="list-group">
          {this.props.days[this.props.dayindex].todos.map((todo, todoindex) => {
            return (
              <TodoItem
                key={todoindex}
                todoindex={todoindex}
                todo={todo}
                removeTodo={this.props.removeTodo}
                toggleTodoDone={this.props.toggleTodoDone}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Todos;
