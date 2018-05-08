require('dotenv').config();
const request = require('request');
const save = require('../db')

const credentials = `${process.env.CONSUMER_KEY}:${process.env.CONSUMER_SECRET}`;
const credentialsBase64Encoded  = new Buffer(credentials).toString('base64');

const getToken = (cb) => { 
  const options = {
    url: 'https://api.twitter.com/oauth2/token',
    method:'POST',
    headers: {
      'Authorization': `Basic ${credentialsBase64Encoded}`,
      'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: 'grant_type=client_credentials'
  }
  request(options, cb);
}

const getTweets = (username, token, cb) => {
  const options = {
    url: `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${username}&count=25`,
    headers: {
      'Authorization': `Bearer ${token.access_token}`,
      'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
    }
  }
  request(options, cb);
}


module.exports = {
  
  getTweetsForUser: (req, res) => {
    const { username } = req.body;
    let token;
    getToken((err, result) => {
      if (err) {
        console.log('Error with getToken', err);
        return;
      } else {
        token = JSON.parse(result.body);
        getTweets(username, token, (error, tweets) => {
          console.log('token is.. ', token);
          if (err) {
            console.log('error with getTweets', error);
          } 
          res.send(JSON.parse(tweets.body));
        })
      }
    });
  } 

}