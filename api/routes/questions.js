var express = require('express');
var router = express.Router();

/* GET questions listing. */
router.get('/', function(req, res, next) {
  res.send(['what', 'is', 'up', 'doc']);
});

module.exports = router;
