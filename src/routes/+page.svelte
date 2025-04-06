<script>
  import { Info } from 'lucide-svelte';
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
    background-color: #2f2f2f;
    color: #ffffff;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
    color: #dddddd;
  }

  strong {
    color: #dadada;
  }

  em {
    font-style: italic;
    color: #dddddd;
  }

  a {
    color: #4caf50;
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

  li::marker {
    font-style: italic;
    font-weight: bold;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
    margin-block: 1rem;
  }

  .admonition {
    padding: 0.7rem 1rem 0.1rem;
    margin-block: 1rem;
    border-radius: 4px;
  }

  .admonition.note {
    background-color: #2d3829;
    color: #699269;
  }

  .admonition.note p {
    color: #699269;
  }

  .admonition.note strong {
    color: #699269;
  }

  .admonition-title {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  blockquote {
    margin-block: 1rem;
    border-radius: 4px;
    padding: 0.7rem 1rem 0.1rem;
    border-left: 4px solid #4caf50;
  }

  hr {
    border: 0;
    height: 1px;
    margin-block: 1rem;
    background: #cccccc;
  }

  .items-center {
    align-items: center;
  }

  .justify-center {
    justify-content: center;
  }

  .min-h-screen {
    min-height: 100vh;
  }

  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  .max-w-2xl {
    max-width: 56rem;
    background-color: #272727;
    padding: 2rem;
    border-radius: 4px;
    box-shadow:
      0 4px 6px rgba(0, 0, 0, 0.1),
      0 1px 3px rgba(0, 0, 0, 0.06);
  }
</style>

<div class="items-center justify-center min-h-screen p-4">
  <div class="mx-auto max-w-2xl">
    <h1>How to Use Stremio</h1>
    <p>
      Hi! Say goodbye to Sudo's prime and hello to developers leaving a project 💀. In light of this, we
      all need free media, so I put together a guide to get the best streaming service that works on
      desktop, mobile (Android, <strong>NOT</strong> iOS), and FireStick!
    </p>
    <p>
      <strong>Preview of Stremio</strong><br />
      <img
        alt="Preview"
        referrerpolicy="same-origin"
        src="https://i.postimg.cc/P5CBwrVn/preview.gif"
        style=""
        title="Preview" />
    </p>

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
    <h2>Real-Debrid Token Guide</h2>

    <p>
      What is Real-Debrid? Real-Debrid is a service that allows you to download and stream all kinds
      of content, from software, music, and games to adult content and 4K movies (40GB+), hosted on
      supported premium file hosters like Rapidgator, Uploaded, FileFactory, Turbobit, Nitroflare,
      etc., at great speeds (1+ Gbps). It also caches a lot of torrent movies, giving you instant
      download/streaming without the need for seeders.
    </p>

    <p><strong>Getting Your Real-Debrid Subscription and API Token</strong></p>
    <ol>
      <li>
        Head to <a
          href="http://real-debrid.com/?id=11626869"
          rel=""
          target="_blank">real-debrid.com</a> and click "Sign Up" in the top right.
      </li>
      <li>Make sure your VPN is turned <em>off</em>, create an account, and then sign in.</li>
      <li>
        Now that you have an account, go to <a
          href="http://real-debrid.com/?id=11626869"
          rel=""
          target="_blank">real-debrid.com/premium</a>
        and purchase a premium subscription.
        <em>(I recommend the 90-day option ~10$ USD)</em>
      </li>
      <li>Complete the payment using your selected method.</li>
      <li>
        Once you have a subscription, go to <a
          href="https://real-debrid.com/apitoken?id=11626869"
          rel=""
          target="_blank">real-debrid.com/apitoken</a>
        and copy your token.
        <em>Store it somewhere safe, as we <strong>WILL</strong> need it.</em>
      </li>
    </ol>

    <div class="admonition note">
      <div class="flex flex-row gap-1">
        <Info class="h-5 w-auto items-center text-[#699269]" />
        <p class="admonition-title">Real Debrid Limits</p>
      </div>
      <p>
        Keep in mind Real Debrid will only allow devices on the same network as you, Real debrid
        allows unlimited devices on one IP at a time. You do <strong>NOT</strong> need to use a VPN while
        using Real Debrid
      </p>
    </div>

    <h2>Stremio Setup</h2>
    <hr />

    <p>
      Stremio is a streaming client built around P2P file sharing. It is highly customizable, even
      featuring an SDK so you can add your own features. The big advantage is that it syncs to
      <a
        href="https://trakt.tv"
        rel=""
        target="_blank">Trakt.tv</a
      >, which can recommend new media and keep track of your progress/watch lists.
    </p>

    <p><strong>Installing Stremio &amp; Setting up Torrentio</strong></p>
    <ol>
      <li>
        Download the client by heading to <a
          href="https://www.stremio.com/downloads"
          rel=""
          target="_blank">stremio.com/downloads</a> and selecting the appropriate version for your device.
      </li>
      <li>
        Run the downloaded file and follow the setup. You will need to create an account. <em
          >Your login is important to remember.</em>
      </li>
      <li>
        You should now be on the Stremio home screen. It should look purplish, similar to Sudo-flix
        but slightly different.
      </li>
      <li>
        Click the puzzle piece in the left sidebar labeled "Addons" and switch to your browser.
      </li>
      <li>
        In your browser, go to <a
          href="https://torrentio.strem.fun/configure"
          rel=""
          target="_blank">torrentio.strem.fun</a
        >. There will be many options; most are self-explanatory, so I won’t go over them.
      </li>
      <li>
        Scroll down to where it says "Debrid provider," select <code>RealDebrid</code>, then paste
        <em>your</em> API token into the "RealDebrid API Key" input field.
      </li>
      <li>
        Click the purple "Install" button. This should open Stremio and prompt you to "Install,"
        "Configure," or "Cancel." <em>Click "Install."</em>
      </li>
      <li>
        If the purple button does not open Stremio, right-click the button to copy its link, then
        paste it into the Stremio search bar
      </li>
    </ol>

    <blockquote>
      <p>
        I Highly recommend you turn on "Hardware-accelerated decoding" in the "Advanced" section of
        the player settings (setting can be found below plugins on the sidebar).
      </p>
    </blockquote>

    <p><strong>Additional Addons May Ask for Your API Key</strong></p>
    <p>
      When installing other addons that aren't Torrentio, you may be asked for your Real-Debrid API
      token again. I <em>highly</em> recommend entering your token if prompted, as it significantly speeds
      up your streaming experience. Any addons found online from reputable sources and those listed in
      the "Community Addons" section are fair game.
    </p>

    <h2>Extra Setup &amp; Customization</h2>
    <hr />

    <h3>FireStick Setup</h3>
    <ol>
      <li>Go to the home screen of your FireStick and click on your profile on the right.</li>
      <li>
        Click on "Settings," then "My Fire TV," and then click "About" <strong>7 times</strong>
        quickly to enable developer options (
        <a
          href="https://www.firesticktricks.com/developer-options-firestick.html"
          rel=""
          target="_blank">guide</a
        >).
      </li>
      <li>Head to the Amazon App Store, search for "Downloader," and install it.</li>
      <li>
        Once "Downloader" is installed, go back to developer settings and turn on <code
          >Install Unkown Apps</code> for "Downloader".
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
      There are multiple debrid providers, some better than others. I (and many others) recommend
      Real-Debrid due to its popularity, speed, features, and affordability. However, there are many other
      providers. The reason these aren't used in this guide is due to their lack of compatibility
      with other addons, whereas Real-Debrid is widely supported. However, there are cheaper
      providers such as AllDebrid, Debrid-Link, and Torbox.
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
    </ul>

    <h3>Other Addons</h3>
    <p>
      <strong
        >Other unlisted addons can be found <a
          href="https://stremio-addons.netlify.app/"
          rel=""
          target="_blank">here</a> for download</strong>
    </p>
    <ul>
      <li>
        Trakt TV: Addon for getting Trakt's public user lists, recommendations, and watch list.
      </li>
      <li>
        USA TV: USA TV provides access to channels across various categories including local
        channels, news, sports, entertainment, and more.
      </li>
      <li>Annatar: Search popular torrent sites and Debrid caches for streamable content.</li>
      <li>
        Orion: Orion Stremio Addon allows Orion-indexed torrent, usenet, and hoster links to be
        played on Stremio.
      </li>
    </ul>
    <p>
      <em
        >All of these are "Community Addons" and can be found in the Stremio "Community Addons"
        section for quick install.</em>
    </p>

    <h2>More Questions?</h2>
    <hr />

    <ul>
      <li>
        <a
          href="https://guides.viren070.me/stremio"
          rel=""
          target="_blank">Ultimate User Manual to Stremio</a>
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
          href="https://www.firesticktricks.com/"
          rel=""
          target="_blank">FireStick Tricks</a>
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

    <p>
      <strong>Note:</strong> Please reach out to me if any issues arise. This guide's source code is
      available
      <a
        href="https://github.com/itzcozi/stremio-guide"
        rel=""
        target="_blank">here</a
      >. I'm open to additions via pull requests. :)
    </p>
  </div>
</div>
