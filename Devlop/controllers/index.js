const router = require('express').Router();

router.get('/', async (req,res) => {
    console.log("made it to get route " + res.body)
    try {
        res.render('index.html');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/contact', async (req,res) => {
    console.log("made it to get route " + res.body)

    try {
        res.render('contact.html');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
