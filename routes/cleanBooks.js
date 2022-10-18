const express = require('express');
const router = express.Router();

const cleanBooksController = require('../controllers/clean');

router.get('/', cleanBooksController.getAll);

router.get('/:id', cleanBooksController.getSingle);

router.post('/', cleanBooksController.createBook);

router.put('/:id', cleanBooksController.updateBook);

router.delete('/:id', cleanBooksController.deleteBook);

module.exports = router;