<script lang="ts">
  let { age } = $props();
</script>

<div
  class="hero bg-linear-to-b from-base-300 from-75% to-base-100 min-h-screen"
>
  <div class="hero-content flex-col lg:flex-row-reverse">
    <figure>
      <div
        class="carousel rounded-box w-70 avatar rounded-full w-60 ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2"
      >
        <div class="carousel-item w-full">
          <enhanced:img src="$lib/images/skull.webp" alt="my avatar" />
        </div>
        <div class="carousel-item w-full">
          <enhanced:img src="$lib/images/irl_vr.webp" alt="me in VR" />
        </div>
        <div class="carousel-item w-full">
          <enhanced:img
            src="$lib/images/skull_woke.webp"
            alt="my avatar but woke"
          />
        </div>
      </div>
      <p class="text-center text-gray-500 mt-2">swipe here for more images!</p>
    </figure>
    <div class="text-primary-content">
      <h2 class="text-3xl font-bold text-primary mb-5">
        Damian C.
        <div
          class="badge bg-gradient-to-b from-pink-600 from-30% via-purple-600 via-50% to-blue-700 to-70% ml-3"
        >
          HIM
        </div>
      </h2>
      <h3 class="text-md">aka <b class="text-xl">Whacky</b></h3>
      <p>I am <b><code>{age}</code></b> years old.</p>
      <br />
      <ul>
        <li>
          💼 I currently know a few programming languages, like: C and Zig.
        </li>
        <li>
          🌱 Currently learning Zig (Zigmaxxing). I also want to learn Lua in
          the future.
        </li>
        <li>
          ❤️ I love systems-level programming and the segfaults that come with
          it!
        </li>
        <li>
          💬 Ask me anything <a
            href="https://github.com/wh4ky/wh4ky/issues"
            class="text-info">here</a
          >.
        </li>
      </ul>
    </div>
  </div>
</div>
