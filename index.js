var request = require('request-promise')
var API_URL = 'https://api.new.livestream.com'

module.exports = {
  account: getAccount
}

function getAccount(number){
  var endpoint = "accounts"
  var fullUrl  = [API_URL, endpoint, number].join("/")
  return request(fullUrl)
}
