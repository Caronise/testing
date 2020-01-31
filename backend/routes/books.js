var express = require('express');
var router = express.Router();

/* GET books listing. */
router.get('/books', (req, res) => {
  const query = {
    text: `
    SELECT * FROM books
    ;`
  }
  db.query(query)
    .then(result => {
      return res.json(result.rows)
    })
    .catch(err => console.log(`Error getting data: ${err.message}`))
})

/* GET book by id */
router.get('/books/:id', (req, res) => {
  const query = {
    text: `
    SELECT * FROM books
    WHERE id = $1
    ;`,
    values = [req.params.id]
  }
  db.query(query)
    .then(result => {
      return res.json(result.rows)
    })
    .catch(err => console.log(`Error getting data: ${err.message}`))
})

module.exports = router;

