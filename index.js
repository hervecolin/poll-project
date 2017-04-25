//console.log("ça marche");
var express = require('express');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const polls= [
  {
    id: 1,
    question:"question ?",
    answers :["réponse 1", "reponse 2", "réponse 3"],
    votes: []
  },
  {
    id: 2,
    question: "question 2 ?",
    answers :["réponse 1", "reponse 2", "réponse 3"],
    votes: [1, 0, 0, 2, 1, 0, 1, 1]
  }
];

app.get('/polls', function (req, res) {
  res.send(polls);
});

app.get('/polls/:id', function (req, res) {
  const id = parseInt(req.params.id, 10);
  const poll = polls.find(p => p.id === id);   //find renvoie le premier element ou object du test alors que filter renvoie un array avec l'ensemble des valeursex => poll.filter(p =>P.votes.length>10 array des sondages qui ont plus de 10 votes )

  if (typeof (poll) !== 'undefined'){
    res.send(poll);
  } else {
    res.sendStatus(404);
  }
});
app.post('/polls', function (req, res) {
  if(typeof(req.body.question) !=='string'){
     return  res.sendStatus(400);
  }
  if (!array.isArray(answers) ||
      answers.some(a => typeof(a) !== 'string')){
      return res.sendStatus(400);
  }
 const id = polls.reduce((max,p) => max > p.id ? max : p.id, 0) + 1 ;

 const poll = {
   id, question, answers,
   votes : []
 };

polls.push(poll);

res.send(201,poll);


  res.send('OK');
});

app.listen(3000, () =>{
  console.log('listen on port 3000');
});
