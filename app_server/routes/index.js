const express = require('express');
const router = express.Router();
const ctrlDocs = require('../controllers/docs');
const ctrlOthers = require('../controllers/others');

/* Locations pages */

router.get('/', ctrlDocs.homelist);
router.get('/contracts', ctrlDocs.contracts);
router.get('/notices', ctrlDocs.notices);
router.get('/corporate', ctrlDocs.corporate);
router.get('/court', ctrlDocs.court);

/*Other pages */

router.get('/about', ctrlOthers.about);
router.get('/contact', ctrlOthers.contact);
router.get('/feedback', ctrlOthers.feedback);
router.post('/feedback/create', ctrlOthers.createFeedback);



module.exports = router;
