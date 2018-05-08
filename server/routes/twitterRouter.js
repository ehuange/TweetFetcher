const router = require('express').Router();
const twitterController = require('../controllers/twitterController');

router.route('/getTweetsForUser').post(twitterController.getTweetsForUser)

// router.route('/getToken').get(twitterController.getToken);

module.exports = router;