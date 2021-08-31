import React from 'react';
import Exercise from '../components/Exercise.js';

function ExerciseList({ exercises, onDelete, onEdit }) {
    return (
        <table className='table' id="exercises">
            <thead className='th'>
                <tr className='tr'>
                    <th className='th'>Name</th>
                    <th className='th'>Reps</th>
                    <th className='th'>Weight</th>
                    <th className='th'>Unit</th>
                    <th className='th'>Date</th>
                    <th className='th'>Edit</th>
                    <th className='th'>Delete</th>
                </tr>
            </thead>
            <tbody className='table'>
                {exercises.map((exercise, i) => <Exercise exercise={exercise}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    key={i} />)}
            </tbody>
        </table>
    )
}

export default ExerciseList