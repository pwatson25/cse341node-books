const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    // #swagger.description = 'Get all books'
    const result = await mongodb.getDb().db("cse341-books").collection('Clean Romance').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

const getSingle = async (req, res) => {
    // #swagger.description = 'Get single book by ID'
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db("cse341-books").collection('Clean Romance').find({
        _id: userId
    });
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

const createBook = async (req, res) => {
    // #swagger.description = 'Create book'
    const book = {
        title: req.body.title,
        authorFirst: req.body.authorFirst,
        authorLast: req.body.authorLast,
        listPrice: req.body.listPrice,
        img_url: req.body.img_url,
        description: req.body.description,
        publishedDate: req.body.publishedDate,
        isbn: req.body.isbn,
        // review: {
        //     review1: {
        //         stars: req.body.stars,
        //         content: req.body.content,
        //         person: req.body.person,
        //         reviewLocation: req.body.reviewLocation
        //     }
        // }
    };
    const response = await mongodb.getDb().db("cse341-books").collection('Clean Romance').insertOne(book);
    if (response.acknowledged) {
        res.status(201).json(response);
    } else {
        res.status(500).json(response.error || 'Some error occurred while creating the contact.');
    }
};

const updateBook = async (req, res) => {
    // #swagger.description = 'Update contact'
    const userId = new ObjectId(req.params.id);
    // be aware of updateOne if you only want to update specific fields
    const book = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        title: req.body.title,
        img_url: req.body.img_url
    };
    const response = await mongodb
        .getDb().db("cse341-books").collection('Clean Romance').replaceOne({
            _id: userId
        }, book);
    console.log(response);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating the book.');
    }
};

const deleteBook = async (req, res) => {
    // #swagger.description = 'Delete book's
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db("cse341-books").collection('Clean Romance').remove({
        _id: userId
    }, true);
    console.log(response);
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while deleting the book.');
    }
};

module.exports = {
    getAll,
    getSingle,
    createBook,
    updateBook,
    deleteBook
};