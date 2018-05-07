const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/twitter');

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
})

db.once('open', () => {
  console.log('mongoose connected successfully');
})

const tweetSchema = mongoose.Schema({
  created_at: { type: String, required: true },
  text: { type: String, required: true },
  url: { type: String, required: true },
  user: { type: String, required: true },
  profile_img: { type: String, required: true },
  favorite_count: { type: Number, required: true },
  retweet_count: { type: Number, required: true },
});

const tweet = mongoose.model('Tweet', tweetSchema);

module.exports = db;