import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: '',
      tweets: [],
    }
    this.grabTwitterHandle = this.grabTwitterHandle.bind(this);
    this.fetchTweets = this.fetchTweets.bind(this);
  }

  grabTwitterHandle(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  
  async fetchTweets() {
    try {
      const { handle } = this.state;
      const tweets = await axios.post(`https://calm-falls-68223.herokuapp.com/twitter/getTweetsForUser`, {username: handle})
      const { data } = tweets;
      await this.setState({
        tweets: data,
        handle: '',
      })
    } catch (error) {
      console.log('Error with fetchTweets', error);
      return;
    }
  }

  render() {
    return (
      <div>
        <div>
        Please enter a public twitter handle here: 
        </div>
        <input 
        type="text" 
        name="handle" 
        value={this.state.handle}
        onChange={this.grabTwitterHandle}
        />
        <button onClick={this.fetchTweets}> Submit </button>
        {this.state.tweets.length > 0 ? this.state.tweets.map((tweet, i) => {
          return (
            <div key={i} className="tweet"> <img src={tweet.user.profile_image_url}/> <a href={tweet.user.url} target="_blank"> @{tweet.user.screen_name} </a>  : {tweet.text} tweeted at {tweet.created_at}  </div> 
          )
        }) : null
        }
      </div>
    )
  }
}