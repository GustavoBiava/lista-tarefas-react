import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';

import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
    index: -1,
  };

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (!tasks) return;

    this.setState({ tasks });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state;
    if (tasks === prevState.tasks) return;

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  handleInputChange = (event) => {
    this.setState({
      newTask: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { tasks, index } = this.state;
    let { newTask } = this.state;
    if (!newTask) return;
    newTask = newTask.trim();

    if (tasks.indexOf(newTask) !== -1) return;
    const newTasks = [...tasks];

    if (index === -1) {
      this.setState({
        tasks: [...newTasks, newTask],
        newTask: '',
      });
    } else {
      newTasks[index] = newTask;
      this.setState({
        tasks: [...newTasks],
        newTask: '',
        index: -1,
      });
    }
  };

  handleEdit = (event, index) => {
    const { tasks } = this.state;
    this.setState({
      index,
      newTask: tasks[index],
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
