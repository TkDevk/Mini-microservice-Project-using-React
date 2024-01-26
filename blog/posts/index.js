//Create small express app, it will implment post and get methods for the Post Service

//1- Require Express
const express = require('express');
//id identifiers
const {randomBytes} = require('crypto');
//check body data
const bodyParser = require('body-parser');
//to solve the mismatch issue
const cors = require('cors');
//import serverless-http
const serverless = require("serverless-http");


//2- create new app express
const app = express();
//Middleware
app.use(bodyParser.json());
//I will save data with cors
app.use(cors());

const posts ={};


//3- associate 2 differents routes post and get

app.get('/posts',(req,res)=>{
    res.send(posts); // pass the object that i'm gonna return
});

/**Create new post but i need to create a unique id in order to identify my elements*/
app.post('/posts', (req,res)=>{
    const id = randomBytes(4).toString('hex') //Generate an id of 4 bytes, then use toString to transfor to hex
    //The user will send a body with title property
    const {title} = req.body;

    posts[id] = {
        id,
        title,
    };
    //Response back to user, and make sure i will receieve the right data

    res.status(201).send(posts[id]);
});

// 4- Checks if the Express app it's listening in the right port

/*
app.listen(4000,()=>{
    console.log('Listening at post 4000');
})
*/
// As i'm not going to store into data base, i will store(data) in memory

/**
 * That's why:
 const posts ={};


//3- associate 2 differents routes
app.get('/posts',(req,res)=>{
    res.send(posts);
});
 */

//Lets add some modification in the json file


//Delete "test": "echo \"Error: no test specified\" && exit 1" and replace it for this : "start": "nodemon index.js"

// I need to add a handler at the bottom to export  my app wrapped in the serverless function
module.exports.handler=serverless(app);