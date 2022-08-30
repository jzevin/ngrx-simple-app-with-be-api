var express = require('express');
var router = express.Router();
var questions = require('../data/questions.json')

/* GET questions listing. */
router.get('/', function(req, res, next) {
  res.send(questions.map(({id, question, options})=>{
    return {id, question, options}
  }));
});

module.exports = router;
