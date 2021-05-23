const express = require('express');
const bodyparser = require('express');
const axios = require('axios');

const app = express();

app.use(bodyparser.json());

const events = [];
app.post('/events', (req, res) => {
  const event = req.body;

  events.push(event);

  axios.post('http://localhost:4000/events', event).catch((err) => {
    console.log('4000 ', err);
  });

  axios.post('http://localhost:4001/events', event).catch((err) => {
    console.log('4001 ', err);
  });

  axios.post('http://localhost:4002/events', event).catch((err) => {
    console.log('4002 ', err);
  });

  axios.post('http://localhost:4003/events', event).catch((err) => {
    console.log('4003 ', err);
  });

  res.send({ status: 'OK' });
});

app.get('/events', (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log('Listening on 4005');
});
