<script>
  import { weather } from "./weatherStore.js";
  //console.log($weather);
</script>

<main>
  <div class="weather-card">
    <div class="weathercard-left">
      <div class="weather-icon">
        <img src={$weather.imgurl} alt="" />
      </div>
      <h3 class="weather-desc">{$weather.weather_desc}</h3>
    </div>
    <div class="weathercard-right">
      <div class="card-title">{$weather.city}, {$weather.country}</div>
      <div class="temp">{$weather.temperature} &#8451;</div>
      <div class="sun">
        <div class="rise">
          <img src="sunrise.png" alt="" />
          <span>{$weather.sunrise}</span>
        </div>
        <div class="set">
          <img src="sunset.png" alt="" />
          <span>{$weather.sunset}</span>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  main {
    margin-top: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .weather-icon img {
    aspect-ratio: 1/1;
  }

  .rise span,
  .set span {
    font-size: 0.9em;
  }

  .temp {
    font-size: x-large;
    margin-bottom: 1vh;
  }
  .weather-card {
    background: #a9a9de66;
    border-radius: 10px;
    padding: 5vh;
    width: 40%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .weathercard-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .weathercard-right {
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .card-title {
    font-size: 2em;
    font-weight: 600;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    margin-bottom: 1vh;
  }

  .sun {
    display: flex;
    justify-content: space-between;
    width: 13vw;
    margin-bottom: 1vh;
  }

  .rise,
  .set {
    justify-content: center;
    display: flex;
  }

  .sun img {
    width: 30px;
  }
</style>
