<script>
</script>

<main>
  <div class="weather-card">
    <div class="weathercard-left">
      <div class="weather-icon">
        <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="" />
      </div>
      <h3 class="weather-desc">overcast clouds</h3>
    </div>
    <div class="weathercard-right">
      <div class="card-title">Pune, IN</div>
      <div class="temp">22.07 &#8451;</div>
      <div class="sun">
        <div class="rise"><img src="sunrise.png" alt="" /> 6:01 am</div>
        <div class="set"><img src="sunset.png" alt="" /> 6:53 pm</div>
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
