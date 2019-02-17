var express = require('express');
var router = express.Router();
var userController = require('../controllers/user.controller');

/* GET users listing. */
router.get('/:userName/password/:password', function(req, res, next) {
  userController.getUsers(req, res, next);
});


/* POst users listing. */
router.post('/', function(req, res, next) { 
  userController.saveUser(req, res, next); 
});

module.exports = router;
