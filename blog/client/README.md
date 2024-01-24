## Client 

The mission is create an App that has 2 main components, which are Post List, where the post will be desplayed it and Create Post, this last one it will have two child components that are Create Comment and comments list

<img src="./App sctructure.PNG">



In order to make a request to our Express api i will install axios module

To install this module type `npm i axios`

Now we can fect the Express api

# Excuting

- When i try to run the react code it brings an error code in console

`Access to XMLHttpRequest at 'http://localhost:4000/posts' from origin 'http://localhost:5173' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.`

Anytime we make a request different than our local host it will throw an error, it's a mismatch between domaind browser and server.

I need to make addtional configuration in the server, it will be a small change in post and comment.

-1. Install package cors
`npm i cors`
-2. Make changes in servers files
 - 1. import cors module
   ```js
   const cors = require('cors');
   ```
   -2. Add it to the Middleware
   ```js
   app.use(cors());
   ```
