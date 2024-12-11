const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('how is we goes throug');
});

module.exports = router;
