var router = require('express').Router();
const maxQs = 3;

exports.index = function (req, res) {
  res.render('home/index', {
    title: 'Node Express Mongoose Boilerplate'
  });
};

router.get('/:number', function(req, res){

    var number = parseInt(req.params.number);
    if(number === maxQs + 1) res.redirect("/");
    else if(isNaN(number) || number < 1 || number > maxQs) throw new Error("Question number is out of range");

    var a = parseInt(Math.random() * 25);
    var b = parseInt(Math.random() * 25);
    var title = `This is the test! ${a} + ${b} + ${req.params.number}`;
    var user = req.user;
    var testing = true;

    res.render('question/assess', { a, b, user, title, number, testing } );
});

router.get('/', function(req, res){

});

router.post('/answer', function(req, res){
    var a = parseInt(req.body.a);
    var b = parseInt(req.body.b);
    var answer = parseInt(req.body.answer);
    var number = parseInt(req.body.number) + 1;

    if(a + b === answer){

    }
    else{

    }

    res.redirect('/question/' + number);
});

module.exports = router;
