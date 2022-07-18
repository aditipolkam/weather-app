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
    const data = JSON.parse(body);

    res.json(data);
    console.log(data);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
