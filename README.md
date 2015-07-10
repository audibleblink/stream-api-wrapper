# stream-api-wrapper

## Description

A super simple API wrapper for Livestream's API. 

## Usage

To get a user's account information:

```javascript

var livestreamApi = require('stream-api-wrapper')

livestreamApi.account('6488818', function(err, accountInfo{
    if (err) {
        console.error(err)
    } else {
        console.log(accountInfo)
    }
})

```
