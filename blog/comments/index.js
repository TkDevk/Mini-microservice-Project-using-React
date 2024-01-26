const express = require('express');
const bodyParser = require('body-parser');
const {randomBytes} = require('crypto');
const cors = require('cors');
const serverless = require("serverless-http");

//Create express App

const app = express();
//middleware for req and res
app.use(bodyParser.json());
app.use(cors()); //it will bring a function

//object to store the comments
const commentsByPostId = {};

//Routes handlers request

//get

app.get('/posts/:id/comments', (req, res)=>{
    res.send(commentsByPostId[req.params.id] || []);
});

//post

app.post('/posts/:id/comments', (req, res)=>{
    const commentId = randomBytes(4).toString('hex');
    const {content} = req.body;
    

    //Check if there is an array
    const comments = commentsByPostId[req.params.id] || [];

    comments.push({id:commentId, content});
    commentsByPostId[req.params.id] = comments;
    res.status(201).send(comments);
});

/*
app.listen(4001,()=>{
    console.log("Listening at post 4001");
})
*/
//The server is already listening in port 4000 so i need to check if it's listening in port 4001
module.exports.handler=serverless(app);
