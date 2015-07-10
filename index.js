var request = require('request')
var API_URL = 'https://api.new.livestream.com'

module.exports = {
  account: getAccount
}

function getAccount(number){
  var fullUrl = createUrl('accounts', number)
  return createPromise('get', fullUrl)
}


function createUrl(endpoint, path){
  return [API_URL, endpoint, path].join("/")
}

function createPromise(method, uri) {
  var options = {method: method, uri: uri}
  return new Promise(function(resolve, reject) {
    request(options, function(err, res, body){
      err ? reject(err) : resolve(body)
    })
  })
}
