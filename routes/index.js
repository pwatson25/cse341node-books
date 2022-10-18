const express = require('express');
const router = express.Router();

router.use('/', require('./docs'));
router.use('/clean', require('./cleanBooks'))
router.use('/fantasy', require('./fantasyBooks'))


// routes.get('/', (req, res) => {
//     res.send('Joshua Watson')
// });

module.exports = router;