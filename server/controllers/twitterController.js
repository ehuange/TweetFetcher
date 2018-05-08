require('dotenv').config();
const request = require('request');
const axios = require('axios');

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

module.exports = {

  getToken: (req, res) => {
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
  },
  
  getTweetsForUser: async (req, res) => {
    try {
      const { username } = req.body;
      request({
        url: `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${username}&count=25`,
        method: 'GET',
        headers: {
          'Authorization': `Bearer AAAAAAAAAAAAAAAAAAAAAOb05wAAAAAAdN0dgU%2FP8gURQcO1r8LhwObbmYU%3DfBlW1j2rSh23NdhzmeARSx50oTIkD6OKlWbHRrrZRWlXOnAGr8`,
          'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
        }
      }, (err, body) => {
        if (err) {
          console.log('Error with getting tweets for user', err);
        }
        console.log(body);
        res.send(JSON.parse(body.body));
      })
    } catch (error) {
      console.log('error with getTweetsForUser');
    } 
  }
}