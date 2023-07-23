const express = require('express');
const router = express.Router();

router.use(express.static('static/nav'));
router.use(express.static('static/toolbars'));
router.use(express.static('static/home'));

router.get('/', async (req, res) => {
    res.render('pages/home/index');
});

module.exports = router;