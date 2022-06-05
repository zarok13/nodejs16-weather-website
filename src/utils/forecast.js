const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9d116048b4a7ae189cd556e9d6e5a273&query=' + latitude + ',' + longitude;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location!', undefined);
        } else {
            callback(0, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out. It feels like  ' + body.current.feelslike + ' degress out.');
        }
    });
}

module.exports = forecast;