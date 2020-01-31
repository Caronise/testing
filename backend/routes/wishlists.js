var express = require('express');
var router = express.Router();

/* GET wishlists listing */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET wishlists by id */


/* POST new wishlists */


/* PUT wishlist */


/* DELETE wishlist */



module.exports = router;
