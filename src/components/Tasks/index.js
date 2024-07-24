import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Tasks.css';

function Tasks({ tasks, handleEdit, handleDelete }) {
  return (
    <ul className="tasks">
      {tasks.map((task, index) => (
        <li key={task}>
          {task}
          <spam>
            <FaEdit
              onClick={(event) => handleEdit(event, index)}
              className="edit"
            />
            <FaWindowClose
              onClick={(event) => handleDelete(event, index)}
              className="delete"
            />
          </spam>
        </li>
      ))}
    </ul>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Tasks;
