var express = require('express');
var router = express.Router();
var userController = require('../controllers/user.controller');

/* GET home page. */
router.get('/', function(req, res, next) { 
  userController.saveUser(req, res, next)
});

module.exports = router;
