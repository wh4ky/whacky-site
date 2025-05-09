<script lang="ts">
  const friends: { src: string; href: string; alt: string; tooltip: string }[] =
    [
      {
        src: "https://avatars.githubusercontent.com/u/103201875?v=4",
        href: "https://prpl.wtf/",
        alt: "Emma's profile",
        tooltip: "Emma",
      },
      {
        src: "https://avatars.githubusercontent.com/u/46420489?v=4",
        href: "",
        alt: "JSW's profile",
        tooltip: "JSW",
      },
      {
        src: "https://avatars.githubusercontent.com/u/158269354?v=4",
        href: "https://geen-dolfijn.nl/",
        alt: "Definitely Not A Dolphin's profile",
        tooltip: "Definitely Not A Dolphin",
      },
    ];
</script>

<footer
  class="footer sm:footer-horizontal bg-linear-to-b from-base-100 from-1% to-base-300 text-neutral-content items-center p-5"
>
  <nav class="grid-flow-col items-center">
    <h6 class="footer-title" id="Friends">Friends</h6>
    {#each friends as friend}
      <div class="tooltip w-11" data-tip={friend.tooltip}>
        <a href={friend.href}
          ><img
            class="avatar rounded-full"
            src={friend.src}
            alt={friend.alt}
          /></a
        >
      </div>
    {/each}
  </nav>
  <nav
    class="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-2xl"
  >
    <a
      class="tooltip"
      data-tip="Signal"
      href="https://signal.me/#@whacky.08"
      aria-label="Signal"
    >
      <span class="iconify icon-[lineicons--signal-app]"></span>
    </a>
    <a
      class="tooltip"
      data-tip="E-mail"
      href="mailto:damian.whacky@proton.me"
      aria-label="E-mail"
    >
      <span class="iconify icon-[mdi--email]"></span>
    </a>
    <a
      class="tooltip"
      data-tip="GitHub"
      href="https://github.com/wh4ky/"
      aria-label="GitHub"
    >
      <span class="iconify icon-[mdi--github]"></span>
    </a>
    <a
      class="tooltip"
      data-tip="Discord"
      href="https://discord.com/users/663014201345835053"
      aria-label="Discord"
    >
      <span class="iconify icon-[mdi--discord]"></span>
    </a>
    <a
      class="tooltip"
      data-tip="Last.fm"
      href="https://www.last.fm/user/whackydev"
      aria-label="Last.fm"
    >
      <span class="iconify icon-[mdi--lastfm]"></span>
    </a>
  </nav>
</footer>
