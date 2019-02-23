# Issue-Logger
MEAN stack application that will be used for logging issues

## Technologies used

### Babel 

Babel is being used as a transpiler. Babel takes code written in one language and compiles it to another. The use of babel in this project is to allow the use of ECMAScript 6 with babel compiling to ECMAScript 5 at runtime.

Babel-watch is used to compile ES6 to ES5 in real time. This package listens for any changes needing to take place and does them immediately. This is done by setting the following script: "dev": "babel-watch server.js".

### Express 

Used as middleware between server and database. Allows for methods that make it easier to make http requests.

### Mongoose 

Connects to MongoDB database and accesses it in an object oriented way.

### Cors

Another middleware used in conjunction with Express which allows for cross origin resource sharing. This allows you to access resources from another domain, outside of your server. If you are going to use a MongoDB database server that is not running on your local machine or on your webserver, you will need cors.

### BodyParser

You need to use bodyParser() if you want the form data to be available in req.body.

### app.use and how it works

when app.use() is called with a function as it’s only argument:

```app.use(function(req, res) {
  // stuff
});```

It’ll match every request.
That function will act as middleware.

When app.use() is called with the a signature of the form:

app.use('/test', cb);
It’ll only match requests that start with /test.