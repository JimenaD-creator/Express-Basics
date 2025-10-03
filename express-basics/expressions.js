const express = require('express');
const expressionModel = require('./models/expression'); //Import the model
const { getIndexById, updateElement,
    seedElements, createElement} = require('./utils');
const expressionRouter = express.Router();

const expressions = []; //Expressions to store an array
seedElements(expressions, 'expressions');

// Middleware
const fetchElement = async(req, res, next) => {
    const id = Number(req.params.id);
    const expressions = await expressionModel.getExpressionById(id); //Get the expression by id from the database
    if(expressions.length === 0){
        const error = newError(`Expression with id ${req.params.id} not found`);
        error.status = 404;
        return next(error); //It executes the handling error first because we defined it as an argument
    }
    //It sends to the request object
    req.expression = expressions[0];
    //req.animal.emoji = req.animal.animal;
    req.id = id; //Until I see the response 
    next();

};

const validateArguments = (req, res, next) => {
    const queryArguments = req.query;
    if(!queryArguments.hasOwnProperty('emoji') || !queryArguments.hasOwnProperty('name')){
        const error = new Error(`Invalid arguments ${queryArguments}`);
        error.status = 400;
        return next.error();
    }
    next();
}

//Query is stored in model expression.js
expressionRouter.get('/', async (req, res, next) => {
    const dbExpressions = await expressionModel.getAllExpressions();
    res.send(dbExpressions.rows); //Send the expressions from the database
});

expressionRouter.get('/:id', fetchElement, async (req, res, next) => { //Refactor

    res.send(req.expression); //Send the expression that was found in the middleware

    //const expression = expressions[req.expressionIndx];
     //res.send(expression);
});

expressionRouter.put('/:id', fetchElement, validateArguments, async(req, res, next) => {
        const expression = await expressionModel.updateExpression(req.id, req.query); //Update the expression in the database
        console.log(expression.rows);
        res.send(expression[0]);

        //const expression = updateElement(req.params.id, req.query, expressions);
        //res.send(expression);
});

expressionRouter.post('/', validateArguments, async (req, res, next) => {
    const dbExpressions = await expressionModel.insertExpression(req.query);
    console.log(dbExpressions.rows);
    if (dbExpressions.rowCount === 0) {
        const error = new Error('Failed to insert new expression');
        error.status = 500;
        return next(error);
    }
    res.status(201).send(dbExpressions.rows[0]);
    //const newExpression = createElement('expressions', req.query);
    //expressions.push(newExpression);
    //res.status(201).send(newExpression);
});
expressionRouter.delete('/:id', fetchElement, async(req, res, next) => {
        const dbExpressions = await expressionModel.deleteExpression(req.params.id);
        console.log(dbExpressions.rows);
        if (dbExpressions.rowCount === 0) {
            const error = new Error('Failed to delete expression');
            error.status = 500;
            return next(error);
        }
        res.status(204).send(dbExpressions.rows[0]);
        //const deletedExpression = expressions[req.expressionIndx];
        //expressions.splice(req.expressionIndx, 1);
        //res.status(204).send(deletedExpression);
    });

    //const error handling
expressionRouter.use((err, req, res, next) => {
        const status = err.status || 500;
        res.status(status).send(err.message);

});

module.exports = expressionRouter;