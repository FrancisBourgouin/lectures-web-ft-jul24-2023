const request = require('request');
const requestPromise = require("request-promise")
// Async!

// Fetch the data from an API
// API => Something that you request
// API => Application Programming Interface

const weatherString = `
Montreal, CA
24°C
Feels like 24°C. Overcast clouds. Moderate breeze
 5.7m/s SSW
1011hPa
Humidity:
73%
UV:
1
Dew point:
18°C
Visibility:
10.0km
`

const weatherApiResponse = {
  "coord": {
    "lon": 10.99,
    "lat": 44.34
  },
  "weather": [
    {
      "id": 501,
      "main": "Rain",
      "description": "moderate rain",
      "icon": "10d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 298.48,
    "feels_like": 298.74,
    "temp_min": 297.56,
    "temp_max": 300.05,
    "pressure": 1015,
    "humidity": 64,
    "sea_level": 1015,
    "grnd_level": 933
  },
  "visibility": 10000,
  "wind": {
    "speed": 0.62,
    "deg": 349,
    "gust": 1.18
  },
  "rain": {
    "1h": 3.16
  },
  "clouds": {
    "all": 100
  },
  "dt": 1661870592,
  "sys": {
    "type": 2,
    "id": 2075663,
    "country": "IT",
    "sunrise": 1661834187,
    "sunset": 1661882248
  },
  "timezone": 7200,
  "id": 3163858,
  "name": "Zocca",
  "cod": 200
}


// Async Flow
// Not everything will be async all the time

// const stuffToDoWhenTheSetTimeoutIsFinished = () => {
//   console.log("Hello!")
//   console.log("How")
//   console.log("Are")
//   console.log("You...")
// }

// setTimeout(stuffToDoWhenTheSetTimeoutIsFinished, 1000)

// Where's the temp ? Line 38!
const temperature = weatherApiResponse.main.temp
// Temp is weird! Temp is in Kelvin, convert to C
const convertedTemp = Math.round(temperature - 273.15)
// Weather is at line 32
const weather = weatherApiResponse.weather[0].description


const formatTheWeatherResponse = weatherData => {
  const temperature = weatherData.main.temp
  const convertedTemp = Math.round(temperature - 273.15)
  const weather = weatherData.weather[0].description

  let messageBuffer = "Current Weather Information!\n"

  messageBuffer += `The temperature is currently ${convertedTemp} \n`
  messageBuffer += `The weather is currently ${weather} \n`

  messageBuffer += "--- END OF REPORT! ---"

  console.log(messageBuffer)
}


// formatTheWeatherResponse(weatherApiResponse)
const APIKEY = ""
const city = "Vancouver"

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`

console.log("Fetching data...")
request(url, (err, response, body) => {
  if (err) {
    return console.log(err)
  }

  const convertedBody = JSON.parse(body)
  if (convertedBody.cod === "404") {
    return console.log("OH NO")
  }

  formatTheWeatherResponse(convertedBody)

  console.log("Fetching of data is complete.")
})


requestPromise(url)
  .then(weatherData => {
    const convertedWeatherData = JSON.parse(weatherData)
    formatTheWeatherResponse(convertedWeatherData)
  })
  .catch(err => console.log(err.statusCode || 'Bad url probably!'))