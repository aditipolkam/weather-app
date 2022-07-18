const express = require("express");
const cors = require("cors");
const request = require("request");
require("dotenv").config();

const port = process.env.PORT || 3000;
const apikey = process.env.API_KEY;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.post("/check-weather", async (req, res) => {
  let city = req.body.city;
  console.log(city);
  let apiurl =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=` +
    apikey;

  request(apiurl, function (err, r, body) {
    const apidata = JSON.parse(body);

    let icon = apidata.weather.icon;
    let imgurl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    const data = {
      city: apidata.name,
      country: apidata.sys.country,
      imgurl: imgurl,
      weather: apidata.weather.main,
      weather_desc: apidata.weather.description,
      temperature: apidata.main.temp,
      sunrise: apidata.sys.sunrise,
      sunset: apidata.sys.sunset,
    };

    res.json(data);
    console.log(data);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
