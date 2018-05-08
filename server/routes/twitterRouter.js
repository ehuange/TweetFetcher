const router = require('express').Router();
const twitterController = require('../controllers/twitterController');

router.route('/getTweetsForUser').post(twitterController.getTweetsForUser)

module.exports = router;