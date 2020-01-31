var express = require('express');
var router = express.Router();

/* GET categories listing */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET categories by id */



module.exports = router;
