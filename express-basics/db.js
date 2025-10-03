const {Pool} = require('pg');
const pool = new Pool({
    database: 'expressyourself',
    user: 'expressadmin',
    password: 'expressadmin',
    localhost: 'localhost',
    port: 5432
});

module.exports = {
    query: (text, params) => pool.query(text, params)
};


