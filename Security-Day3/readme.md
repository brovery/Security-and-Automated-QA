# PostgreSQL and NodeJS

Check out the blog post >> http://mherman.org/blog/2015/02/12/postgresql-and-nodejs

Check out the original project >> https://github.com/mjhea0/node-postgres-todo

This is a basic single page application built with Node, Express, Angular, and PostgreSQL.

## Quick Start

1. Clone the repo
1. Install dependencies: `npm install`
1. Start your Postgres server and create a database called "todo"
1. Create the database tables: `node server/models/database.js`
1. Start the server: `$ npm start`

## SQL injection practice

1. Enter a new task that will do something else as well. For example, try entering: `legit to-do task!'); INSERT INTO items(complete, text) values(true, 'You''ve been hacked!'); select now(`. Feel free to wreck as much as you can, though. Have fun!
2. Now protect the server against SQLi attacks.

## XSS attack practice

1. Enter a new task that will execute some javascript when echoed back to the screen. For example, try entering: `span>I'm a benign to-do task, I swear!</span><script>alert('Ha ha... You have been hacked!')</script>`. Have fun!
2. Now protect the app against XSS attacks. Hint: AngularJS makes it kind of easy by default.

## Tests

This comes with a load test using [Apache Bench](http://httpd.apache.org/docs/2.2/programs/ab.html) that by default exercises the API endpoint for the `/api/v1/todos` service:

```sh
sh tests/load-test.sh
```

Using this load test it is possible to verify several things:

- that the database is using as many connections as expected (it polls
  PostgreSQL for the number of active connections while it runs)
- the performance of the combined system under different loads

See the comments in the [script](https://github.com/mjhea0/node-postgres-todo/blob/master/test/load-test.sh) for more information.

