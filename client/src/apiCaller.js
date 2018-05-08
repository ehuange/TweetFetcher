// require('dotenv').config( { path: '../../.env' } );
// const request = require('request');

// const credentials = `${process.env.CONSUMER_KEY}:${process.env.CONSUMER_SECRET}`;
// const credentialsBase64Encoded  = new Buffer(credentials).toString('base64');

// request({
//   url: 'https://api.twitter.com/oauth2/token',
//   method:'POST',
//   headers: {
//     'Authorization': `Basic ${credentialsBase64Encoded}`,
//     'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
//   },
//   body: 'grant_type=client_credentials'
// }, (err, response, body) => {
//   if (err) {
//     console.log('err');
//   }
//   console.log(body);
//   return body // the bearer token ...
// });


// `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=realdonaldtrump&count=2`

/*[
	{
		"created_at": "Mon May 07 18:44:32 +0000 2018",
		"id": 993562242124865500,
		"id_str": "993562242124865536",
		"text": "I will be announcing my decision on the Iran Deal tomorrow from the White House at 2:00pm.",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America🇺🇸",
			"url": "https://t.co/OMxB0x7xC5",
			"entities": {
				"url": {
					"urls": [
						{
							"url": "https://t.co/OMxB0x7xC5",
							"expanded_url": "http://www.Instagram.com/realDonaldTrump",
							"display_url": "Instagram.com/realDonaldTrump",
							"indices": [
								0,
								23
							]
						}
					]
				},
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 51561384,
			"friends_count": 46,
			"listed_count": 87645,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 25,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 37496,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1525193951",
			"profile_link_color": "1B95E0",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 19127,
		"favorite_count": 65958,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Mon May 07 17:20:50 +0000 2018",
		"id": 993541175511527400,
		"id_str": "993541175511527425",
		"text": "National Prescription Drug #TakeBackDay numbers are in! Another record broken: nearly 1 MILLION pounds of Rx pills… https://t.co/Gk15e2Oygs",
		"truncated": true,
		"entities": {
			"hashtags": [
				{
					"text": "TakeBackDay",
					"indices": [
						27,
						39
					]
				}
			],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/Gk15e2Oygs",
					"expanded_url": "https://twitter.com/i/web/status/993541175511527425",
					"display_url": "twitter.com/i/web/status/9…",
					"indices": [
						116,
						139
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America🇺🇸",
			"url": "https://t.co/OMxB0x7xC5",
			"entities": {
				"url": {
					"urls": [
						{
							"url": "https://t.co/OMxB0x7xC5",
							"expanded_url": "http://www.Instagram.com/realDonaldTrump",
							"display_url": "Instagram.com/realDonaldTrump",
							"indices": [
								0,
								23
							]
						}
					]
				},
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 51561384,
			"friends_count": 46,
			"listed_count": 87645,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 25,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 37496,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1525193951",
			"profile_link_color": "1B95E0",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 9923,
		"favorite_count": 44114,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Mon May 07 14:08:37 +0000 2018",
		"id": 993492804985872400,
		"id_str": "993492804985872385",
		"text": "The United States does not need John Kerry’s possibly illegal Shadow Diplomacy on the very badly negotiated Iran De… https://t.co/Cj3oXHLWCC",
		"truncated": true,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/Cj3oXHLWCC",
					"expanded_url": "https://twitter.com/i/web/status/993492804985872385",
					"display_url": "twitter.com/i/web/status/9…",
					"indices": [
						117,
						140
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America🇺🇸",
			"url": "https://t.co/OMxB0x7xC5",
			"entities": {
				"url": {
					"urls": [
						{
							"url": "https://t.co/OMxB0x7xC5",
							"expanded_url": "http://www.Instagram.com/realDonaldTrump",
							"display_url": "Instagram.com/realDonaldTrump",
							"indices": [
								0,
								23
							]
						}
					]
				},
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 51561384,
			"friends_count": 46,
			"listed_count": 87645,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 25,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 37496,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1525193951",
			"profile_link_color": "1B95E0",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 24224,
		"favorite_count": 81610,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Mon May 07 13:35:32 +0000 2018",
		"id": 993484478633922600,
		"id_str": "993484478633922560",
		"text": "Is this Phony Witch Hunt going to go on even longer so it wrongfully impacts the Mid-Term Elections, which is what… https://t.co/7LtsbGyV80",
		"truncated": true,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/7LtsbGyV80",
					"expanded_url": "https://twitter.com/i/web/status/993484478633922560",
					"display_url": "twitter.com/i/web/status/9…",
					"indices": [
						116,
						139
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America🇺🇸",
			"url": "https://t.co/OMxB0x7xC5",
			"entities": {
				"url": {
					"urls": [
						{
							"url": "https://t.co/OMxB0x7xC5",
							"expanded_url": "http://www.Instagram.com/realDonaldTrump",
							"display_url": "Instagram.com/realDonaldTrump",
							"indices": [
								0,
								23
							]
						}
					]
				},
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 51561384,
			"friends_count": 46,
			"listed_count": 87645,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 25,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 37496,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1525193951",
			"profile_link_color": "1B95E0",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 17855,
		"favorite_count": 68392,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Mon May 07 13:29:49 +0000 2018",
		"id": 993483042177118200,
		"id_str": "993483042177118208",
		"text": "Lisa Page, who may hold the record for the most Emails in the shortest period of time (to her Lover, Peter S), and… https://t.co/J2IoD9Im6W",
		"truncated": true,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/J2IoD9Im6W",
					"expanded_url": "https://twitter.com/i/web/status/993483042177118208",
					"display_url": "twitter.com/i/web/status/9…",
					"indices": [
						116,
						139
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America🇺🇸",
			"url": "https://t.co/OMxB0x7xC5",
			"entities": {
				"url": {
					"urls": [
						{
							"url": "https://t.co/OMxB0x7xC5",
							"expanded_url": "http://www.Instagram.com/realDonaldTrump",
							"display_url": "Instagram.com/realDonaldTrump",
							"indices": [
								0,
								23
							]
						}
					]
				},
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 51561384,
			"friends_count": 46,
			"listed_count": 87645,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 25,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 37496,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1525193951",
			"profile_link_color": "1B95E0",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 16605,
		"favorite_count": 63190,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Mon May 07 13:05:44 +0000 2018",
		"id": 993476979893723100,
		"id_str": "993476979893723137",
		"text": "Good luck to Ric Grenell, our new Ambassador to Germany. A great and talented guy, he will represent our Country well!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America🇺🇸",
			"url": "https://t.co/OMxB0x7xC5",
			"entities": {
				"url": {
					"urls": [
						{
							"url": "https://t.co/OMxB0x7xC5",
							"expanded_url": "http://www.Instagram.com/realDonaldTrump",
							"display_url": "Instagram.com/realDonaldTrump",
							"indices": [
								0,
								23
							]
						}
					]
				},
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 51561384,
			"friends_count": 46,
			"listed_count": 87645,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 25,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 37496,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1525193951",
			"profile_link_color": "1B95E0",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 9728,
		"favorite_count": 50825,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Mon May 07 13:00:18 +0000 2018",
		"id": 993475610377932800,
		"id_str": "993475610377932801",
		"text": "“The Great Revolt” by Salena Zito and Brad Todd does much to tell the story of our great Election victory. The Forg… https://t.co/SKPwJEfZKQ",
		"truncated": true,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/SKPwJEfZKQ",
					"expanded_url": "https://twitter.com/i/web/status/993475610377932801",
					"display_url": "twitter.com/i/web/status/9…",
					"indices": [
						117,
						140
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America🇺🇸",
			"url": "https://t.co/OMxB0x7xC5",
			"entities": {
				"url": {
					"urls": [
						{
							"url": "https://t.co/OMxB0x7xC5",
							"expanded_url": "http://www.Instagram.com/realDonaldTrump",
							"display_url": "Instagram.com/realDonaldTrump",
							"indices": [
								0,
								23
							]
						}
					]
				},
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 51561384,
			"friends_count": 46,
			"listed_count": 87645,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 25,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 37496,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1525193951",
			"profile_link_color": "1B95E0",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 10024,
		"favorite_count": 44486,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Mon May 07 11:39:53 +0000 2018",
		"id": 993455375755173900,
		"id_str": "993455375755173892",
		"text": "The 13 Angry Democrats in charge of the Russian Witch Hunt are starting to find out that there is a Court System in… https://t.co/W32TtSNOrw",
		"truncated": true,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/W32TtSNOrw",
					"expanded_url": "https://twitter.com/i/web/status/993455375755173892",
					"display_url": "twitter.com/i/web/status/9…",
					"indices": [
						117,
						140
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America🇺🇸",
			"url": "https://t.co/OMxB0x7xC5",
			"entities": {
				"url": {
					"urls": [
						{
							"url": "https://t.co/OMxB0x7xC5",
							"expanded_url": "http://www.Instagram.com/realDonaldTrump",
							"display_url": "Instagram.com/realDonaldTrump",
							"indices": [
								0,
								23
							]
						}
					]
				},
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 51561384,
			"friends_count": 46,
			"listed_count": 87645,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 25,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 37496,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1525193951",
			"profile_link_color": "1B95E0",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 24254,
		"favorite_count": 85780,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Mon May 07 11:27:34 +0000 2018",
		"id": 993452275648680000,
		"id_str": "993452275648679938",
		"text": "The Russia Witch Hunt is rapidly losing credibility. House Intelligence Committee found No Collusion, Coordination… https://t.co/MMfLEunjG6",
		"truncated": true,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/MMfLEunjG6",
					"expanded_url": "https://twitter.com/i/web/status/993452275648679938",
					"display_url": "twitter.com/i/web/status/9…",
					"indices": [
						116,
						139
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America🇺🇸",
			"url": "https://t.co/OMxB0x7xC5",
			"entities": {
				"url": {
					"urls": [
						{
							"url": "https://t.co/OMxB0x7xC5",
							"expanded_url": "http://www.Instagram.com/realDonaldTrump",
							"display_url": "Instagram.com/realDonaldTrump",
							"indices": [
								0,
								23
							]
						}
					]
				},
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 51561384,
			"friends_count": 46,
			"listed_count": 87645,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 25,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 37496,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1525193951",
			"profile_link_color": "1B95E0",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 18188,
		"favorite_count": 71157,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Mon May 07 11:04:47 +0000 2018",
		"id": 993446539988217900,
		"id_str": "993446539988217857",
		"text": "My highly respected nominee for CIA Director, Gina Haspel, has come under fire because she was too tough on Terrori… https://t.co/sPDbQc2rmd",
		"truncated": true,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/sPDbQc2rmd",
					"expanded_url": "https://twitter.com/i/web/status/993446539988217857",
					"display_url": "twitter.com/i/web/status/9…",
					"indices": [
						117,
						140
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America🇺🇸",
			"url": "https://t.co/OMxB0x7xC5",
			"entities": {
				"url": {
					"urls": [
						{
							"url": "https://t.co/OMxB0x7xC5",
							"expanded_url": "http://www.Instagram.com/realDonaldTrump",
							"display_url": "Instagram.com/realDonaldTrump",
							"indices": [
								0,
								23
							]
						}
					]
				},
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 51561384,
			"friends_count": 46,
			"listed_count": 87645,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 25,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 37496,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1525193951",
			"profile_link_color": "1B95E0",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 21491,
		"favorite_count": 77193,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Mon May 07 10:53:49 +0000 2018",
		"id": 993443781281271800,
		"id_str": "993443781281271808",
		"text": "To the great people of West Virginia we have, together, a really great chance to keep making a big difference. Prob… https://t.co/vn66DoqfXx",
		"truncated": true,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/vn66DoqfXx",
					"expanded_url": "https://twitter.com/i/web/status/993443781281271808",
					"display_url": "twitter.com/i/web/status/9…",
					"indices": [
						117,
						140
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America🇺🇸",
			"url": "https://t.co/OMxB0x7xC5",
			"entities": {
				"url": {
					"urls": [
						{
							"url": "https://t.co/OMxB0x7xC5",
							"expanded_url": "http://www.Instagram.com/realDonaldTrump",
							"display_url": "Instagram.com/realDonaldTrump",
							"indices": [
								0,
								23
							]
						}
					]
				},
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 51561384,
			"friends_count": 46,
			"listed_count": 87645,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 25,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 37496,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1525193951",
			"profile_link_color": "1B95E0",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 12915,
		"favorite_count": 48046,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sat May 05 21:35:50 +0000 2018",
		"id": 992880573025865700,
		"id_str": "992880573025865729",
		"text": "Thank you Cleveland, Ohio! https://t.co/ROEFRLY7jP",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/ROEFRLY7jP",
					"expanded_url": "https://www.pscp.tv/w/bb4aMDFvTlFsTFJub1dwUXd8MWRSSlplUXdxQW9HQjLT8gBVQABO7l7kCsXVzAl9vI4ThsxJq6NsxnAmvlqz",
					"display_url": "pscp.tv/w/bb4aMDFvTlFs…",
					"indices": [
						27,
						50
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America🇺🇸",
			"url": "https://t.co/OMxB0x7xC5",
			"entities": {
				"url": {
					"urls": [
						{
							"url": "https://t.co/OMxB0x7xC5",
							"expanded_url": "http://www.Instagram.com/realDonaldTrump",
							"display_url": "Instagram.com/realDonaldTrump",
							"indices": [
								0,
								23
							]
						}
					]
				},
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 51561384,
			"friends_count": 46,
			"listed_count": 87645,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 25,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 37496,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1525193951",
			"profile_link_color": "1B95E0",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 15518,
		"favorite_count": 72462,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Sat May 05 00:31:30 +0000 2018",
		"id": 992562394051293200,
		"id_str": "992562394051293186",
		"text": "Our high level delegation is on the way back from China where they had long meetings with Chinese leaders and busin… https://t.co/HGTEQMJrPG",
		"truncated": true,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/HGTEQMJrPG",
					"expanded_url": "https://twitter.com/i/web/status/992562394051293186",
					"display_url": "twitter.com/i/web/status/9…",
					"indices": [
						117,
						140
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America🇺🇸",
			"url": "https://t.co/OMxB0x7xC5",
			"entities": {
				"url": {
					"urls": [
						{
							"url": "https://t.co/OMxB0x7xC5",
							"expanded_url": "http://www.Instagram.com/realDonaldTrump",
							"display_url": "Instagram.com/realDonaldTrump",
							"indices": [
								0,
								23
							]
						}
					]
				},
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 51561384,
			"friends_count": 46,
			"listed_count": 87645,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 25,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 37496,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1525193951",
			"profile_link_color": "1B95E0",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 17135,
		"favorite_count": 77223,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sat May 05 00:17:34 +0000 2018",
		"id": 992558888212947000,
		"id_str": "992558888212946949",
		"text": "Just returned home to the beautiful White House, from Dallas, where the Arena was packed to the rafters with the gr… https://t.co/5jKrLoTcmD",
		"truncated": true,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/5jKrLoTcmD",
					"expanded_url": "https://twitter.com/i/web/status/992558888212946949",
					"display_url": "twitter.com/i/web/status/9…",
					"indices": [
						117,
						140
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America🇺🇸",
			"url": "https://t.co/OMxB0x7xC5",
			"entities": {
				"url": {
					"urls": [
						{
							"url": "https://t.co/OMxB0x7xC5",
							"expanded_url": "http://www.Instagram.com/realDonaldTrump",
							"display_url": "Instagram.com/realDonaldTrump",
							"indices": [
								0,
								23
							]
						}
					]
				},
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 51561384,
			"friends_count": 46,
			"listed_count": 87645,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 25,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 37496,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1525193951",
			"profile_link_color": "1B95E0",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 17921,
		"favorite_count": 93426,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Sat May 05 00:08:03 +0000 2018",
		"id": 992556495182155800,
		"id_str": "992556495182155776",
		"text": "Great book just out by very successful businessman @AndyPuzder. Always known as somebody who knows how to win, “Cap… https://t.co/EpbiTO9GHs",
		"truncated": true,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "AndyPuzder",
					"name": "Andy Puzder",
					"id": 17494466,
					"id_str": "17494466",
					"indices": [
						51,
						62
					]
				}
			],
			"urls": [
				{
					"url": "https://t.co/EpbiTO9GHs",
					"expanded_url": "https://twitter.com/i/web/status/992556495182155776",
					"display_url": "twitter.com/i/web/status/9…",
					"indices": [
						117,
						140
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America🇺🇸",
			"url": "https://t.co/OMxB0x7xC5",
			"entities": {
				"url": {
					"urls": [
						{
							"url": "https://t.co/OMxB0x7xC5",
							"expanded_url": "http://www.Instagram.com/realDonaldTrump",
							"display_url": "Instagram.com/realDonaldTrump",
							"indices": [
								0,
								23
							]
						}
					]
				},
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 51561384,
			"friends_count": 46,
			"listed_count": 87645,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 25,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 37496,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1525193951",
			"profile_link_color": "1B95E0",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 9384,
		"favorite_count": 47644,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Fri May 04 22:56:13 +0000 2018",
		"id": 992538416196804600,
		"id_str": "992538416196804608",
		"text": "I want to thank all of our friends and patriots at the @NRA. We will never fail, and we will always protect your Se… https://t.co/4GCOdVeiqv",
		"truncated": true,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "NRA",
					"name": "NRA",
					"id": 21829541,
					"id_str": "21829541",
					"indices": [
						55,
						59
					]
				}
			],
			"urls": [
				{
					"url": "https://t.co/4GCOdVeiqv",
					"expanded_url": "https://twitter.com/i/web/status/992538416196804608",
					"display_url": "twitter.com/i/web/status/9…",
					"indices": [
						117,
						140
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/#!/download/ipad\" rel=\"nofollow\">Twitter for iPad</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America🇺🇸",
			"url": "https://t.co/OMxB0x7xC5",
			"entities": {
				"url": {
					"urls": [
						{
							"url": "https://t.co/OMxB0x7xC5",
							"expanded_url": "http://www.Instagram.com/realDonaldTrump",
							"display_url": "Instagram.com/realDonaldTrump",
							"indices": [
								0,
								23
							]
						}
					]
				},
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 51561384,
			"friends_count": 46,
			"listed_count": 87645,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 25,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 37496,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1525193951",
			"profile_link_color": "1B95E0",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 17742,
		"favorite_count": 70893,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Fri May 04 21:59:28 +0000 2018",
		"id": 992524132884664300,
		"id_str": "992524132884664321",
		"text": "We are going to demand Congress secure the border in the upcoming CR. Illegal immigration must end!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America🇺🇸",
			"url": "https://t.co/OMxB0x7xC5",
			"entities": {
				"url": {
					"urls": [
						{
							"url": "https://t.co/OMxB0x7xC5",
							"expanded_url": "http://www.Instagram.com/realDonaldTrump",
							"display_url": "Instagram.com/realDonaldTrump",
							"indices": [
								0,
								23
							]
						}
					]
				},
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 51561384,
			"friends_count": 46,
			"listed_count": 87645,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 25,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 37496,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1525193951",
			"profile_link_color": "1B95E0",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 24228,
		"favorite_count": 111356,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Fri May 04 21:58:44 +0000 2018",
		"id": 992523949698412500,
		"id_str": "992523949698412544",
		"text": "Democrats and liberals in Congress want to disarm law-abiding Americans at the same time they are releasing dangero… https://t.co/Bm4XpXBswG",
		"truncated": true,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/Bm4XpXBswG",
					"expanded_url": "https://twitter.com/i/web/status/992523949698412544",
					"display_url": "twitter.com/i/web/status/9…",
					"indices": [
						117,
						140
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America🇺🇸",
			"url": "https://t.co/OMxB0x7xC5",
			"entities": {
				"url": {
					"urls": [
						{
							"url": "https://t.co/OMxB0x7xC5",
							"expanded_url": "http://www.Instagram.com/realDonaldTrump",
							"display_url": "Instagram.com/realDonaldTrump",
							"indices": [
								0,
								23
							]
						}
					]
				},
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 51561384,
			"friends_count": 46,
			"listed_count": 87645,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 25,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 37496,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1525193951",
			"profile_link_color": "1B95E0",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 35191,
		"favorite_count": 125389,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Fri May 04 20:37:47 +0000 2018",
		"id": 992503576852394000,
		"id_str": "992503576852393985",
		"text": "All of us here today are united by the same timeless values. We believe that our liberty is a gift from our creator… https://t.co/JTq9VefLWZ",
		"truncated": true,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/JTq9VefLWZ",
					"expanded_url": "https://twitter.com/i/web/status/992503576852393985",
					"display_url": "twitter.com/i/web/status/9…",
					"indices": [
						117,
						140
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America🇺🇸",
			"url": "https://t.co/OMxB0x7xC5",
			"entities": {
				"url": {
					"urls": [
						{
							"url": "https://t.co/OMxB0x7xC5",
							"expanded_url": "http://www.Instagram.com/realDonaldTrump",
							"display_url": "Instagram.com/realDonaldTrump",
							"indices": [
								0,
								23
							]
						}
					]
				},
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 51561384,
			"friends_count": 46,
			"listed_count": 87645,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 25,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 37496,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1525193951",
			"profile_link_color": "1B95E0",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 17966,
		"favorite_count": 69563,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "en"
	},
	{
		"created_at": "Fri May 04 13:27:50 +0000 2018",
		"id": 992395376039727100,
		"id_str": "992395376039727104",
		"text": "JUST OUT: 3.9% Unemployment. 4% is Broken! In the meantime, WITCH HUNT!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America🇺🇸",
			"url": "https://t.co/OMxB0x7xC5",
			"entities": {
				"url": {
					"urls": [
						{
							"url": "https://t.co/OMxB0x7xC5",
							"expanded_url": "http://www.Instagram.com/realDonaldTrump",
							"display_url": "Instagram.com/realDonaldTrump",
							"indices": [
								0,
								23
							]
						}
					]
				},
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 51561384,
			"friends_count": 46,
			"listed_count": 87645,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 25,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 37496,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1525193951",
			"profile_link_color": "1B95E0",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 30667,
		"favorite_count": 134497,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Fri May 04 10:57:26 +0000 2018",
		"id": 992357529362583600,
		"id_str": "992357529362583552",
		"text": "Going to Dallas (the GREAT State of Texas) today. Leaving soon!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America🇺🇸",
			"url": "https://t.co/OMxB0x7xC5",
			"entities": {
				"url": {
					"urls": [
						{
							"url": "https://t.co/OMxB0x7xC5",
							"expanded_url": "http://www.Instagram.com/realDonaldTrump",
							"display_url": "Instagram.com/realDonaldTrump",
							"indices": [
								0,
								23
							]
						}
					]
				},
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 51561384,
			"friends_count": 46,
			"listed_count": 87645,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 25,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 37496,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1525193951",
			"profile_link_color": "1B95E0",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 12365,
		"favorite_count": 81409,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Fri May 04 10:45:31 +0000 2018",
		"id": 992354530510721000,
		"id_str": "992354530510721025",
		"text": "NBC NEWS is wrong again! They cite “sources” which are constantly wrong. Problem is, like so many others, the sourc… https://t.co/XuqtOEesHg",
		"truncated": true,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/XuqtOEesHg",
					"expanded_url": "https://twitter.com/i/web/status/992354530510721025",
					"display_url": "twitter.com/i/web/status/9…",
					"indices": [
						117,
						140
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America🇺🇸",
			"url": "https://t.co/OMxB0x7xC5",
			"entities": {
				"url": {
					"urls": [
						{
							"url": "https://t.co/OMxB0x7xC5",
							"expanded_url": "http://www.Instagram.com/realDonaldTrump",
							"display_url": "Instagram.com/realDonaldTrump",
							"indices": [
								0,
								23
							]
						}
					]
				},
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 51561384,
			"friends_count": 46,
			"listed_count": 87645,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 25,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 37496,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1525193951",
			"profile_link_color": "1B95E0",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 20643,
		"favorite_count": 84615,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Fri May 04 10:37:48 +0000 2018",
		"id": 992352585863651300,
		"id_str": "992352585863651329",
		"text": "Andy McCarthy will be on  @LouDobbs tonight. 7:00 P.M. , @FoxBusiness.",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [
				{
					"screen_name": "LouDobbs",
					"name": "Lou Dobbs",
					"id": 26487169,
					"id_str": "26487169",
					"indices": [
						26,
						35
					]
				},
				{
					"screen_name": "FoxBusiness",
					"name": "FOX Business",
					"id": 56413858,
					"id_str": "56413858",
					"indices": [
						57,
						69
					]
				}
			],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America🇺🇸",
			"url": "https://t.co/OMxB0x7xC5",
			"entities": {
				"url": {
					"urls": [
						{
							"url": "https://t.co/OMxB0x7xC5",
							"expanded_url": "http://www.Instagram.com/realDonaldTrump",
							"display_url": "Instagram.com/realDonaldTrump",
							"indices": [
								0,
								23
							]
						}
					]
				},
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 51561384,
			"friends_count": 46,
			"listed_count": 87645,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 25,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 37496,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1525193951",
			"profile_link_color": "1B95E0",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 5954,
		"favorite_count": 30915,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Fri May 04 10:28:58 +0000 2018",
		"id": 992350362450518000,
		"id_str": "992350362450518016",
		"text": "Because Jobs in the U.S. are doing so well, Americans receiving unemployment aid is the lowest since 1973. Great!",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": []
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America🇺🇸",
			"url": "https://t.co/OMxB0x7xC5",
			"entities": {
				"url": {
					"urls": [
						{
							"url": "https://t.co/OMxB0x7xC5",
							"expanded_url": "http://www.Instagram.com/realDonaldTrump",
							"display_url": "Instagram.com/realDonaldTrump",
							"indices": [
								0,
								23
							]
						}
					]
				},
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 51561384,
			"friends_count": 46,
			"listed_count": 87645,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 25,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 37496,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1525193951",
			"profile_link_color": "1B95E0",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 22321,
		"favorite_count": 107935,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	},
	{
		"created_at": "Fri May 04 10:22:31 +0000 2018",
		"id": 992348740529815600,
		"id_str": "992348740529815552",
		"text": "Our Southern Border is under siege. Congress must act now to change our weak and ineffective immigration laws. Must… https://t.co/JDTz0IUwMc",
		"truncated": true,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [],
			"urls": [
				{
					"url": "https://t.co/JDTz0IUwMc",
					"expanded_url": "https://twitter.com/i/web/status/992348740529815552",
					"display_url": "twitter.com/i/web/status/9…",
					"indices": [
						117,
						140
					]
				}
			]
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 25073877,
			"id_str": "25073877",
			"name": "Donald J. Trump",
			"screen_name": "realDonaldTrump",
			"location": "Washington, DC",
			"description": "45th President of the United States of America🇺🇸",
			"url": "https://t.co/OMxB0x7xC5",
			"entities": {
				"url": {
					"urls": [
						{
							"url": "https://t.co/OMxB0x7xC5",
							"expanded_url": "http://www.Instagram.com/realDonaldTrump",
							"display_url": "Instagram.com/realDonaldTrump",
							"indices": [
								0,
								23
							]
						}
					]
				},
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 51561384,
			"friends_count": 46,
			"listed_count": 87645,
			"created_at": "Wed Mar 18 13:46:38 +0000 2009",
			"favourites_count": 25,
			"utc_offset": -14400,
			"time_zone": "Eastern Time (US & Canada)",
			"geo_enabled": true,
			"verified": true,
			"statuses_count": 37496,
			"lang": "en",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": true,
			"profile_background_color": "6D5C18",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1525193951",
			"profile_link_color": "1B95E0",
			"profile_sidebar_border_color": "BDDCAD",
			"profile_sidebar_fill_color": "C5CEC0",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": null,
			"follow_request_sent": null,
			"notifications": null,
			"translator_type": "regular"
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 19316,
		"favorite_count": 78571,
		"favorited": false,
		"retweeted": false,
		"lang": "en"
	}
] 
*/