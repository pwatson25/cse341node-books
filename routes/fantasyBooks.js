const express = require('express');
const router = express.Router();

const fantasyBooksController = require('../controllers/fantasy');

router.get('/', fantasyBooksController.getAll);

router.get('/:id', fantasyBooksController.getSingle);

router.post('/', fantasyBooksController.createBook);

router.put('/:id', fantasyBooksController.updateBook);

router.delete('/:id', fantasyBooksController.deleteBook);

module.exports = router;