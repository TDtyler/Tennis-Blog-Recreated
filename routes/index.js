const router = require('express').Router();
const users = require('./users');
const pages = require('./pages');

// localhost:3001/
router.use('/', pages);
router.use("/users", users);

module.exports = router;