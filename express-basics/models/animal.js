const db = require('../db');
const { param } = require('../animals');

const getAllAnimals = async () => {
    const result = await db.query('SELECT * FROM animals');
    return result.rows;  
};
const insertAnimal = async (params) => {
    const result = await db.query('INSERT INTO animals (emoji, name) VALUES ($1, $2) RETURNING *', [params.emoji, params.name]);
    return result.rows;
}

const updateAnimal = async (id, params) => {
    const result = await db.query('UPDATE animals SET emoji = $2, name = $3 WHERE id = $1 RETURNING *', [id, params.emoji, params.name]);
    return result.rows;
}

const deleteAnimal = async (id) => {
    const result = await db.query('DELETE FROM animals WHERE id = $1 RETURNING *', [id]);
    return result;
}
const getAnimalById = async (id) => {
    const result = await db.query('SELECT * FROM animals WHERE id = $1', [id]);
    return result.rows;
}

module.exports = {getAllAnimals, getAnimalById, insertAnimal, updateAnimal, deleteAnimal};