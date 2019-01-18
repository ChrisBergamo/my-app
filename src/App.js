import React, { Component } from "react";
import { Button } from "reactstrap";
import "./App.css";
import { Navbar, colors, button, grid, FormGroup, badge } from "reactstrap";
let date = new Date();
let strang = "        ";

export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      list: []
    };
  }

  changeUserInput(input) {
    this.setState({
      userInput: input
    });
  }

  addToList(input) {
    let listArray = this.state.list;
    listArray.push(input);

    this.setState({
      list: listArray
    });
  }

  render() {
    return (
      <div className="to-do-list-main">
        <nav class="navbar navbar-dark bg-dark">
          <h5 class="text-light">To-Do List</h5>
        </nav>
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder=""
            aria-label=""
            aria-describedby="basic-addon1"
            onChange={e => this.changeUserInput(e.target.value)}
            value={this.state.userinput}
          />
          <div class="input-group-append">
            <button
              class="btn btn-success"
              type="button"
              onClick={() => this.addToList(this.state.userInput)}
            >
              submit
            </button>
          </div>
        </div>
        <ul>
          {this.state.list.map(val => (
            <li text-secondary>{val + "\xa0\xa0\xa0\xa0\xa0" + date}</li>
          ))}
        </ul>
      </div>
    );
  }
}
