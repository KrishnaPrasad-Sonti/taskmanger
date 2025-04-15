// DeletePage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeletePage = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from backend
  useEffect(() => {
    axios.get('http://localhost:2025/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error(error));
  }, []);

  // Handle task deletion
  const handleDelete = (id) => {
    axios.delete(`http://localhost:2025/tasks/${id}`)
      .then(response => {
        // Remove the task from the state after deletion
        setTasks(tasks.filter(task => task.id !== id));
        alert("Task deleted successfully!");
      })
      .catch(error => console.error("Error deleting task:", error));
  };

  return (
    <div className="delete-page">
      <h1>Delete Tasks</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <button onClick={() => handleDelete(task.id)}>Delete</button> {/* Delete button */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeletePage;
