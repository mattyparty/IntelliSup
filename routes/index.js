// Required modules and files
const router = require('express').Router();
const apiRoutes = require('./api');
const htmlRoutes = require('./html');

// Telling router which routes to use for each extension
router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

module.exports = router;
