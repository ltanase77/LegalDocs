const express = require('express');
const router = express.Router();
const ctrlDocs = require('../controllers/legal_docs');
const ctrlPages = require ('../controllers/main_pages');

router.get('/', ctrlPages.home);
router.get('/about', ctrlPages.about);
router.get('/contact', ctrlPages.contact);

router.get('/contracts', ctrlDocs.contracts);
router.get('/notices', ctrlDocs.notices);
router.get('/corporate', ctrlDocs.corporate);
router.get('/court', ctrlDocs.court);

module.exports = router;
