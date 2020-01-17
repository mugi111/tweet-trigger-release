# tweet-trigger-publish-release

Tweet automatically after publishing a release.

## Usage
1. Save this yaml file to .github/workflow and rewrite `tweet_body`.
```yaml
name: "tweet-trigger-release"
on:
  release:
    types: [published]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Tweet-trigger-publish-release
        uses: mugi111/tweet-trigger-release@v1.1
        with:
          consumer_key: ${{ secrets.CONSUMER_KEY }}
          consumer_secret: ${{ secrets.CONSUMER_SECRET }}
          access_token_key: ${{ secrets.ACCESS_TOKEN_KEY }}
          access_token_secret: ${{ secrets.ACCESS_TOKEN_SECRET }}
          tweet_body: 'Tweet text'
```

2. Store Twitter token and key in secret with the following name.  
CONSUMER_KEY  
CONSUMER_SECRET  
ACCESS_TOKEN_KEY  
ACCESS_TOKEN_SECRET
