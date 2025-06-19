const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url1 = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=17b38ee5c95f12e5ed62af677bb096b8';

    request({ url, json: true }, (error, response) => {
        if (error) {
            console.log(error);
            callback('Unable to connect to weather service!', undefined)
        } else if (error) {
            callback('Unable to find location', undefined)
        } else {
            //callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
            callback(undefined, response)

        }
    })
}

module.exports = forecast