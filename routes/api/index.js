const router = require('express').Router();
// Requiring our models and passport as we've configured it
const db = require('../../models');
const passport = require('../../config/passport');
const isAuthenticated = require('../../config/middleware/isAuthenticated');

// Using the passport.authenticate middleware with our local strategy.
// If the user has valid login credentials, send them to the account page.
// Otherwise the user will be sent an error
router
  .route('/login', isAuthenticated)
  .post(passport.authenticate('local'), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.redirect('/account');
  });

// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to how we configured our Sequelize User Model. 
// If user is created successfully, log the user in, otherwise send an error
router.route('/signup', isAuthenticated).post((req, res) => {
  db.user
    .create(req.body)
    .then(() => {
      res.redirect('/account');
    })
    .catch((err) => {
      res.status(401).json(err);
    });
});

// Route for getting some data about our user to be used client side
router.route('/user_data', isAuthenticated).get((req, res) => {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    return res.json({});
  }
  // Otherwise send back the user's email and id
  // Sending back a password, even a hashed password, isn't a good idea
  const { password, ...user } = req.user;
  res.json(user);
});

// Route for determining data user should see on Account page based on mappings
router.route('/account', isAuthenticated).get((req, res) => {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    return res.json({});
  }

  const user = req.user.email;

  db.supplier_map_login
    .findAll({
      where: { login_email: user },
      include: [
        {
          model: db.order
        },
        { model: db.supplier }
      ]
    })
    .then((results) => {
      const dataArr = results[0].orders.map((obj) => {
        return {
          ...obj.dataValues,
          supplierName: results[0].supplier.supplier_name
        };
      });
      res.json({ results: dataArr });
    })
    .catch((err) => {
      console.log(err);
    });
});

// Route for updating a record on the Orders table
router.route('/account/:id', isAuthenticated).put((req, res) => {
  db.order
    .update(req.body, { where: { id: req.params.id } })
    .then((updated) => {
      res.json(updated);
    });
});

// Route for adding a record to the Orders table
router.route('/orders', isAuthenticated).post((req, res) => {
  db.order
    .create({
      item: req.body.item,
      po_received: req.body.poReceived,
      po_due_date: req.body.dueDate,
      supplier_number: req.body.supplier,
      po_number: req.body.poNum,
      supplierMapLoginId: parseInt(req.body.supplier)
    })
    .then((updated) => {
      res.json(updated);
    });
});

// Route for access to Admin page
router.route('/admin', isAuthenticated).get((req, res) => {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    return res.json({});
  }

  db.supplier_map_login
    .findAll({})
    .then((results) => {
      res.json({ results });
    })
    .catch((err) => {
      console.log(err);
    });
});

// Route for updating Supplier Map Login table
router.route('/admin/:id', isAuthenticated).put((req, res) => {
  db.supplier_map_login
    .update(req.body, { where: { id: req.params.id } })
    .then((updated) => {
      res.json(updated);
    });
});

module.exports = router;
