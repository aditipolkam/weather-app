<script>
  import { weather } from "./weatherStore.js";
  let city = "";
  console.log(localStorage.getItem("last-update"));

  const checkWeather = async () => {
    console.log(city);
    let url = "https://weather-aditipolkam.herokuapp.com/check-weather";

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        city: city || localStorage.getItem("city"),
      }),
    });

    console.log(res);
    const data = await res.json();
    //console.log(data);
    //weatherData = data;
    if (data.cod == 404) {
      alert("No such city found.");
    } else {
      weather.set(data);
      localStorage.setItem("city", data.city);
      localStorage.setItem("last-update", new Date());
    }
  };
  checkWeather();
</script>

<main>
  <div class="header">
    <div class="header-left">
      <img src="icon.jpg" alt="Logo" width="80px" />
    </div>
    <div class="header-right">
      <h1>Weatherly</h1>
      <div class="search">
        <input
          type="text"
          class="city"
          bind:value={city}
          placeholder="City"
          required
        />
        <button type="button" on:click={checkWeather} class="search-btn"
          >Search</button
        >
      </div>
    </div>
  </div>
</main>

<style>
  .header {
    display: flex;
    background: #ffffff;
  }
  .header-right {
    display: flex;
    justify-content: space-between;
    flex-basis: 100%;
    align-items: center;
    padding-right: 2vw;
  }
  .header-left {
    padding-left: 2vw;
  }
</style>
