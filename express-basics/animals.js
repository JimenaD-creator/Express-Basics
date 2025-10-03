const express = require('express');
const animalModel = require('./models/animal');
const { getElementById, getIndexById, updateElement,
    seedElements, createElement } = require('./utils');

const animalRouter = express.Router();

const animals = [];
seedElements(animals, 'animals');


animalRouter.use((req, res, next) => {
    if (req.query.animal) {
        req.query.emoji = req.query.animal;
        delete req.query.animal;
    }
    next();
});

const fetchElement = async(req, res, next) => {
    const id = Number(req.params.id);
    const animals = await animalModel.getAnimalById(id); //Get the expression by id from the database
    if(animals.length === 0){
        const error = newError(`Animal with id ${req.params.id} not found`);
        error.status = 404;
        return next(error); //It executes the handling error first because we defined it as an argument
    }
    //It sends to the request object
    req.animal = animals[0];
    //req.animal.emoji = req.animal.animal;
    req.id = id; //Until I see the response 
    next();

};
animalRouter.get('/', async(req, res, next) => {
    const dbAnimals = await animalModel.getAllAnimals();
    res.send(dbAnimals); //Send the animals from the database
});
animalRouter.get('/:id', fetchElement, (req, res, next) => {
    res.send(req.animal); //Send the expression that was found in the middleware
    //const animal = getElementById(req.params.id, animals);
    //if(animal) {
        //res.send(animal);
    //} else {
        //res.status(404).send(`Animal with id ${req.params.id} not found`);
    //}
});
animalRouter.put('/:id', fetchElement, async(req, res, next) => {
    try {
        // Asegúrate de que req.body tenga los datos correctos
        const updatedAnimal = await animalModel.updateAnimal(req.params.id, req.query); // req.body debe incluir 'emoji' y 'name'
        
        if (updatedAnimal.length === 0) {
            return res.status(404).send(`Animal with id ${req.params.id} not found`);
        }

        res.send(updatedAnimal[0]); // Devuelve el animal actualizado
    } catch (error) {
        next(error); // Maneja errores
    }

    //const indx = getIndexById(req.params.id, animals);
    //if (indx !== -1) {
        //const animal = updateElement(req.params.id, req.query, animals);
        //res.send(animal);
    //} else {
        //res.status(404).send(`Animal with id ${req.params.id} not found`);
    //}
});

animalRouter.post('/', async(req, res, next) => {
    try {
        const dbAnimals = await animalModel.insertAnimal(req.query); // req.body debe incluir 'emoji' y 'name'
        res.status(201).send(dbAnimals.rows[0]);
    } catch (error) {
        next(error);
    }

    /*const newAnimal = createElement('animals', req.query);
    if (newAnimal) {
        animals.push(newAnimal);
        res.status(201).send(newAnimal);
    } else {
        res.status(400).send(`Invalid arguments ${req.query}`);
    }*/

});
animalRouter.delete('/:id', fetchElement, async(req, res, next) => {

    try {
        const deletedAnimal = await animalModel.deleteAnimal(req.params.id);

        if (deletedAnimal.rowCount === 0) {
            return res.status(404).send(`Animal with id ${req.params.id} not found`);
        }

        res.status(204).send(deletedAnimal.rows[0]); // Devuelve el animal eliminado
    } catch (error) {
        next(error); // Maneja errores
    }


    /*const indx = getIndexById(req.params.id, animals);
    if (indx !== -1) {
        const deletedAnimal = animals[indx];
        animals.splice(indx, 1);
        res.status(204).send(deletedAnimal);
    } else {
        res.status(404).send(`Animal with id ${req.params.id} not found`);
    }*/
});
// Middleware to normalize query string attributes

    // If 'animal' exists in the query string, rename it to 'emoji' (if needed)
    // Uncomment this block if you need the reverse transformation
    // if (req.query.animal) {
    //     req.query.emoji = req.query.animal;
    //     delete req.query.animal;
    // }



module.exports = animalRouter;