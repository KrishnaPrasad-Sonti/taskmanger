// Home.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';  // Import Link for navigation

const Home = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from backend
  useEffect(() => {
    axios.get('http://localhost:2025/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="home">
      <h1>Task Manager</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
      <Link to="/add-task">Add New Task</Link> {/* Link to Add Task page */}
      <br />
      <Link to="/delete">Go to Delete Tasks</Link> {/* Link to Delete Page */}
    </div>
  );
};

export default Home;
