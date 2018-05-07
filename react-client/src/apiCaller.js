require('dotenv').config( { path: '../../.env' } );
const request = require('request');

const credentials = `${process.env.CONSUMER_KEY}:${process.env.CONSUMER_SECRET}`;
const credentialsBase64Encoded  = new Buffer(credentials).toString('base64');

request({
  url: 'https://api.twitter.com/oauth2/token',
  method:'POST',
  headers: {
    'Authorization': `Basic ${credentialsBase64Encoded}`,
    'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
  },
  body: 'grant_type=client_credentials'
}, (err, response, body) => {
  if (err) {
    console.log('err');
  }
  console.log(body);
  return body // the bearer token ...
});

// `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=realdonaldtrump&count=2`