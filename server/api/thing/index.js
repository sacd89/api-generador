'use strict';

var express = require('express');
var controller = require('./thing.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/post', controller.create);
router.put('/put/:id', controller.upsert);
router.patch('/patch/:id', controller.patch);
router.delete('/delete/:id', controller.destroy);

module.exports = router;
