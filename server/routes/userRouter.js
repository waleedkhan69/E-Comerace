const express = require('express');
const router = express.Router();
const userModel = require('../Model/user-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
router.get('/', (req, res) => {
  res.send('how we goes throug');
});
router.post('/register', (req, res) => {
  try {
    let { fullname, email, password } = req.body;
    bcrypt.genSalt(10, function (eror, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) return res.status(500).send(err.message);
        else {
          let user = await userModel.create({
            fullname,
            email,
            password: hash,
          });
          let token = jwt.sign({ email, id: user._id }, 'wmnfjnf');
          res.cookie('token', token);
          res.send('user create succesfully');
        }
      });
    });
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
