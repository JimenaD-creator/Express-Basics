const db = require('../db');
const { param } = require('../expressions');

const getAllExpressions = async () => {
    const result = await db.query('SELECT * FROM expressions');
    return result;  
};
const insertExpression = async (params) => {
    const result = await db.query('INSERT INTO expressions (emoji, name) VALUES ($1, $2) RETURNING *', [params.emoji, params.name]);
    return result;
}

const updateExpression = async (id, params) => {
    const result = await db.query('UPDATE expressions SET emoji = $2, name = $3 WHERE id = $1 RETURNING *', [id, params.emoji, params.name]);
    return result.rows;
}

const deleteExpression = async (id) => {
    const result = await db.query('DELETE FROM expressions WHERE id = $1 RETURNING *', [id]);
    return result;
}
const getExpressionById = async (id) => {
    const result = await db.query('SELECT * FROM expressions WHERE id = $1', [id]);
    return result.rows;
}

module.exports = {getAllExpressions, getExpressionById, insertExpression, updateExpression, deleteExpression};