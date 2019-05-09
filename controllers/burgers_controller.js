// * The Requires
// * ========================================

const express = require('express');

// ! Import the model to use its database specific methods
const burger = require('../models/burger');

// * The Routes
// * ========================================
const router = express.Router();

// ! The 'all' route
router.get('/', function(req, res) {
    // ! Invoke the .all() method with a callback that captures the data
    burger.all(function(data) {
        // ! Bind the data into an object for the view (handlebars) to use
        let hbObj = { burgers: data };

        // ! Log the new object
        log(hbObj);

        // ! Use the view to render the data
        res.render('index', hbObj);
    });
});

// ! The 'add' route
router.post('/api/burgers', function(req, res) {
    // ! Pass an array with the column names (strings)
    // ! Pass an array with the request-body values (taken from the form on the html page)
    // ! Capture the result in a callback
    burger.add(
        ['burger_name', 'devoured'],
        [req.body.name, req.body.devoured],
        function(result) {
            // ? 'Send back the ID of the new record'... Why? What does this do?
            res.json({ id: result.insertID });
        }
    );
});

// ! The 'update' route
router.put('/api/burger/:id', function(req, res) {
    burger.update(callback);
});

// * The Export
// * ========================================

module.exports = router;
