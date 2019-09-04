import React, { Component } from "react";
import "./App.scss";
import Todos from "./components/Todos.js";
import NewTodoForm from "./components/NewTodoForm.js";
class App extends Component {
  state = {
    days: [
      {
        newTodo: "",
        todos: [{ title: "x", done: false }]
      },
      {
        newTodo: "",
        todos: [{ title: "y", done: false }]
      },
      {
        newTodo: "",
        todos: [{ title: "z", done: false }]
      },
      {
        newTodo: "",
        todos: [{ title: "p", done: false }]
      },
      {
        newTodo: "",
        todos: [{ title: "r", done: false }]
      },
      {
        newTodo: "",
        todos: [{ title: "s", done: false }]
      },
      {
        newTodo: "",
        todos: [{ title: "t", done: false }]
      }
    ],
    dayindex: 0,
    percent: 0
  };
  calculateProgress = () => {
    let todosNumber = 0,
      todosDone = 0;
    for (let i = 0; i < 7; i++) {
      todosNumber = todosNumber + this.state.days[i].todos.length;
    }
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < this.state.days[i].todos.length; j++) {
        if (this.state.days[i].todos[j].done === true) {
          todosDone++;
        }
      }
    }
    let percent = Number((100 * (todosDone / todosNumber)).toFixed(2));
    this.setState({ percent: percent });
  };
  newTodoChanged = e => {
    const days = [...this.state.days];
    days[this.state.dayindex] = {
      ...days[this.state.dayindex],
      newTodo: e.target.value
    };
    this.setState({
      days
    });
    this.calculateProgress();
  };
  setDayIndex = e => {
    this.setState({ dayindex: e });
  };
  formSubmitted = e => {
    e.preventDefault();
    const days = [...this.state.days];
    days[this.state.dayindex] = {
      newTodo: "",
      todos: [
        ...days[this.state.dayindex].todos,
        {
          title: this.state.days[this.state.dayindex].newTodo,
          done: false
        }
      ]
    };
    this.setState({
      days
    });
    let todosNumber = 0,
      todosDone = 0;
    for (let i = 0; i < 7; i++) {
      todosNumber = todosNumber + this.state.days[i].todos.length;
    }
    todosNumber = todosNumber + 1;
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < this.state.days[i].todos.length; j++) {
        if (this.state.days[i].todos[j].done === true) {
          todosDone++;
        }
      }
    }
    let percent = Number((100 * (todosDone / todosNumber)).toFixed(2));
    this.setState({ percent: percent });
  };
  removeTodo = index => {
    const days = [...this.state.days];
    days[this.state.dayindex].todos.splice(index, 1);
    this.setState({
      days
    });
    this.calculateProgress();
  };
  toggleTodoDone = (e, index) => {
    const days = [...this.state.days];
    days[this.state.dayindex].todos[index] = {
      ...days[this.state.dayindex].todos[index],
      done: e.target.checked
    };
    this.setState({
      days
    });
    this.calculateProgress();
  };
  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="left-menu col-md-2">
            <i className="fas fa-heart"></i>
            <h4>Home</h4>
            <p>.</p>
            <div className="iconlar">
              <i className="far fa-envelope"></i>
            </div>
            <div className="iconlar">
              <i className="far fa-clock"></i>
            </div>
            <div className="iconlar">
              <i className="far fa-clipboard"></i>
            </div>
            <div className="externalLink">
              <i className="fas fa-external-link-alt"></i>
            </div>
          </div>
          <div className="mainPage col-md-10">
            <div className="header row">
              <div className="search">
                <div className="search1">
                  <i className="fas fa-search"></i>
                </div>{" "}
                <div className="search2">
                  <p>Search</p>
                </div>
              </div>
              <p>Boniface Esanji</p>
            </div>
            <div className="whatisSmart row">
              <div className="context col-md-8">
                <h3>What is SMART Planning?</h3>
                <p>
                  Business goals should always be Specific, Measurable and
                  Achievable.
                </p>
                <a href="#">
                  learn more<i className="fas fa-chevron-right"></i>
                </a>
              </div>
            </div>
            <div className="weekArea row mt-4">
              <div className="week">
                <p>5-11 August</p>
              </div>
              <div className="weekSection col-md-8">
                <div className="dayNames d-flex justify-content-between">
                  <div className="day" onClick={() => this.setDayIndex(0)}>
                    Mo
                    <br />5
                  </div>
                  <div className="day" onClick={() => this.setDayIndex(1)}>
                    Tu
                    <br />6
                    <br />
                  </div>
                  <div className="day" onClick={() => this.setDayIndex(2)}>
                    We
                    <br />7
                  </div>
                  <div className="day" onClick={() => this.setDayIndex(3)}>
                    Th
                    <br />8
                  </div>
                  <div className="day" onClick={() => this.setDayIndex(4)}>
                    Fr
                    <br />9
                  </div>
                  <div className="day" onClick={() => this.setDayIndex(5)}>
                    Sa
                    <br />
                    10
                  </div>
                  <div className="day" onClick={() => this.setDayIndex(6)}>
                    Su
                    <br />
                    11
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom row mt-4">
              <div className="col-md-3 goals">
                <NewTodoForm
                  newTodo={this.state.days[this.state.dayindex].newTodo}
                  formSubmitted={this.formSubmitted}
                  newTodoChanged={this.newTodoChanged}
                />
                <Todos
                  days={this.state.days}
                  dayindex={this.state.dayindex}
                  removeTodo={this.removeTodo}
                  toggleTodoDone={this.toggleTodoDone}
                />
              </div>
              <div className="smartprogress col-md-4">
                <h6>SMART progress</h6>
                <br />
                <p>{this.state.percent} %</p>
              </div>
              <div className="welcomeToSmart col-md-4">
                <h6>Welcome to SMART</h6>
                <p>
                  Goal setting and goal management software for high achievers.
                </p>
                <button>Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
