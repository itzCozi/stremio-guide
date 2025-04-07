<script>
  import { Info } from "lucide-svelte";
</script>

<style>
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    color: #ffffff;
    margin-block: 1rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
    color: #ffffff;
    margin-block: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffffff;
    margin-block: 0.5rem;
  }

  code {
    font-family: monospace;
    font-style: bold;
    background-color: #2e2e2e;
    color: #ffffff;
    border: solid rgba(0, 0, 0, 0.3) 1px;
    padding: 0.2rem 0.4rem;
  }

  strong {
    color: #dfdfdf;
  }

  em {
    font-style: italic;
    color: #dfdfdf;
  }

  footer {
    color: #a0a0a0;
  }

  .dimmed {
    color: #c0c0c0;
  }

  a {
    color: #64e668;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  ol,
  ul {
    margin-block: 1rem;
    padding-left: 1.5rem;
    list-style-type: disc;
  }

  ol {
    list-style-type: decimal;
  }

  li::marker,
  ol::marker {
    font-style: italic;
    font-weight: bold;
    color: #dfdfdf;
  }

  img {
    max-width: 100%;
    height: auto;
    margin-block: 1rem;
    border-radius: 1px;
    border: solid rgba(0, 0, 0, 0.3) 1px;
  }

  .admonition {
    padding: 0.8rem 1rem;
    margin-block: 1rem;
    border-radius: 1px;
  }

  .admonition.note {
    background-color: #2d3829;
    color: #8fbf8f;
  }

  .admonition.note p {
    color: #8fbf8f;
  }

  .admonition.note strong {
    color: #8fbf8f;
  }

  .admonition-title {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  blockquote {
    margin-block: 1rem;
    padding: 0.25rem 0.8rem;
    border-left: 4px solid #4caf50;
  }

  hr {
    border: 0;
    height: 1px;
    margin-block: 1rem;
    background: #757575;
  }

  .block {
    max-width: 62rem;
    border: solid #353535 1px;
    background-color: #2b2b2b;
    padding: 1.7rem;
    border-radius: 1px;
  }
</style>

<div class="items-center justify-center min-h-screen p-3">
  <div class="mx-auto max-w-2xl block">
    <h1>How to Use Stremio</h1>
    <p>
      Hi! Say goodbye to Sudo's prime and hello to developers leaving a project 💀. In light of
      this, we all need free media, so I put together a guide (it's super simple just follow the
      steps) to get the best streaming service that works on desktop, mobile (Android, NOT iOS), and
      FireStick!
    </p>
    <br />

    <p><strong>Preview of Stremio<strong></strong></strong></p>
    <div class="flex justify-center">
      <img
        alt="Preview"
        referrerpolicy="same-origin"
        src="https://i.postimg.cc/P5CBwrVn/preview.gif"
        title="Preview" />
    </div>

    <h3>Prerequisites</h3>
    <ol>
      <li>You need the Stremio client.</li>
      <li>You need the appropriate addons for streaming.</li>
      <li>You need a Real-Debrid subscription (~$5 a month).</li>
    </ol>
    <p><strong>Can I Do This for Free?</strong></p>
    <p>
      Yes. Skip the Real-Debrid subscription and just use the plain Torrentio addon. The setup is
      the same, but you must set the "Debrid Provider" to "None" in the Torrentio configuration.
      This will not be nearly as fast, and you may need to use a VPN based on where you live as a
      Debrid service will not be protecting you.
    </p>

    <h2>Guide</h2>
    <hr />
    <h2><em>1.</em> Real-Debrid Token Guide</h2>

    <p>
      What is Real-Debrid? Real-Debrid is a service that allows you to download and stream all kinds
      of content, from software, music, and games to adult content and 4K movies (40GB+), hosted on
      supported premium file hosters like Rapidgator, Uploaded, FileFactory, Turbobit, Nitroflare,
      etc at great speeds (1+ Gbps). It also caches a lot of torrents, giving you instant
      download/streaming capabilities without the need for seeders.
    </p>
    <br />

    <p><strong>Getting Your Real-Debrid Subscription and API Token</strong></p>
    <ol>
      <li>
        Head to <a
          href="http://real-debrid.com/?id=11626869"
          rel=""
          target="_blank">real-debrid.com</a> and click "Sign Up" in the top right.
      </li>
      <li>Ensure your VPN is turned <em>off</em>, create an account, and then sign in.</li>
      <li>
        Now that you have an account, go to <a
          href="http://real-debrid.com/?id=11626869"
          rel=""
          target="_blank">real-debrid.com/premium</a>
        and purchase a premium subscription plan.
        <em>(I recommend the 90-day option ~10$ USD)</em>
      </li>
      <li>Complete the payment using your selected method.</li>
      <li>
        Once you have a subscription, go to <a
          href="https://real-debrid.com/apitoken?id=11626869"
          rel=""
          target="_blank">real-debrid.com/apitoken</a>
        and copy your token.
        <em>Store it somewhere safe, as you WILL need it later.</em>
      </li>
    </ol>

    <div class="admonition note">
      <div class="flex flex-row gap-1">
        <Info class="h-5 w-auto items-center" />
        <p class="admonition-title">Real Debrid Limits</p>
      </div>
      Keep in mind that Real-Debrid only allows devices on the same network as you. It supports unlimited
      devices on one IP at a time. You do <strong>NOT</strong> need to use a VPN while using Real Debrid.
    </div>

    <h2><em>2.</em> Stremio Setup</h2>
    <hr />

    <p>
      Stremio is a streaming client designed around P2P file sharing. It is highly customizable,
      even featuring an SDK that allows you to add your own features. Its biggest advantage is that
      it syncs to
      <a
        href="https://trakt.tv"
        rel=""
        target="_blank">Trakt.tv</a
      >, which can recommend new media and track your progress and watch lists.
    </p>
    <br />

    <p><strong>Installing Stremio &amp; Setting up Torrentio</strong></p>
    <ol>
      <li>
        Download the client by heading to <a
          href="https://www.stremio.com/downloads"
          rel=""
          target="_blank">stremio.com/downloads</a> and selecting the appropriate version for your device.
      </li>
      <li>
        Run the downloaded file and follow the setup instructions. You will need to create an
        account. <em>Your login is important to remember.</em>
      </li>
      <li>
        You should now be on the Stremio home screen. It should look purplish, similar to sudo-flix
        but slightly different.
      </li>
      <li>
        Click the puzzle piece in the left sidebar labeled "Addons" and switch to your browser.
      </li>
      <li>
        In your browser, go to <a
          href="https://torrentio.strem.fun/lite/configure"
          rel=""
          target="_blank">torrentio.strem.fun</a
        >. There will be many options; most are self-explanatory, so I won’t go over them.
      </li>
      <li>
        Scroll down to "Debrid provider," select "Real-Debrid," and paste your API token into the
        "Real-Debrid API Key" input field.
      </li>
      <li>
        Click the purple "Install" button. This should open Stremio and prompt you to choose
        "Install," "Configure," or "Cancel".
      </li>
      <li>
        If the purple button does not open Stremio, right-click the button to copy its link, then
        paste it into the Stremio search bar
      </li>
    </ol>

    <blockquote>
      I highly recommend enabling "Hardware-accelerated decoding" in the "Advanced" section of the
      player settings (this setting can be found below the plugins on the sidebar).
    </blockquote>

    <p><strong>Additional Addons May Ask for Your API Key</strong></p>
    <p>
      When installing other addons that aren't Torrentio, you may be asked for your Real-Debrid API
      token again. I <em>highly</em> recommend entering your token if prompted, as it significantly speeds
      up your streaming experience. Any addons found online from reputable sources, as well as those
      listed in the "Community Addons" section, are fair game.
    </p>

    <h2><em>3.</em> Extra Setup &amp; Customization</h2>
    <hr />

    <h3>FireStick Setup</h3>
    <ol>
      <li>Go to the home screen of your FireStick and click on your profile on the right.</li>
      <li>
        Click on "Settings," then "My Fire TV," and click the "About" button 7 times quickly to
        enable developer options (<a
          href="https://www.firesticktricks.com/developer-options-firestick.html"
          rel=""
          target="_blank">guide</a
        >).
      </li>
      <li>Head to the Amazon App Store, search for "Downloader," and install it.</li>
      <li>
        Once "Downloader" is installed, go back to developer settings and turn on "Install Unkown
        Apps" for "Downloader".
      </li>
      <li>
        Open Downloader and go to <a
          href="https://www.stremio.com/downloads"
          rel=""
          target="_blank">stremio.com/downloads</a> to download the Android TV version.
      </li>
      <li>
        Once downloaded, click "Install" and then "Open." <em
          >(If you're having trouble clicking "Install," use a game controller.)</em>
      </li>
      <li>Sign in to your Stremio account, either on your phone or desktop.</li>
      <li>
        Once signed in, click on "Addons" and then "Sync Addons" to sync your addons from your
        account to your FireStick.
      </li>
    </ol>

    <h3>Android Setup</h3>
    <p>
      <strong
        >Stremio can be installed from the <a
          href="https://play.google.com/store/apps/details?id=com.stremio.one"
          rel=""
          target="_blank">Play Store</a
        ></strong>
    </p>
    <ol>
      <li>
        Download the appropriate APK for your device from Stremio's download page (you will most
        likely need to download the ARM64 APK).
      </li>
      <li>Install the downloaded APK.</li>
      <li>Login to your Stremio account.</li>
    </ol>

    <h3>
      Logging Into <a
        href="http://Trakt.tv"
        rel=""
        target="_blank">Trakt.tv</a>
    </h3>
    <ol>
      <li>
        First, create a Trakt account <a
          href="https://trakt.tv/dashboard"
          rel=""
          target="_blank">here</a
        >.
      </li>
      <li>Open Stremio and click the gear in the left sidebar labeled "Settings".</li>
      <li>
        Scroll down a little and you should see a heading labeled "Trakt Scrobbling", click the
        "Authenticate" button beside it.
      </li>
      <li>
        You will be taken to a Trakt page where you will need to authorize Stremio to access your
        account.
      </li>
      <li>
        Once authorized, try watching something from your media library. It should now be tracked on
        Trakt.
      </li>
    </ol>

    <h3>Different Debrid Providers</h3>
    <p>
      There are multiple Debrid providers available, some better than others. I (and many others)
      recommend Real-Debrid due to its popularity, speed, features, and affordability. However,
      there are many other providers. The reason these aren't used in this guide is due to their
      lack of compatibility with other addons, whereas Real-Debrid is widely supported. However,
      there are cheaper providers such as AllDebrid, Debrid-Link, and Torbox to name a few.
    </p>
    <br />

    <p>
      <strong
        >Other Debrid providers can be found <a
          href="https://guides.viren070.me/stremio/setup#which-debrid-service-do-i-use"
          rel=""
          target="_blank">here</a
        >.</strong>
    </p>
    <ul>
      <li>
        <a
          href="https://real-debrid.com/?id=11626869"
          rel=""
          target="_blank">Real Debrid</a>
      </li>
      <li>
        <a
          href="https://alldebrid.com/"
          rel=""
          target="_blank">AllDebrid</a>
      </li>
      <li>
        <a
          href="https://www.premiumize.me/"
          rel=""
          target="_blank">Premiumize</a>
      </li>
      <li>
        <a
          href="https://debrid-link.com/"
          rel=""
          target="_blank">Debrid-Link</a>
      </li>
      <li>
        <a
          href="https://offcloud.com/"
          rel=""
          target="_blank">Offcloud</a>
      </li>
      <li>
        <a
          href="https://put.io/"
          rel=""
          target="_blank">Put.io</a>
      </li>
      <li>
        <a
          href="https://torbox.app/"
          rel=""
          target="_blank">Torbox</a>
      </li>
      <li>
        <a
          href="https://bestdebrid.com/"
          rel=""
          target="_blank">Best Debrid</a>
      </li>
    </ul>

    <h3>Other Addons</h3>
    <p>
      <strong
        >Other unlisted addons can be downloaded from <a
          href="https://stremio-addons.com/"
          rel=""
          target="_blank">here</a
        >.</strong>
    </p>
    <ul>
      <li>
        <a
          href="https://stremio-addons.com/subhero.html"
          rel=""
          target="_blank">SubHero</a
        >: SubHero is a Stremio addon that provides subtitles for movies and TV shows using the
        Wyzie Subs API (which I also run).
      </li>
      <li>
        <a
          href="https://2ecbbd610840-trakt.baby-beamup.club/"
          rel=""
          target="_blank">Trakt TV</a
        >: Addon for getting Trakt's public user lists, recommendations, and watch list.
      </li>
      <li>
        <a
          href="https://stremio-addons.com/cyberflix-catalog.html"
          rel=""
          target="_blank">Cyberflix Catalog</a
        >: Aggregates the most popular steaming platforms such as Netflix, Amazon Prime or Hulu, and
        also specific catalogs for Kids, Asian or Anime.
      </li>
      <li>
        <a
          href="https://stremio-addons.com/usa-tv.html"
          rel=""
          target="_blank">USA TV</a
        >: USA TV provides access to channels across various categories including local channels,
        news, sports, entertainment, and more.
      </li>
      <li>
        <a
          href="https://mediafusion.elfhosted.com/configure/"
          rel=""
          target="_blank">MediaFusion</a
        >: Addon for live TV and sports events.
      </li>
      <li>
        <a
          href="https://5a0d1888fa64-orion.baby-beamup.club/"
          rel=""
          target="_blank">Orion</a
        >: Orion Stremio Addon allows Orion-indexed torrent, usenet, and hoster links to be played
        on Stremio.
      </li>
    </ul>
    <p>
      <em
        >Most of these are "Community Addons" and can be found in the Stremio "Community Addons"
        section of your client for quick install.</em>
    </p>

    <h2>More Questions?</h2>
    <hr />

    <ul>
      <li>
        <a
          href="https://guides.viren070.me/stremio"
          rel=""
          target="_blank">Stremio User Manual</a>
      </li>
      <li>
        <a
          href="https://www.reddit.com/r/StremioAddons/comments/yi5jdw/ultimate_guide_to_stremio_torrentio_rd/"
          rel=""
          target="_blank">Guide to Stremio Torrentio RD</a>
      </li>
      <li>
        <a
          href="https://www.firesticktricks.com/stremio-firestick.html"
          rel=""
          target="_blank">FireStick Stremio Setup</a>
      </li>
      <li>
        <a
          href="https://www.comparitech.com/kodi/what-is-stremio/#:~:text=First%20you'll%20need%20a,allowed%20to%20access%20your%20account."
          rel=""
          target="_blank">Signing Into Trakt</a>
      </li>
      <li>
        <a
          href="https://real-debrid.com/?id=11626869"
          rel=""
          target="_blank">Real-Debrid</a>
      </li>
    </ul>

    <p class="dimmed">
      Please reach out to me if any issues arise. This guide's source code is available
      <a
        href="https://github.com/itzcozi/stremio-guide"
        rel=""
        target="_blank">here</a
      >. I'm open to additions and corrections via pull requests :)
    </p>
  </div>
  <footer class="mt-8 text-center text-type-dimmed text-sm">
    <p class="flex justify-center items-center space-x-2">
      <!-- svelte-ignore a11y_consider_explicit_label -->
      <a
        href="https://github.com/itzcozi/stremio-guide"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:scale-105 text-dark transition duration-200"
        alt="Github link"
        title="Github">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
          class="w-5 h-5 fill-current"
          alt="Github SVG">
          <path
            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
          ></path>
        </svg>
      </a>
      <!-- svelte-ignore a11y_consider_explicit_label -->
      <a
        href="https://x.com/sudoflix"
        class="hover:scale-105 text-dark transition duration-200"
        alt="Twitter link"
        title="Twitter">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          class="w-5 h-5 fill-current"
          alt="Twitter SVG">
          <path
            d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
          ></path>
        </svg>
      </a>
      <!-- svelte-ignore a11y_consider_explicit_label -->
      <a
        href="mailto:dev@wyzie.ru"
        class="hover:scale-105 text-dark transition duration-200"
        alt="Email link"
        title="Email">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 1920"
          class="w-5 h-5 fill-current"
          alt="Email SVG">
          <path
            d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z"
            fill-rule="evenodd"></path>
        </svg>
      </a>
    </p>
    <p class="mt-2 footer">
      Created by
      <a
        href="https://github.com/itzcozi"
        class="font-semibold transition duration-100 underline"
        alt="Developer social link"
        title="Developer Github link">BadDeveloper</a>
      with 💚
    </p>
  </footer>
</div>
