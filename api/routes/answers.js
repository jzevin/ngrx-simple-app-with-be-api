var express = require("express");
var router = express.Router();
var questions = require("../data/questions.json");

/* GET answers listing. */
router.get("/:id", function (req, res, next) {
  const id = parseInt(req.params.id);
  const q = questions.find(q => q.id === id);
  q ? res.send({id: q.id, answerIndex: q.answerIndex}) : next();
});

router.get("/", function (req, res, next) {
  res.send(questions.map(q=>({id: q.id, answerIndex: q.answerIndex})));
});

module.exports = router;
