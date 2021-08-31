import React from 'react';
import { Link } from 'react-router-dom';
import ExerciseList from '../components/ExerciseList.js';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage({setExerciseToEdit}) {

    const [exercises, setExercises] = useState([]);
    const history = useHistory();

    const onDelete = async _id => {
        const response = await fetch(`/exercises/${_id}`, {method: 'DELETE'});
        if (response.status === 204){
            setExercises(exercises.filter(e => e._id !== _id));
        }else;{
            console.error(`Failed to delete exercise with _id = ${_id}, status code = ${response.status}`);
        }
    };

    const onEdit = exercise => {
        setExerciseToEdit(exercise);
        history.push("/EditExercise");
    };

    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();
        setExercises(data);
    };
        
    useEffect(() => {
        loadExercises();
    }, []);

    return (
        <>
            <body className="body">
                <h1 className="h1">My Exercises</h1>
                <ExerciseList exercises={exercises} onDelete={onDelete} onEdit={onEdit}></ExerciseList>
                <Link to="/AddExercise"> Add an Exercise </Link>
            </body>
        </>
    );
}

export default HomePage;