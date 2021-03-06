var express = require('express');
var router = express.Router();

/* GET wishlists listing */
router.get('/wishlists', (req, res) => {
  const query = {
    text: `
    SELECT * FROM wishlists
    ;`
  }
  db.query(query)
    .then(result => {
      return res.json(result.rows)
    })
    .catch(err => console.log(`Error getting data: ${err.message}`))
})

/* GET wishlists by id */
router.get('/wishlists/:id', (req, res) => {
  const query = {
    text: `
    SELECT * FROM wishlists
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

/* POST new wishlists */
router.post('/wishlists', (req, res) => {
  const query = {
    text: `
    INSERT INTO wishlists ()
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

/* PUT wishlist */
router.put('/wishlists/:id', (req, res) => {
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

/* DELETE wishlist */
router.delete('/wishlists/:id', (req, res) => {
  const query = {
    text: `
    DELETE $1 FROM wishlists
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
