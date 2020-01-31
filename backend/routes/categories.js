var express = require('express');
var router = express.Router();

/* GET categories listing */
router.get('/categories', (req, res) => {
  const query = {
    text: `
    SELECT * FROM categories
    ;`
  }
  db.query(query)
    .then(result => {
      return res.json(result.rows)
    })
    .catch(err => console.log(`Error getting data: ${err.message}`))
}) 


/* GET categories by id */
router.get('/categories/:id', (req, res) => {
  const query = {
    text: `
    SELECT * FROM categories
    WHERE id = $1
    ;`,
    value: [req.params.id]
  }
  db.query(query)
    .then(result => {
      return res.json(result.rows)
    })
    .catch(err => console.log(`Error getting data: ${err.message}`))
}) 


module.exports = router;
