// Import and create app here
const express = require('express');
const expressionRouter = require('./expressions');
const animalRouter = require('./animals');
    
const app = express();

const PORT = process.env.PORT || 4001;

// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

// Add your routes here
app.use('/expressions', expressionRouter);
app.use('/animals', animalRouter);

// Start the server listening on PORT here
app.listen(PORT, ()=> {
    console.log(`Server is listening on PORT ${PORT}`);
});