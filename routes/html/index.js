// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require('../../config/middleware/isAuthenticated');
const router = require('express').Router();

// Route to render home page
router.get('/', (req, res) => {
  res.render('index',
    {
      home: true,
      testimonials: [
        {
          name: "L. Luthor",
          title: "Billionaire Mastermind",
          quote: "Kryptonite is crucial for my operation on a day to day basis. IntelliSup has allowed me to track my suppliers until the parts show up to my laye... um business... I am truly appreciative of their product!"
        },
        {
          name: "J. Gordon",
          title: "Commissioner",
          quote: "Spotlight bulbs burn very quickly at high elevation. Keeping a lot of stock on hand is crucial to our operation here in Gotham. IntelliSup aides us in making sure our shelves are stocked and informs us when the next shipment will arrive."
        },
        {
          name: "S. Rogers",
          title: "Captain",
          quote: "In my line of work, I am constantly having to re-paint my shield. Vibranium is an extremely hard metal to bond paint to, so I need the right kind. IntelliSup has made it so easy to know exactly when the right paint will arrive, and I can hold the red paint supplier just as accountable as the blue and white ones. Thank you IntelliSup!"
        },
        {
          name: "HULK SMASH",
          title: "SCIENTIST",
          quote: "ME NEED FOOD AND WATER TO SURVIVE! MANY TIME I CAUSED AGGRAVATION FROM SUPPLIER WHO NOT MEET MY REQUIREMENT! INTELLISUP HELP ME AND FILL MY STOMACH ARRRRRRRRRRRRRRRRRRRRRRR!!!"
        }
      ],
    }
  );
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
