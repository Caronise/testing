var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', (req, res) => {
  const query = {
    text: `
    SELECT * FROM users
    ;`
  }
  db.query(query)
    .then(result => {
      return res.json(result.rows)
    })
    .catch(err => console.log(`Error getting data: ${err.message}`))
})

/* GET user by id */
router.get('/users/:id', (req, res) => {
  const query = {
    text: `
    SELECT * FROM users
    WHERE id = $1
    ;`,
    values: [req.params.id]
  }
  db.query(query)
    .then(result => {
      return res.json(result.rows)
    })
    .catch(err => console.log(`Error getting data: ${err.message}`))
})


/* POST new user */



module.exports = router;
