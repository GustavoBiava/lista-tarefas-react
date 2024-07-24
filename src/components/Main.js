import React, { Component } from 'react';
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
    // const { newTask } = this.state;
    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>
        <form action="">
          <input onChange={this.handleInputChange} type="text" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default Main;
