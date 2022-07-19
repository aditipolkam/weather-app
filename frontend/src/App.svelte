<script>
  import Header from "./Header.svelte";
  import WeatherCard from "./WeatherCard.svelte";
  import { weather } from "./weatherStore.js";
</script>

<main>
  <Header />
  {#if $weather != null}
    <WeatherCard />
  {/if}
</main>

<style>
</style>
