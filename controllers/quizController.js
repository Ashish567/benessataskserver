const Question = require('./../models/questionModel');

exports.submitQuiz = async function (req, res, next) {
  console.log('api hit');
  let correct = 0;
  const { ans } = req.body;
  for (const key in ans) {
    await Question.findById(key)
      .exec()
      .then((data) => {
        if (data['correctAns'] && ans[key]) {
          if (data['correctAns'].trim() === ans[key].trim()) correct += 1;
        }
      });
  }
  res.status(200).send({ correctAns: correct });
};

exports.getQuiz = async function (req, res, next) {
  console.log('getting quiz');
  await Question.find({})
    .exec()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(' question err');
      console.log(err);
      res.status(500).send({
        ...err,
      });
    });
};
