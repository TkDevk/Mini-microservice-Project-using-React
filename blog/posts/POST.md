Import modules

```js
const express = require('express');
const { randomBytes } = require('crypto');
const bodyParser = require('body-parser');

```

I will use `bodyParser` as middleware in order to parse the body request

```js
const app = express();
app.use(bodyParser.json());
```
I create an Express app and then i use `use` to indicate that i will use `bodyParser`to get acces and parse the body incoming request.

So as i'm not going to use a Data Base to store the data, i will do it in the memory so i set 

```js
const posts ={};

```
To set an empty object where store the route data

- I will associate 2 differents routes Post request and Get request

It responds with the posts object when a GET request is made to /posts.

Get request:

```js
app.get('/posts',(req,res)=>{
    res.send(posts); // pass the object that i'm gonna return
});

```

Post request:

```js
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

```

With ``status(201)`` the server will notify to the client when the request is create

This modification:

```js
"scripts": {
    "start": "nodemon index.js"
},
```
allows me to run the server with nodemon, which automatically restarts the server when changes are made to the code.
