const express = require('express');
const router = express.Router();

router.use(express.static('static/nav'));
router.use(express.static('static/store'));

router.get('/', async (req, res) => {
    res.render('pages/store/index');
});


module.exports = router;