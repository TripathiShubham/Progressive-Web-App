const express = require('express');
const http = require('http');
const path = require('path');
const webPush = require('web-push');
const bodyParser = require('body-parser');
const _ = require('lodash');
var notificationMessage;;

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(express.static(path.join(__dirname, '/')));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'assets')));

let vapidKeys = {
  publicKey: 'BGomc-_HqD1EDSci3ANUnfsByBwtSuWQkDTVoif2Q4kt7jFvOXlPy6gmovx2WDDM6ZYfGlHZzi0KN9Cu1cnkdok',
  privateKey: 'On6L6G0MzTNJB9Nuvz0pXvXi11orL9lXB2dnGuLcj3g'
};

webPush.setVapidDetails(
  'mailto:shubham.tripathi@atmecs.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// Store subscribers in memory
let subscriptions = [];

// Allow clients to subscribe to this application server for notifications
app.post('/subscribe', (req, res) => {
  const body = JSON.stringify(req.body);
  let sendMessage;
  if (_.includes(subscriptions, body)) {
    sendMessage = "Already subscribed";
  } else {
    subscriptions.push(body);

    sendMessage = "Subscription added";
  }
  webPush.sendNotification(JSON.parse(body), "You are now subscribed for notification, say thanks to shubham... ;)")
  .then(success => console.log(success))
  .catch(error => console.log(error));
  res.send(sendMessage);
});

function sendNotification() {
  console.log("Sending notification");
  subscriptions.map((subscription, index) => {
    let jsonSub = JSON.parse(subscription);
  
    var ran = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(ran);
  
    switch (ran) {
      case 1:
        notificationMessage = "Lets do it"
        break;
      case 2:
        notificationMessage = "Nice one :)"
        break;
      case 3:
        notificationMessage = "Hureeee :)"
        break;
      case 4:
        notificationMessage = "Yrrrr...getting bored :("
        break;
      case 5:
        notificationMessage = "Lets party tonight :)"
        break;
    }
    console.log(notificationMessage);
    // Use the web-push library to send the notification message to subscribers
    webPush.sendNotification(jsonSub, notificationMessage)
      .then(success => console.log(success))
      .catch(error => console.log(error));
  });  
}

setInterval(function () {
  sendNotification();
}, 300000);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

const port = process.env.PORT || '4200';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Running`));
