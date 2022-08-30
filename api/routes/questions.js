var express = require("express");
var router = express.Router();
var questions = require("../data/questions.json");
const questionsWithoutAnswers = questions.map(q => {
  const tmp = {...q}
  // @ts-ignore
  delete tmp.answerIndex;
  return tmp;
})

/* GET questions listing. */
router.get("/:id", function (req, res, next) {
  const question = questionsWithoutAnswers[parseInt(req.params.id)]
  question ? res.send(question) : next()
});
router.get("/", function (req, res, next) {
  res.send(questionsWithoutAnswers);
});

module.exports = router;
