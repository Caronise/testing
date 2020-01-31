var express = require('express');
var router = express.Router();

/* GET books listing. */
router.get('/books', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET book by id */

module.exports = router;

