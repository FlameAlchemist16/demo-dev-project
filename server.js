const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');

const app = express();

let userGoal = 'Learn DevOps basics'

app.set('view engine', 'ejs')

app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('index', {userGoal});
});

app.post('/store-goal', (req,res) =>{
    const enteredGoal = req.body.goal;
    console.log(enteredGoal);
    userGoal = enteredGoal;
    res.redirect('/');
});

app.listen(80);