<script>
  import { TableOfContents as TableOfContentsIcon, HandHeart } from "lucide-svelte";
  import {
    SectionHeading,
    Admonition,
    TableOfContents,
    CopyPopup,
    Footer,
    Disclaimer,
  } from "$components";

  let isTocOpen = false;
  let isPopupVisible = false;

  function copyToClipboard(textToCopy) {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        isPopupVisible = true;
        setTimeout(() => {
          isPopupVisible = false;
        }, 3000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  }

  function toggleToc() {
    isTocOpen = !isTocOpen;
  }
</script>

<div class="items-center justify-center">
  <TableOfContents
    isOpen={isTocOpen}
    onToggle={toggleToc} />

  <div class="mx-auto block">
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="flex justify-between items-center -m-1">
      <div
        class="cursor-pointer"
        on:click={() => (window.location.href = "https://donate.cozi.lol")}>
        <HandHeart class="h-6 w-auto" />
      </div>
      <div
        class="toc-toggle"
        on:click={toggleToc}>
        <TableOfContentsIcon class="h-6 w-auto" />
      </div>
    </div>

    <CopyPopup visible={isPopupVisible} />

    <SectionHeading
      id="how-to"
      level={1}>
      How to Use Stremio
    </SectionHeading>

    <Disclaimer />

    <p>
      Welcome! As we move beyond Sudo's prime, it's the perfect time to explore professional ways to
      stream your favorite content. This step-by-step guide is designed to help you get the most out
      of the best free streaming service available today. Whether you're using a desktop, mobile
      device (Samsung, iOS, Android), or even a FireStick, this guide will walk you through
      everything you need to know no matter your skill level.
    </p>
    <br />

    <SectionHeading
      id="preview"
      level={0}>
      <strong>Preview of Stremio</strong>
    </SectionHeading>
    <div class="flex justify-center">
      <img
        alt="Preview"
        referrerpolicy="same-origin"
        src="https://i.postimg.cc/P5CBwrVn/preview.gif"
        title="Preview" />
    </div>

    <SectionHeading
      id="prerequisites"
      level={3}>
      Prerequisites
    </SectionHeading>
    <ol>
      <li>You need the Stremio client.</li>
      <li>You need the appropriate addons for streaming.</li>
      <li>You need a Real-Debrid subscription (~$5 a month).</li>
    </ol>

    <SectionHeading
      id="for-da-free"
      level={0}>
      <strong>Can I Do This for Free?</strong>
    </SectionHeading>
    <p>
      Yes. Skip the Debrid subscription and just use the plain Torrentio addon. The setup is the
      same, but you must set the "Debrid Provider" to "None" in the Torrentio configuration. This
      will not be nearly as fast, and you may need to use a VPN based on where you live as a Debrid
      service will not be protecting you.
    </p>

    <hr />
    <SectionHeading
      id="token"
      level={2}
      numbered={true}
      number="1.">
      Debrid Service Token
    </SectionHeading>

    <p>
      What is Debrid? Debrid is a service that allows you to download and stream all kinds of
      content, from software, music, and games to adult content and 4K movies (40GB+), hosted on
      supported premium file hosters like Rapidgator, Uploaded, FileFactory, Turbobit, Nitroflare,
      etc at great speeds (1+ Gbps). It also caches a lot of torrents, giving you instant
      download/streaming capabilities without the need for seeders.
    </p>
    <br />

    <SectionHeading
      id="real-debrid-sub"
      level={0}>
      <strong>Getting Your Real-Debrid Subscription and API Token</strong>
    </SectionHeading>
    <ol>
      <li>
        Head to <a
          href="https://real-debrid.com/?id=11626869"
          rel=""
          target="_blank">real-debrid.com</a> and click "Sign Up" in the top right.
      </li>
      <li>Ensure your VPN is turned <em>off</em>, create an account, and then sign in.</li>
      <li>
        Now that you have an account, go to <a
          href="https://real-debrid.com/?id=11626869"
          rel=""
          target="_blank">real-debrid.com/premium</a>
        and purchase a premium subscription plan.
        <em>(I recommend the 90-day option ~10$ USD/3mo)</em>
      </li>
      <li>Complete the payment using your selected method.</li>
      <li>
        Once you have a subscription, go to <a
          href="https://real-debrid.com/apitoken?id=11626869"
          rel=""
          target="_blank">real-debrid.com/apitoken</a>
        and copy your token.
      </li>
    </ol>

    <SectionHeading
      id="torbox-sub"
      level={0}>
      <strong>Getting Your Torbox Subscription and API Token</strong>
    </SectionHeading>
    <ol>
      <li>
        Go to <a
          href="https://torbox.app/login?referral=85f3efc7-583b-42ab-842d-c3670fb95d2e"
          rel=""
          target="_blank">torbox.app/login</a> and click "Don't have an account yet?" below the "Continue"
        button.
      </li>
      <li>Ensure your VPN is turned <em>off</em> and proceed to create an account.</li>
      <li>
        Now that you have an account, go to <a
          href="https://torbox.app/subscription?referral=85f3efc7-583b-42ab-842d-c3670fb95d2e"
          rel=""
          target="_blank">torbox.app/subscription</a>
        and purchase a subscription plan.
        <em>(I recommend the PRO option ~10$ USD/mo)</em>
      </li>
      <li>Complete the payment using your selected method.</li>
      <li>
        Head to <a
          href="https://torbox.app/settings?referral=85f3efc7-583b-42ab-842d-c3670fb95d2e"
          rel=""
          target="_blank">torbox.app/settings</a>
        and scroll down to "API Key" then, click the green "Copy API Key" button.
      </li>
    </ol>

    <em>Don't forget to store your API key somewhere safe, as you WILL need it later.</em>

    <Admonition
      type="warning"
      title="Limits of Debrid Providers"
      href="https://guides.viren070.me/stremio/setup#which-debrid-service-do-i-use"
      linkTitle="User Manual FAQ Reference">
      Keep in mind that Real-Debrid supports unlimited devices on the same network but restricts
      usage to a single IP address. If this limitation is an issue, consider using Torbox, which
      does not track IPs. A {" "}<a
        href="https://guides.viren070.me/stremio/faq#do-i-need-a-vpn"
        rel=""
        target="_blank">VPN is not required</a
      >{" "} when using a Debrid service as traffic is routed through their servers.
    </Admonition>

    <Admonition
      type="info"
      title="Debrid vs. VPN"
      href="https://guides.viren070.me/stremio/technical-details#debrid-services"
      linkTitle="Debrid vs VPN Explanation">
      <p>
        <strong>Why Debrid is better/safer:</strong><br />
        • <strong>Cached Content:</strong> Most popular content is already "cached" on the Debrid
        service's high-speed servers. This means you stream directly from them (HTTPS) rather than
        relying on peer-to-peer connections, avoiding buffering from slow seeders.<br />
        • <strong>Privacy:</strong> Since you connect securely (HTTPS) to the Debrid provider, your
        ISP only sees traffic to the Debrid service, not what you are watching. You do not join the
        torrent swarm yourself, so your IP is never exposed to peers or anti-piracy monitors.<br />
        • <strong>No VPN Needed:</strong> Because the Debrid service acts as a middleman, you don't need
        a VPN to hide your activity or IP address from torrent swarms.
      </p>
    </Admonition>

    <SectionHeading
      id="stremio"
      level={2}
      numbered={true}
      number="2.">
      Stremio Setup
    </SectionHeading>
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

    <Admonition
      type="info"
      title="Stremio Device Support"
      href="https://stremio.zendesk.com/"
      linkTitle="Helpdesk Reference">
      Stremio is compatible with a wide range of platforms, including Android, iOS, Windows, Mac,
      Linux, and most TVs, such as Firestick devices. You can find most downloads conveniently
      available{" "}
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.stremio.com/downloads">here</a
      >. However, iOS users will need to use{" "}
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://vidi.norsb.org/">Vidi</a
      >, a specialized fork of Stremio made for Apple platforms.
    </Admonition>

    <SectionHeading
      id="install"
      level={0}>
      <strong>Installing Stremio &amp; Setting up Torrentio</strong>
    </SectionHeading>
    <ol>
      <li>
        Download the client by heading to <a
          href="https://www.stremio.com/downloads"
          rel=""
          target="_blank">stremio.com/downloads</a> and selecting the appropriate version for your device.
      </li>
      <li>
        Run the downloaded file and follow the setup instructions. You will need to create an
        account.
        <em>Make sure to remember your login credentials.</em>
      </li>
      <li>
        Once installed, open Stremio. The home screen should appear with a purple theme, similar to
        Sudo-Flix.
      </li>
      <li>
        Click the puzzle piece icon labeled "Addons" in the left sidebar, then switch to your
        browser.
      </li>
      <li>
        Visit <a
          href="https://torrentio.strem.fun/lite/configure"
          rel=""
          target="_blank">torrentio.strem.fun</a>
        to configure the Torrentio addon. Adjust the settings as needed.
      </li>
      <li>
        Scroll to the "Debrid provider" section, select your provider, and paste your API token into
        the "API Key" field.
      </li>
      <li>
        Click the purple "Install" button. If it doesn't open Stremio, right-click the button, copy
        the link, and paste it into Stremio's search bar.
      </li>
    </ol>

    <SectionHeading
      id="manual-install"
      level={0}>
      <strong>Manual Addon Install</strong>
    </SectionHeading>
    <p>
      If the "Install" button doesn't work or you are on a device where it doesn't trigger the app:
    </p>
    <ol>
      <li>Right-click (or long-press) the "Install" button on the addon page.</li>
      <li>Select <strong>Copy link address</strong> (or similar).</li>
      <li>Open Stremio and paste this URL into the <strong>search bar</strong>.</li>
      <li>Press enter, and a prompt to install the addon should appear.</li>
    </ol>

    <Admonition
      type="info"
      title="Hardware-Accelerated Decoding"
      href="https://www.reddit.com/r/Stremio/comments/okjz1y/what_is_hardware_accelerated_decoding_and_what/"
      linkTitle="What is Hardware-Accelerated Decoding Article">
      I highly recommend enabling "Hardware-accelerated decoding" in the "Advanced" section of the
      player settings (this decodes video using your GPU instead of CPU). This option is only
      avaliable for Desktops users sadly.
    </Admonition>

    <SectionHeading
      id="more-addons"
      level={0}>
      <strong>Additional Addons May Ask for Your API Key</strong>
    </SectionHeading>
    <p>
      When installing other addons that aren't Torrentio, you may be asked for your Debrid API token
      again. I <em>highly</em> recommend entering your token if prompted, as it significantly speeds up
      your streaming experience. Any addons found online from reputable sources, as well as those listed
      in the "Community Addons" section, are fair game.
    </p>

    <SectionHeading
      id="extra"
      level={2}
      numbered={true}
      number="3.">
      Extra Setup &amp; Customization
    </SectionHeading>
    <hr />

    <SectionHeading
      id="firestick"
      level={3}>
      FireStick Setup
    </SectionHeading>
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

    <SectionHeading
      id="android"
      level={3}>
      Android Setup
    </SectionHeading>
    <p>
      <em
        >Stremio can be installed from the <a
          href="https://play.google.com/store/apps/details?id=com.stremio.one"
          rel=""
          target="_blank">Play Store</a
        ></em>
    </p>
    <ol>
      <li>
        Download the appropriate APK for your device from Stremio's download page (you will most
        likely need to download the ARM64 APK).
      </li>
      <li>Install the downloaded APK.</li>
      <li>Login to your Stremio account.</li>
      <li>Sync addons in the "Addons" menu.</li>
    </ol>

    <SectionHeading
      id="samsung-lg"
      level={3}>
      Samsung TV (Tizen) & LG TV (WebOS)
    </SectionHeading>
    <p>Stremio now has native apps for Samsung (2019+ models) and LG (2020+ models) TVs.</p>
    <ol>
      <li>
        Turn on your TV and navigate to the <strong>App Store</strong> (Samsung Apps or LG Content Store).
      </li>
      <li>Search for <strong>"Stremio"</strong>.</li>
      <li>Download and install the app.</li>
      <li>
        Launch the app. It will show a QR code or a link. Scan it with your phone or visit the link
        on a computer to log in.
      </li>
      <li>Once logged in, your addons (like Torrentio) will automatically sync!</li>
    </ol>

    <SectionHeading
      id="usenet"
      level={3}>
      Usenet Setup
    </SectionHeading>
    <!-- https://guides.viren070.me/stremio/setup#usenet -->
    <p>
      Usenet is a decentralized platform for sharing content, organized into "newsgroups," which
      function like forums for posting messages and files. In Stremio, the focus is on NZB files
      binaries for video content shared within these groups. To access Usenet, you'll need a paid
      Usenet provider, which hosts the servers storing this content. These providers charge for
      access due to the costs of hosting and bandwidth required for downloading from newsgroups.
    </p>
    <ol>
      <li>
        Head to <a
          href="https://torbox.app/login?referral=85f3efc7-583b-42ab-842d-c3670fb95d2e"
          rel=""
          target="_blank">torbox.app/login</a> and create an account or login if you already have one.
      </li>
      <li>
        Now, go to <a
          href="https://torbox.app/subscription?referral=85f3efc7-583b-42ab-842d-c3670fb95d2e"
          rel=""
          target="_blank">torbox.app/subscription</a> and purchase the "Pro" plan. This includes the usenet
        as well as Torbox's Debrid service.
      </li>
      <li>
        To use Torbox in Stremio, visit <a
          href="https://torrentio.strem.fun/lite"
          target="_blank">this link</a
        >, scroll to the "Debrid provider" section, select "Torbox," and enter your API key.
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
    <em>
      Learn more about Torbox's usenet service and Stremio <a
        href="https://torbox.app/usenet?referral=85f3efc7-583b-42ab-842d-c3670fb95d2e"
        rel=""
        target="_blank">here</a
      >.
    </em>

    <SectionHeading
      id="metadata"
      level={3}>
      Metadata Addons: Anime Kitsu vs Cinemeta
    </SectionHeading>
    <p>
      <strong>Cinemeta</strong> is the default metadata provider for Stremio, using IMDb IDs (tt...).
      It works great for movies and western TV shows.
    </p>
    <p>
      However, for <strong>Anime</strong>, Cinemeta often has mapping issues (e.g., seasons not
      matching correctly).
    </p>
    <p>
      <strong>Anime Kitsu</strong> is recommended for Anime. It uses Kitsu IDs, which are much more accurate
      for Anime seasons and episodes. Torrentio supports Kitsu IDs natively, so using Anime Kitsu alongside
      Torrentio ensures you get the correct streams for the correct episodes.
    </p>

    <SectionHeading
      id="trakt"
      level={3}>
      Logging Into
      <a
        href="http://Trakt.tv"
        rel=""
        target="_blank">Trakt.tv</a>
    </SectionHeading>
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

    <SectionHeading
      id="debrid"
      level={3}>
      Different Debrid Providers
    </SectionHeading>
    <p>
      There are multiple Debrid providers available, some better than others. I (and many others)
      recommend Real-Debrid due to its popularity, speed, features, and affordability. However,
      there are many other providers. The reason these aren't used in this guide is due to their
      lack of compatibility with other addons, whereas Real-Debrid is widely supported. However,
      there are cheaper providers such as Torbox, Debrid-Link, and AllDebrid to name a few.
    </p>

    <Admonition
      type="info"
      title="Legal Limitations"
      href="https://guides.viren070.me/stremio/setup#which-debrid-service-do-i-use"
      linkTitle="List of Legal Limitations for Debrid Providers">
      Before purchasing a Debrid service other than Real-Debrid, please check the laws and
      regulations of the municipality where the service is based. Some providers operate in
      countries with strict anti-piracy laws, which may be acceptable if the provider does not
      succumb to external pressure. In conclusion, I recommend researching the provider and its
      limitations thoroughly before purchasing a plan.
    </Admonition>

    <ol>
      <li>
        <a
          href="https://real-debrid.com/premium?id=11626869"
          rel=""
          target="_blank">Real-Debrid</a
        >,
        <span title="France">🇫🇷</span>
      </li>
      <li>
        <a
          href="https://torbox.app/subscription?referral=85f3efc7-583b-42ab-842d-c3670fb95d2e"
          rel=""
          target="_blank">Torbox</a
        >,
        <span title="South Africa">🇿🇦</span>
      </li>
      <li>
        <a
          href="https://alldebrid.com/offer"
          rel=""
          target="_blank">AllDebrid</a
        >,
        <span title="France">🇫🇷</span>
      </li>
      <li>
        <a
          href="https://www.premiumize.me/premium"
          rel=""
          target="_blank">Premiumize</a
        >,
        <span title="Malaysia">🇲🇾</span>
      </li>
      <li>
        <a
          href="https://debrid-link.com/webapp/register"
          rel=""
          target="_blank">Debrid-Link</a
        >,
        <span title="France">🇫🇷</span>
      </li>
      <li>
        <a
          href="https://put.io/plans/"
          rel=""
          target="_blank">Put.io</a
        >,
        <span title="Turkey">🇹🇷</span>
      </li>
      <li>
        <a
          href="https://offcloud.com/#pricing"
          rel=""
          target="_blank">OffCloud</a
        >,
        <span title="Bulgaria">🇧🇬</span>
      </li>
      <li>
        <a
          href="https://www.deepbrid.com/home#pricing"
          rel=""
          target="_blank">Deepbrid</a
        >,
        <span title="Switzerland">🇨🇭</span>
      </li>
    </ol>

    <SectionHeading
      id="speed-tests"
      level={3}>
      Debrid Speed Tests
    </SectionHeading>
    <p>
      Each debrid provider includes links to speed tests. These tests offer valuable insights into
      the connection speeds you can expect when using their services.
    </p>

    <Admonition
      type="warning"
      title="Restricted Access"
      href="https://guides.viren070.me/stremio/setup#which-debrid-service-do-i-use"
      linkTitle="User Manual FAQ Reference">
      You may need to log in to access these pages. If you encounter any errors while trying to
      access them, please log in to the Debrid service and then try clicking the link again.
    </Admonition>

    <ol>
      <li>
        <a
          href="https://real-debrid.com/speedtest?id=11626869"
          rel=""
          target="_blank">Real-Debrid</a>
      </li>
      <li>
        <a
          href="https://torbox.app/tools?referral=85f3efc7-583b-42ab-842d-c3670fb95d2e"
          rel=""
          target="_blank">Torbox</a>
      </li>
      <li>
        <a
          href="https://alldebrid.com/speedtest"
          rel=""
          target="_blank">AllDebrid</a>
      </li>
      <li>
        <a
          href="https://www.premiumize.me/speedtest"
          rel=""
          target="_blank">Premiumize</a>
      </li>
      <li>
        <a
          href="https://debrid-link.fr/webapp/speedtest"
          rel=""
          target="_blank">Debrid-Link</a>
      </li>
      <li>
        <a
          href="https://app.put.io/settings/route"
          rel=""
          target="_blank">Put.io</a>
      </li>
    </ol>

    <SectionHeading
      id="dmm"
      level={3}>
      Debrid Media Manager
    </SectionHeading>
    <p>
      <a
        href="https://debridmediamanager.com/"
        target="_blank">Debrid Media Manager (DMM)</a> is a powerful tool to manage your Real-Debrid/AllDebrid
      cloud.
    </p>
    <ul>
      <li>
        <strong>Find Cached Content:</strong> DMM allows you to search for movies/shows and instantly
        see what is cached on Real Client. This is huge for finding content that Torrentio might miss
        or show as uncached.
      </li>
      <li>
        <strong>Library Management:</strong> You can add cached torrents directly to your Debrid library.
      </li>
      <li>
        <strong>Watch on Stremio:</strong> Once added to your library, you can watch it in Stremio via
        the "Debrid Search" addon or by enabling the "Debrid Catalog" option in Torrentio.
      </li>
    </ul>

    <SectionHeading
      id="addons"
      level={3}>
      Other Addons
    </SectionHeading>
    <ul>
      <li>
        <a
          href="https://stremio-addons.net/addons/subhero-v2"
          rel=""
          target="_blank">SubHero</a
        >: SubHero is a Stremio addon that provides subtitles for movies and TV shows using the
        Wyzie Subs API.
      </li>
      <li>
        <a
          href="https://5a0d1888fa64-orion.baby-beamup.club/"
          rel=""
          target="_blank">Orion</a
        >: Orion Stremio Addon allows Orion-indexed torrent, usenet, and hoster links to be played
        on Stremio.
      </li>
      <li>
        <a
          href="https://stremio-addons.net/addons/usa-tv"
          rel=""
          target="_blank">USA TV</a
        >: Provides access to channels including local channels, news, sports, entertainment, and
        more.
      </li>
      <li>
        <a
          href="https://chromewebstore.google.com/detail/imdb-trakt-open-in-stremi/jlmmgfkhpanoeigimlaadjcdjljihmfb"
          rel=""
          target="_blank">Open in Stremio</a
        >: Allow you to open movies you see on IMDB or Trakt straight to your Stremio.
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
          href="https://mediafusion.elfhosted.com/configure/"
          rel=""
          target="_blank">MediaFusion</a
        >: Addon for live TV and sports events across the globe.
      </li>
    </ul>

    <SectionHeading
      id="rpdb"
      level={3}>
      Rating Poster DB (RPDB)
    </SectionHeading>
    <p>
      Want to see IMDb/Rotten Tomatoes ratings directly on the movie posters in Stremio? That's what <a
        href="https://ratingposterdb.com/"
        target="_blank">RPDB</a> does.
    </p>
    <ul>
      <li>
        <strong>Free Tier:</strong> Use the API Key <code>t0-free-rpdb</code> to get basic ratings on
        posters.
      </li>
      <li>
        <strong>Paid Tier:</strong> Offers textless posters, high-res badges (4K, HDR), and more customization.
      </li>
    </ul>
    <p>
      To use it, you install the <strong>Cinemeta (with ratings)</strong> addon or configure other addons
      (like Cyberflix) to use your RPDB API key.
    </p>

    <SectionHeading
      id="devices"
      level={3}>
      Best Streaming Devices
    </SectionHeading>
    <p>While Stremio works on most devices, a good streaming stick/box makes a huge difference.</p>
    <ul>
      <li>
        <strong>NVIDIA Shield TV Pro:</strong> The king of streaming devices. Best performance, AI upscaling,
        and handles all audio formats (TrueHD/Atmos).
      </li>
      <li>
        <strong>Fire TV Stick 4K Max (2nd Gen):</strong> Great budget option with good performance.
      </li>
      <li>
        <strong>Onn. 4K Pro:</strong> Excellent value for money (available in US Walmart). Google TV based.
      </li>
      <li><strong>Chromecast with Google TV (4K):</strong> Solid option, easy to customize.</li>
    </ul>

    <SectionHeading
      id="addon-manager"
      level={3}>
      Stremio Addon Manager
    </SectionHeading>
    <p>
      Stremio doesn't let you drag-and-drop to reorder addons (catalogs) natively. The order they
      appear is the order you install them.
    </p>
    <p>
      Use the unofficial <strong
        ><a
          href="https://addon-manager.elfhosted.com/"
          target="_blank">Stremio Addon Manager</a
        ></strong> to easily reorder, rename, or delete your addons without reinstalling them.
    </p>

    <p>
      <em
        >Most of these are "Community Addons" and can be found in the Stremio "Community Addons"
        section of your client for quick install. Other unlisted addons can be downloaded from <a
          href="https://stremio-addons.net/"
          rel=""
          target="_blank">here</a
        >.</em>
    </p>

    <SectionHeading
      id="more"
      level={2}>
      More Questions?
    </SectionHeading>
    <hr />

    <ul>
      <li>
        <a
          href="https://www.reddit.com/r/StremioAddons/comments/yi5jdw/ultimate_guide_to_stremio_torrentio_rd/"
          rel=""
          target="_blank">Guide to Stremio Torrentio</a>
      </li>
      <li>
        <a
          href="https://www.firesticktricks.com/stremio-firestick.html"
          rel=""
          target="_blank">FireStick Stremio Setup</a>
      </li>
      <li>
        <a
          href="https://guides.viren070.me/stremio"
          rel=""
          target="_blank">Stremio User Manual</a>
      </li>
      <li>
        <a
          href="https://www.comparitech.com/kodi/what-is-stremio/#:~:text=First%20you'll%20need%20a,allowed%20to%20access%20your%20account."
          rel=""
          target="_blank">Signing Into Trakt</a>
      </li>
      <li>
        <a
          href="https://www.reddit.com/r/Addons4Kodi/comments/1hfa8cp/comparison_of_debrid_services_for_streaming/"
          rel=""
          target="_blank">Debrid Services</a>
      </li>
      <li>
        <a
          href="https://stremio.zendesk.com/hc/en-us/categories/115000394751-Frequently-Asked-Questions"
          rel=""
          target="_blank">Stremio FAQ's</a>
      </li>
    </ul>

    <p class="dimmed">
      Please reach out to me if any issues arise. This guide's source code is available
      <a
        href="https://github.com/itzcozi/stremio-guide"
        rel=""
        target="_blank">here</a
      >. I'm open to additions and corrections via pull requests on Github. Join our community on{" "}
      <a
        href="https://t.me/+B3UIJrNsWf0wNzJh"
        rel=""
        target="_blank">Telegram</a> for discussions and support regarding Stremio!
    </p>

    <Footer />
  </div>
</div>
