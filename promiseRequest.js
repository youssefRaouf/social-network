const request = require('request')

module.exports = (data) => {
  return new Promise((resolve, reject) => {
    request(data, (error, response, body) => {
      if (error) {
        reject(error || response.statusCode)
      }
      resolve(body)
    })
  })
}
