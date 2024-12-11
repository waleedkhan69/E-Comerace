const express = require('express');
const router = express.Router();
const ownerModel = require('../Model/owner-model');
require('dotenv').config();

if (process.env.NODE_ENV === 'development') {
  router.post('/create', async function (req, res) {
    // res.send('owner created waleed khan');
    let owners = await ownerModel.find();
    if (owners.length > 0) {
      return res.status(504).send('Owner Already Exists');
    }
    let { fullname, email, password } = req.body;
    let createdOnwer = await ownerModel.create({
      fullname,
      email,
      password,
    });
    res.status(200).send(createdOnwer);
  });
}
router.get('/', (req, res) => {
  res.send('Owner Route');
});

module.exports = router;
