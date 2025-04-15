import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './componenets/home';
import AddTask from './componenets/addtask';
import DeletePage from './componenets/deletetask';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/delete" element={<DeletePage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
