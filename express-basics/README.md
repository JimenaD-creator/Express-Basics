# Express Yourself

In this activity, you will be fixing a machine called Express Yourself in the browser. The machine is supposed to provide functionality for clients to interact with various Expressions: JavaScript objects each containing ids, names, and emojis. Currently, it looks nice, but nothing works since there is no server in place! You will be learning all the necessary skills to implement an API allowing clients to Create, Read, Update, and Delete Expressions. These four functionalities together are known as CRUD, and they form the backbone of many real-life APIs.

## Instructions

1. Import `express` using `require` syntax and assign it to an `express` variable.
<br>
Create an instance of an Express server and save it to a variable named `app`.
<br>
Start the server listening on the port defined by the `PORT` variable. When the server has started, log a message to the console that the server is listening for requests.
<br>
To actually start your server listening, run the command `node app.js` to run your server in Node. At this point, it won’t do much, but if you’ve completed the steps above, it will log your message to show that the server started successfully.

2. Now that your server starting code should be working properly, you can start up the Express Yourself machine. Start your server from the terminal window with `node app.js`. Once it logs that it is running.
<br>
Inside **app.js**, create a route handler to handle a GET request to `'/expressions'`. For now, give it a `req, res, next` callback. For now, log the `req` object inside the callback. Verify that the route works and logs the request by starting your server and clicking the Refresh Database button which will send a GET /expressions request.
<br>
You may notice that there’s a line with the command `app.use(express.static('public'));`. This is used to make sure that once the server is started, you can see the Express Yourself machine.

3. Send the `expressions` array from your `app.get()` handler. Now that you have a complete route, you can test it out by clicking the ‘Refresh Expressions’ button on the machine.

4. Create a GET `/expressions/:id` get route that you will use to send back a single expression. You can use `req.params` object and the pre-written helper function `getElementById(id, array)` to find the correct expression before sending it back.
<br>
For instance, to find ID `560` from `expressions`, you would call `getElementById(560, expressions);`. This function returns the element object if it exists and `undefined` if it does not.
<br>
To test the Express Yourself machine, use the box in the upper-left corner to send a GET request for a specified ID.

5. Let’s make sure that our GET `/expressions/:id` route handles invalid requests properly, for instance if we request an expression ID that does not exist.
<br>
Complete your route so that it sends back the correct expression object if it exists and sends back a 404 response if it does not.

6. Open a PUT `/expressions/:id` route with an empty `(req, res, next)` callback function.

7. Use `req.query` to update the proper element in the `expressions` array.
<br>
We’ve imported a helper function from **/utils.js** to help with this task.
<br>
You can use the `updateElement()` helper function in your PUT `/expressions/:id` route. It takes three arguments:

    - `id` (the ID number of the element)
    - `queryArguments` (the new, updated expression object from `req.query`)
    - `elementList` (the array which contains the element to update)

    `updateElement()` updates that specific element in the `elementList` array (you’ll pass in the `expressions` array), and then returns the updated element.
<br>
Be sure to check that an `expression` with the `id` you provide exists in the `expressions` array (`getIndexById()` can help)!
<br>
To test your functionality with the Express Yourself machine, , get all expressions, and then use the UPDATE tab to select an individual expression, select updates, and send the PUT request.

8. Create a POST `/expressions` route. It should send, create, and add a new expression to the `expressions` array if it is a valid new expression (meaning it has an `emoji` and `name` key). It should send back the new element with a 201 status code if it is valid, and it should send a 400 status code if the object is not valid.
<br>
You can use the `createElement(elementType, objectToCreate)` helper function to create a valid expression. The first argument is the type of element, so it should be `'expressions'` in this case. The second argument should be the query object with an `emoji` and a `name` property. This function will return `false` if the `objectToCreate` does not contain all necessary key-value pairs, and it will return the newly-created element if `objectToCreate` is valid. It does not add the created element to any arrays, you will need to do so yourself.
<br>
Don’t forget to test as you implement the functionality. To test your route, use the POST tab in the upper left corner. Select a name and emoji and send the request to see if your route works as intended.

9. Create a DELETE `/expressions/:id` route. It should send back a 404 response for a request with an invalid id, and it should delete the proper element from the `expressions` array and send a 204 status with a valid id.
<br>
To test your functionality, use the DELETE tab in the upper left. Select the ID to delete and send the request.

### Adding Animal Routes

10. In your **app.js** file, Create a GET `/animals` route to return an array of all animals.

11. Create a GET `/animals/:id` route to respond with a single animal.

12. Create a PUT `/animals/:id` route to update an animal in animals and send back the updated animal.

13. Create a POST `/animals` route to add new animal to animals and respond with the new animal.

14. Create a DELETE `/animals/:id` route to delete animals by id.