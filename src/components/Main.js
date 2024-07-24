import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';

import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

class Main extends Component {
  state = {
    newTask: '',
    tasks: ['Fazer café', 'Beber água', 'Estudar React'],
  };

  handleInputChange = (event) => {
    this.setState({
      newTask: event.target.value,
    });
  };

  render() {
    const { newTask, tasks} = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>
        <form action="" className='form'>
          <input onChange={this.handleInputChange}
          type="text"
          value={newTask}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tasks">
          {tasks.map((task) => (
            <li key={task}>
              {task}
              <div>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Main;
