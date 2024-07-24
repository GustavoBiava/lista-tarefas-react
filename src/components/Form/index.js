import React from 'react';
import PropTypes from 'prop-types';

import { FaPlus } from 'react-icons/fa';
import './Form.css';

function Form({ handleSubmit, handleInputChange, newTask }) {
  return (
    <form action="" className="form" onSubmit={handleSubmit}>
      <input onChange={handleInputChange} type="text" value={newTask} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired,
};

export default Form;
