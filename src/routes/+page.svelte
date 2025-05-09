<script lang="ts">
  import IntroHero from "../components/IntroHero.svelte";
  import GitHubCarousel from "../components/GitHub.svelte";
  import Footer from "../components/Footer.svelte";

  // 31557600000 = 1000 * 60 * 60 * 24 * 365.25
  const bdate: number = new Date(2008, 3, 21).getTime();
  var age: number = (new Date().getTime() - bdate) / 31557600000;
  setInterval(() => {
    age = (new Date().getTime() - bdate) / 31557600000;
  }, 1000);
</script>

<svelte:head>
  <title>Whacky | About</title>
  <meta name="description" content="About Whacky." />
</svelte:head>

<IntroHero age={age.toFixed(8)} />
<GitHubCarousel />
<div class="my-[20vh]"></div>
<Footer />
