const core = require('@actions/core');
const Twitter = require('twitter');

// most @actions toolkit packages have async methods
async function run() {
  try {
    const client = new Twitter({
      consumer_key: core.getInput('consumer_key'),
      consumer_secret: core.getInput('consumer_secret'),
      access_token_key: core.getInput('access_token_key'),
      access_token_secret: core.getInput('access_token_secret')
    });

    client.post('statuses/update', {status: 'tweet'}, (error, tweet) => {
      if (!error) {
          console.log(tweet);
      } else {
          console.log('error');
      }
  });
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
