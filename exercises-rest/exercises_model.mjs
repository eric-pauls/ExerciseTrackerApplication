import mongoose from 'mongoose';

// Prepare to the database exercises_db in the MongoDB server running locally on port 27017
mongoose.connect(
    'mongodb://localhost:27017/exercises',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;

db.once('open', () => {
    console.log('Successfully connected to MongoDB using Mongoose!');
});

mongoose.set('useCreateIndex', true);

// define schema
const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
    unit: { type: String, required: true},
    date: { type: String, required: true}
});

// compile model from the schema
const Exercise = mongoose.model("Exercise", exerciseSchema);
/**
 * Create a exercise
 * @param {String} name 
 * @param {Number} reps
 * @param {Number} weight
 * @param {String} unit
 * @param {String} date
 * @returns A promise. Resolves to the JSON object for the document created by calling save
 */
const createExercise = async (name, reps, weight, unit, date) => {
    const exercise = new Exercise({name: name, reps: reps, weight: weight, unit: unit, date:date});
    return exercise.save();
}

/**
 * Find the exercise with the given _id value
 * @param {String} _id 
 * @returns 
 */
 const findExerciseBy_id = async (_id) => {
    const query = Exercise.findBy_id(_id);
    return query.exec();
}

/**
 * Retrive exercises based on the filter, projection and limit parameters
 * @param {Object} filter 
 * @param {String} projection 
 * @param {Number} limit 
 * @returns 
 */

const findExercises = async (filter, projection, limit) => {
    const query = Exercise.find(filter)
    .select(projection)
    .limit(limit);
    return query.exec();
}

/**
 * Replace the name, reps, weight, unit, date of the exercise with the _id value prov_ided
 * @param {String} _id 
 * @param {String} name 
 * @param {Number} reps 
 * @param {Number} weight 
 * @param {String} unit
 * @param {String} date 
 * @returns A promise. Resolves to the number of documents modified
 */

const replaceExercise = async function (_id, name, reps, weight, unit, date) {
    const result = await Exercise.replaceOne({ _id: _id }, { name: name, reps: reps, weight: weight, unit: unit, date: date });
    return result.nModified;
}

/**
 * Delete the exercise with prov_ided _id value
 * @param {String} _id 
 * @returns A promise. Resolves to the count of deleted documents
 */

 const deleteBy_id = async (_id) => {
    const result = await Exercise.deleteOne({ _id: _id });
    return result.deletedCount;
}

export { createExercise, findExercises, replaceExercise, deleteBy_id};