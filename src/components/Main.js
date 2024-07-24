import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';

import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
  };

  handleInputChange = (event) => {
    this.setState({
      newTask: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { tasks } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if (tasks.indexOf(newTask) !== -1) return;

    const newTasks = [...tasks, newTask];
    this.setState({
      tasks: [...newTasks],
    });
  };

  handleDelete = (event, index) => {
    const { tasks } = this.state;
    const newTasks = [...tasks];
    newTasks.splice(index, 1);

    this.setState({
      tasks: [...newTasks],
    });
  };

  render() {
    const { newTask, tasks } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>
        <form action="" className="form" onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInputChange}
            type="text"
            value={newTask}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tasks">
          {tasks.map((task, index) => (
            <li key={task}>
              {task}
              <spam>
                <FaEdit
                  onClick={(event) => this.handleEdit(event, index)}
                  className="edit"
                />
                <FaWindowClose
                  onClick={(event) => this.handleDelete(event, index)}
                  className="delete"
                />
              </spam>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Main;
