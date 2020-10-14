const express = require('express');
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

const { MongoClient } = require('mongodb');
const uri = require('./db').uri;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// allow cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// GET /api/events
async function loadEventsDB() {
  const eventsDB = client.db("events").collection("events");

  const result = await eventsDB.find({}).sort({eventDate: 1}).toArray();

  app.get('/api/events', (req, res) => {
    res.send(result);
  })
}

async function main(){
  try {
    //connect to database
    await client.connect();
  
    //load events from db
    await loadEventsDB();
  
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));