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
    console.log(apidata);

    if (apidata.cod == 200) {
      var d = new Date(0);
      let icon = apidata.weather[0].icon;
      let imgurl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      const data = {
        cod: apidata.cod,
        city: apidata.name,
        country: apidata.sys.country,
        imgurl: imgurl,
        weather: apidata.weather[0].main,
        weather_desc: apidata.weather[0].description,
        temperature: apidata.main.temp,
        sunrise: new Date(apidata.sys.sunrise * 1000).toLocaleTimeString(),
        sunset: new Date(apidata.sys.sunset * 1000).toLocaleTimeString(),
      };

      res.json(data);
      console.log(data);
    } else {
      res.json(apidata);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
