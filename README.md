# stream-api-wrapper

## Description

A super simple promise API wrapper for Livestream's API.

## Usage

To get a user's account information:

```javascript

var livestreamApi = require('stream-api-wrapper')

livestreamApi.account('6488818')
  .then(function(accountInfo) {
    console.log(accountInfo)
  })
  .catch(function(err){
    console.error(err)
  })

```
