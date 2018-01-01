var express = require('express');
var router = express.Router();
var ctrlDocs = require('../controllers/docs');
var ctrlOthers = require('../controllers/others');

/* Locations pages */

router.get('/', ctrlDocs.homelist);
router.get('/contracts', ctrlDocs.contracts);
router.get('/notices', ctrlDocs.notices);
router.get('/corporate', ctrlDocs.corporate);
router.get('/court', ctrlDocs.court);

/*Other pages */

router.get('/about', ctrlOthers.about);
router.get('/contact', ctrlOthers.contact);


module.exports = router;
