import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import AddExercise from './pages/AddExercisePage.js';
import EditExercise from './pages/EditExercisePage.js';
import {useState} from 'react';

function App() {  
  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <HomePage setExerciseToEdit={setExerciseToEdit}/>
        </Route>
        <Route path="/AddExercise">
          <AddExercise/>
        </Route>
        <Route path="/EditExercise">
          <EditExercise exerciseToEdit={exerciseToEdit}/>
        </Route>
      </Router>
    </div>
  );
}

export default App;

