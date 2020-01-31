var express = require('express');
var router = express.Router();

/* GET reviews listing. */
router.get('/reviews', (req, res) => {
  const query = {
    text: `
    SELECT * FROM reviews
    ;`
  }
  db.query(query)
    .then(result => {
      return res.json(result.rows)
    })
    .catch(err => console.log(`Error getting data: ${err.message}`))
})

/* GET review by id */
router.get('/reviews/:id', (req, res) => {
  const query = {
    text: `
    SELECT * FROM reviews
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

/* POST review */
router.post('/reviews', (req, res) => {
  const query = {
    text: `
    INSERT INTO reviews ()
    VALUES ()
    RETURNING *
    ;`,
    values: []
  }
  db.query(query)
    .then(result => {
      return res.json(result.rows)
    })
    .catch(err => console.log(`Error getting data: ${err.message}`))
})

/* PUT review */
router.put('/reviews/:id', (req, res) => {
  const query = {
    text: `
    UPDATE reviews
    SET
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


/* DELETE review */
router.delete('/reviews/:id', (req, res) => {
  const query = {
    text: `
    DELETE $1 FROM reviews
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

module.exports = router;
