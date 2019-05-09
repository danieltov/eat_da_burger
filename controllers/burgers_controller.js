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
    burger.all(callback);
});

// ! The 'add' route
router.post('/api/burgers', function(req, res) {
    burger.add(callback);
});

// ! The 'update' route
router.put('/api/burger/:id', function(req, res) {
    burger.update(callback);
});

// * The Export
// * ========================================

module.exports = router;
