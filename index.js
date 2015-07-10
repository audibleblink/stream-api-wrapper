var request = require('request')
var when    = require('when')

var API_URL = 'https://api.new.livestream.com'

module.exports = {
  account: getAccount
}

function getAccount(number){
  var dfd = when.defer()

  var endpoint = "accounts"
  var fullUrl  = [API_URL, endpoint, number].join("/")

  request(fullUrl, function(err, res, body){
    err ? dfd.reject(err) : dfd.resolve(JSON.parse(body))
  })

  return dfd.promise

}
