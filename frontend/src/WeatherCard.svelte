<script>
</script>

<main>
  <div class="weather-card">
    <div class="weathercard-left">
      <div class="weather-icon">
        <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="" />
      </div>
      <div class="card-title">Pune, IN</div>
    </div>
    <div class="weathercard-right">
      <div class="weather-desc">overcast clouds</div>
      <div class="temp">22.07</div>
      <div class="sun">
        <div class="rise">6:01 am</div>
        <div class="set">6:53 am</div>
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
    width: 120%;
  }
  .weather-card {
    background: #a9a9de66;
    border-radius: 10px;
    padding: 2vh;
    width: 50%;
    display: flex;
    flex-wrap: wrap;
  }

  .weathercard-left {
    display: flex;
    flex-direction: column;
    width: 40%;
    justify-content: center;
    align-items: center;
  }

  .weathercard-right {
    width: 60%;
  }

  .card-title {
    font-size: 2em;
    font-weight: 600;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
</style>
