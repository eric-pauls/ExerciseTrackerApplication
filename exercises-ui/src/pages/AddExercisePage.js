import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

const today = new Date()
const currentDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

const AddExercisePage = () => {
    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('lbs');
    const [date, setDate] = useState(currentDate);
    const history = useHistory();

    const addExercise = async () => {
        const newExercise = {name, reps, weight, unit, date};
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert('Exercise added successfully');
        }else{
            alert(`Failed to add exercise, status code = ${response.status}`);
        }
        history.push('/');
    };

    let formAction = (event) => {
        event.preventDefault();
    }


    return (
        <div className='body'>
            <form className='form' onSubmit={formAction}>
                <h1 className='h1'>Add Exercise</h1>
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
                    onClick={addExercise}
                >Add exercise</button>
            </form>
        </div>
    )
}

export default AddExercisePage