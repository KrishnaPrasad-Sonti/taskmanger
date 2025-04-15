import React, { useState } from 'react';
import axios from 'axios';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = { title, description };
    axios.post('http://localhost:2025/tasks', newTask)
      .then(response => {
        setTitle('');
        setDescription('');
        alert('Task added successfully!');
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="add-task">
      <h1>Add New Task</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
