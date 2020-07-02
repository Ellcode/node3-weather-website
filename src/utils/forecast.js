const request = require('request')

const forecast = (latitude,longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=be89335d15ef6e2b360cec02715eb406&query=' + latitude + ',' + longitude

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('not find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. it is currently ' + body.current.temperature + ' degree out. the humidity is ' + body.current.humidity + '%. It feels like ' + body.current.feelslike + ' degree out.')
        }   
    })
}

module.exports = forecast