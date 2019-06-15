const express = require('express');
const router = express.Router();
const ctrlDocs = require('../controllers/legal_docs');
const ctrlPages = require('../controllers/main_pages');
const ctrlAuth = require('../controllers/authentication');

router.get('/', ctrlPages.home);
router.get('/about', ctrlPages.about);
router.get('/contact', ctrlPages.contact);
router.get('/feedback', ctrlPages.feedback);
router.post('/feedback/create', ctrlPages.createFeedback);

router.get('/contracts', ctrlDocs.contracts);
router.get('/notices', ctrlDocs.notices);
router.get('/corporate', ctrlDocs.corporate);
router.get('/court', ctrlDocs.court);

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;
