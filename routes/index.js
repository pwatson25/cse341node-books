const express = require('express');
const router = express.Router();

router.use('/', require('./docs'));
router.use('/books', require('./books'))

// routes.get('/', (req, res) => {
//     res.send('Joshua Watson')
// });

module.exports = router;