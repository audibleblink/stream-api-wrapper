# stream-api-wrapper

## Description

A super simple API wrapper for Livestream's API.

To use the `when` promise library, check out the [promises](../../tree/promises) branch

To use native node Promises(> v0.12), check out [native-promises](../../tree/native-promises) branch

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
