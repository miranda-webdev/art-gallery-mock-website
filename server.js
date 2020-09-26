const express = require('express');
const path = require("path");
const app = express();

const {MongoClient} = require('mongodb');
const uri = require('./db');
const instance = new MongoClient(uri.uri, { useNewUrlParser: true, useUnifiedTopology: true });

const port = process.env.PORT || 5000;

try {
  // Connect to the MongoDB cluster
  instance.connect((err, client) => {
    const eventsdb = client.db('events').collection('events')
              .find({type: 'event'}).sort({eventDate: 1}).toArray();
    eventsdb.then( result => {
      app.get('/events_db', (req, res) => {
        // res.send({events: 'arrived at events db'});
        // console.log(result);
       res.send(result)
      });
    });
    

  });
  console.log('Connected to database');


  // const eventsdb = client.db('events').collection('events')
  //             .find({type: 'events'}).sort({eventDate: 1}).toArray();
  // app.get('/events_db', (req, res) => {
  //   res.send(eventsdb);
  // });
} catch (e) {
  console.error(e);
} finally {
  instance.close();
}

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// app.get('/events_db', (req, res) => {
//   res.send({events: 'events have been reached'})
// });

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));