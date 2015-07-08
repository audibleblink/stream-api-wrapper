var request = require('request')
var API_URL = 'https://api.new.livestream.com'

module.exports = {
  account: getAccount
}

function getAccount(number, callback){
  var endpoint = "accounts"
  var fullUrl  = [API_URL, endpoint, number].join("/")
  request(fullUrl, function(err, res, body){
    if(err) {
      callback(err)
    } else {
      callback(null, JSON.parse(body))
    }
  })
}
