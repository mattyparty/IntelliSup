// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require('../../config/middleware/isAuthenticated');
const router = require('express').Router();

// Route to render home page
router.get('/', (req, res) => {
  res.render('index', { home: true });
});

// Route to render login?
router.get('/login', (req, res) => {
  // If the user already has an account send them to the account page
  if (req.user) {
    res.redirect('/account', { account: true });
  }
});

// Route for logging user out
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
// /////////////////////////////////////////////////////////////////////////

router.get('/account', isAuthenticated, (_req, res) => {
  res.render('account', { account: true });
});

router.get('/admin', isAuthenticated, (_req, res) => {
  res.render('admin', { admin: true });
});

module.exports = router;
