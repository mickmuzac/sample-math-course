var router = require('express').Router();

exports.index = function (req, res) {
  res.render('home/index', {
    title: 'Node Express Mongoose Boilerplate'
  });
};

router.get('/:number', function(req, res){

    var number = parseInt(req.params.number);
    if(isNaN(number) || number < 1 || number > 3) throw new Error("Question number is out of range");
    else if(!req.user) throw new Error("You must be logged in to take the test");

    var a = parseInt(Math.random() * 25);
    var b = parseInt(Math.random() * 25);
    var title = `This is the test! ${a} + ${b} + ${req.params.number}`;
    var user = req.user;

    res.render('question/assess', { a, b, user, title } );
});

router.get('/', function(req, res){

});

router.post('/answer', function(req, res){
    var a = parseInt(req.body.a);
    var b = parseInt(req.body.b);
    var answer = parseInt(req.body.answer);

    if(a + b === answer){

    }
    else{

    }
});

module.exports = router;
