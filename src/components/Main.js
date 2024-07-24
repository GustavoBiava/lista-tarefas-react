import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';

import './Main.css';

class Main extends Component {
  state = {
    newTask: '',
  };

  handleInputChange = (event) => {
    this.setState({
      newTask: event.target.value,
    });
  };

  render() {
    const { newTask } = this.state;

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
      </div>
    );
  }
}

export default Main;
