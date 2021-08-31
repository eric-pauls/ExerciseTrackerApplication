import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const EditExercisePage = ({exerciseToEdit}) => {
    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    const history = useHistory();

    const editExercise = async () => {
        const editedExercise = {name, reps, weight, unit, date}
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 200){
            alert('Exercise edited successfully');
        }else{
            alert(`Failed to edit exercise, status code = ${response.status}`);
        }
        history.push('/');
    };

    let formAction = (event) => {
        event.preventDefault();
    }

    return (
        <div className='body'>
            <form className='form' onSubmit={formAction}>
                <h1 className='h1'>Edit Exercise</h1>
                <div>
                <label className='input-label' for="exerciseName">Exercise Name:</label>
                    <input
                        type="text"
                        value = {name}
                        onChange={e => setName(e.target.value)} />
                </div>
                <div>
                <label className='input-label' for="repCount">Exercise Reps:</label>    
                    <input
                        type="number"
                        min="0"
                        value = {reps}
                        onChange={e => setReps(e.target.value)} />
                </div>
                <div>
                <label className='input-label' for="exerciseWeight">Exercise Weight:</label>    
                    <input
                        type="number"
                        min="0"
                        value = {weight}
                        onChange={e => setWeight(e.target.value)} />
                </div>
                <div>
                <label className='input-label' for="weightUnit">Weight Unit:</label>
                        <select id="dropdown" onChange={e => setUnit(e.target.value)}>
                            <option value="lbs">lbs</option>
                            <option value="kg">kg</option>
                        </select>
                </div>
                <div>
                <label className='input-label' for="exerciseDate">Exercise Date:</label>    
                    <input
                        type="date"
                        value = {date}
                        onChange={e => setDate(e.target.value)} />       
                </div>
                <button className='submit-button'
                    onClick={editExercise}
                >Edit exercise</button>
            </form>
        </div>
    )
}

export default EditExercisePage;