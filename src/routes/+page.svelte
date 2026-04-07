<script>
  import { TableOfContents as TableOfContentsIcon, HandHeart, Search } from "lucide-svelte";
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

  let searchQuery = "";

  function toggleToc() {
    isTocOpen = !isTocOpen;
  }

  function clearHighlights() {
    document.querySelectorAll("mark.search-highlight").forEach((mark) => {
      const parent = mark.parentNode;
      parent.replaceChild(document.createTextNode(mark.textContent), mark);
      parent.normalize();
    });
  }

  function highlightMatches(root, query) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const matches = [];
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (node.parentElement?.closest("script, style, .search-bar")) continue;
      const idx = node.textContent.toLowerCase().indexOf(query);
      if (idx !== -1) matches.push({ node, idx });
    }
    for (const { node, idx } of matches) {
      const text = node.textContent;
      const before = document.createTextNode(text.slice(0, idx));
      const mark = document.createElement("mark");
      mark.className = "search-highlight";
      mark.textContent = text.slice(idx, idx + query.length);
      const after = document.createTextNode(text.slice(idx + query.length));
      const parent = node.parentNode;
      parent.insertBefore(before, node);
      parent.insertBefore(mark, node);
      parent.insertBefore(after, node);
      parent.removeChild(node);
    }
  }

  function handleSearch(e) {
    clearHighlights();
    if (e.key === "Enter" && searchQuery.trim()) {
      const query = searchQuery.trim().toLowerCase();
      const content = document.querySelector(".block");
      if (content) highlightMatches(content, query);
      const firstMatch = document.querySelector("mark.search-highlight");
      if (firstMatch) {
        firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
    if (!searchQuery.trim()) clearHighlights();
  }
</script>

<div class="items-center justify-center">
  <TableOfContents
    isOpen={isTocOpen}
    onToggle={toggleToc} />

  <div class="mx-auto block">
    <div class="flex items-center pb-6 gap-3">
      <a
        href="https://donate.cozi.lol"
        rel="noopener noreferrer"
        target="_blank"
        class="icon-btn flex-shrink-0"
        aria-label="Donate">
        <HandHeart class="h-6 w-auto" />
      </a>
      <div class="search-bar mx-auto">
        <Search class="h-4 w-auto search-icon" />
        <input
          type="text"
          placeholder="Search sections..."
          bind:value={searchQuery}
          on:keydown={handleSearch}
          aria-label="Search guide sections" />
      </div>
      <button
        type="button"
        class="icon-btn flex-shrink-0"
        aria-label="Toggle table of contents"
        on:click={toggleToc}>
        <TableOfContentsIcon class="h-6 w-auto" />
      </button>
    </div>

    <CopyPopup visible={isPopupVisible} />

    <SectionHeading
      id="how-to"
      level={1}>
      How to Use Stremio
    </SectionHeading>

    <Disclaimer />

    <p>
      As traditional movie websites become less reliable, it's the perfect time to explore
      professional ways to stream your favorite content. This is a step-by-step guide designed to
      help you get the most out of (probably) the best free streaming solution available today.
      Whether you're using a desktop, mobile device (Samsung, iOS, Android), or even a FireStick,
      this guide will walk you through everything you need to know no matter your skill level.
    </p>
    <br />

    <div class="flex justify-center">
      <img
        alt="Animated preview of the Stremio interface showing movie and TV show browsing"
        referrerpolicy="same-origin"
        src="https://i.postimg.cc/P5CBwrVn/preview.gif"
        loading="lazy"
        title="Preview" />
    </div>

    <SectionHeading
      id="what-you-need"
      level={3}>
      What You'll Need
    </SectionHeading>
    <ol>
      <li>The Stremio client (free).</li>
      <li>The appropriate addons for streaming (free).</li>
      <li>A Debrid subscription (~$5 a month).</li>
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
      Debrid is a service that allows you to download and stream all kinds of content, from
      software, music, and games to adult content and 4K movies (40GB+), hosted on supported premium
      file hosters like Rapidgator, Uploaded, FileFactory, Turbobit, Nitroflare, etc at great speeds
      (1+ Gbps). It also caches a lot of torrents, giving you instant download/streaming
      capabilities without the need for seeders.
    </p>

    <SectionHeading
      id="real-debrid-sub"
      level={0}>
      <strong>Getting Your Real-Debrid Subscription and API Token</strong>
    </SectionHeading>
    <ol>
      <li>
        Head to <a
          href="https://real-debrid.com/?id=11626869"
          rel="noopener noreferrer"
          target="_blank">real-debrid.com</a> and click "Sign Up" in the top right.
      </li>
      <li>Ensure your VPN is turned <em>off</em>, create an account, and then sign in.</li>
      <li>
        Now that you have an account, go to <a
          href="https://real-debrid.com/?id=11626869"
          rel="noopener noreferrer"
          target="_blank">real-debrid.com/premium</a>
        and purchase a premium subscription plan.
        <em>(I recommend the 90-day option ~10$ USD/3mo)</em>
      </li>
      <li>Complete the payment using your selected method.</li>
      <li>
        Once you have a subscription, go to <a
          href="https://real-debrid.com/apitoken?id=11626869"
          rel="noopener noreferrer"
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
          rel="noopener noreferrer"
          target="_blank">torbox.app/login</a> and click "Don't have an account yet?" below the "Continue"
        button.
      </li>
      <li>Ensure your VPN is turned <em>off</em> and proceed to create an account.</li>
      <li>
        Now that you have an account, go to <a
          href="https://torbox.app/subscription?referral=85f3efc7-583b-42ab-842d-c3670fb95d2e"
          rel="noopener noreferrer"
          target="_blank">torbox.app/subscription</a>
        and purchase a subscription plan.
        <em>(I recommend the PRO option ~10$ USD/mo)</em>
      </li>
      <li>Complete the payment using your selected method.</li>
      <li>
        Head to <a
          href="https://torbox.app/settings?referral=85f3efc7-583b-42ab-842d-c3670fb95d2e"
          rel="noopener noreferrer"
          target="_blank">torbox.app/settings</a>
        and scroll down to "API Key" then, click the green "Copy API Key" button.
      </li>
    </ol>

    <em>Don't forget to store your API key somewhere safe, as you WILL need it later.</em>

    <Admonition
      id="adm-debrid-limits"
      type="warning"
      title="Limits of Debrid Providers"
      href="https://guides.viren070.me/stremio/setup#which-debrid-service-do-i-use"
      linkTitle="User Manual FAQ Reference">
      Keep in mind that Real-Debrid supports unlimited devices on the same network but restricts
      usage to a single IP address. If this limitation is an issue, consider using Torbox, which
      does not track IPs. A {" "}<a
        href="https://guides.viren070.me/stremio/faq#do-i-need-a-vpn"
        rel="noopener noreferrer"
        target="_blank">VPN is not required</a
      >{" "} when using a Debrid service as traffic is routed through their servers.
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
        rel="noopener noreferrer"
        target="_blank">Trakt.tv</a
      >, which can recommend new media and track your progress and watch lists.
    </p>

    <Admonition
      id="adm-device-support"
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
      >, a specialized fork of Stremio made for Apple platforms or web Stremio. Both of which I
      won't be covering in this guide.
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
          rel="noopener noreferrer"
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
          rel="noopener noreferrer"
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

    <Admonition
      id="adm-vpn"
      type="warning"
      title="Turn Off Your VPN"
      href="https://guides.viren070.me/stremio/faq#can-i-use-a-debrid-service-with-a-vpn"
      linkTitle="VPN and Debrid FAQ">
      Torrentio and other Debrid-configured addons will <strong>not work</strong> if your VPN is
      enabled. Your VPN changes your IP address, which conflicts with the single-IP restriction most
      Debrid providers enforce. Always <strong>turn off your VPN</strong> before using Stremio with a
      Debrid service. If you need a VPN for other reasons, configure split tunneling to exclude Stremio.
    </Admonition>

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
      id="adm-hw-decode"
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
          rel="noopener noreferrer"
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
          rel="noopener noreferrer"
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
          rel="noopener noreferrer"
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
          rel="noopener noreferrer"
          target="_blank">torbox.app/login</a> and create an account or login if you already have one.
      </li>
      <li>
        Now, go to <a
          href="https://torbox.app/subscription?referral=85f3efc7-583b-42ab-842d-c3670fb95d2e"
          rel="noopener noreferrer"
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
        rel="noopener noreferrer"
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
      <span class="flex items-center gap-2">
        Logging Into
        <a
          href="http://Trakt.tv"
          rel="noopener noreferrer"
          target="_blank">Trakt.tv</a>
      </span>
    </SectionHeading>
    <ol>
      <li>
        First, create a Trakt account <a
          href="https://trakt.tv/dashboard"
          rel="noopener noreferrer"
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
      id="adm-legal"
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
          rel="noopener noreferrer"
          target="_blank">Real-Debrid</a
        >,
        <span title="France">🇫🇷</span>
      </li>
      <li>
        <a
          href="https://torbox.app/subscription?referral=85f3efc7-583b-42ab-842d-c3670fb95d2e"
          rel="noopener noreferrer"
          target="_blank">Torbox</a
        >,
        <span title="South Africa">🇿🇦</span>
      </li>
      <li>
        <a
          href="https://alldebrid.com/offer"
          rel="noopener noreferrer"
          target="_blank">AllDebrid</a
        >,
        <span title="France">🇫🇷</span>
      </li>
      <li>
        <a
          href="https://www.premiumize.me/premium"
          rel="noopener noreferrer"
          target="_blank">Premiumize</a
        >,
        <span title="Malaysia">🇲🇾</span>
      </li>
      <li>
        <a
          href="https://debrid-link.com/webapp/register"
          rel="noopener noreferrer"
          target="_blank">Debrid-Link</a
        >,
        <span title="France">🇫🇷</span>
      </li>
      <li>
        <a
          href="https://put.io/plans/"
          rel="noopener noreferrer"
          target="_blank">Put.io</a
        >,
        <span title="Turkey">🇹🇷</span>
      </li>
      <li>
        <a
          href="https://offcloud.com/#pricing"
          rel="noopener noreferrer"
          target="_blank">OffCloud</a
        >,
        <span title="Bulgaria">🇧🇬</span>
      </li>
      <li>
        <a
          href="https://www.deepbrid.com/home#pricing"
          rel="noopener noreferrer"
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
      id="adm-restricted"
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
          rel="noopener noreferrer"
          target="_blank">Real-Debrid</a>
      </li>
      <li>
        <a
          href="https://torbox.app/tools?referral=85f3efc7-583b-42ab-842d-c3670fb95d2e"
          rel="noopener noreferrer"
          target="_blank">Torbox</a>
      </li>
      <li>
        <a
          href="https://alldebrid.com/speedtest"
          rel="noopener noreferrer"
          target="_blank">AllDebrid</a>
      </li>
      <li>
        <a
          href="https://www.premiumize.me/speedtest"
          rel="noopener noreferrer"
          target="_blank">Premiumize</a>
      </li>
      <li>
        <a
          href="https://debrid-link.fr/webapp/speedtest"
          rel="noopener noreferrer"
          target="_blank">Debrid-Link</a>
      </li>
      <li>
        <a
          href="https://app.put.io/settings/route"
          rel="noopener noreferrer"
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
          rel="noopener noreferrer"
          target="_blank">SubHero</a
        >: SubHero is a Stremio addon that provides subtitles for movies and TV shows using the
        Wyzie Subs API.
      </li>
      <li>
        <a
          href="https://5a0d1888fa64-orion.baby-beamup.club/"
          rel="noopener noreferrer"
          target="_blank">Orion</a
        >: Orion Stremio Addon allows Orion-indexed torrent, usenet, and hoster links to be played
        on Stremio.
      </li>
      <li>
        <a
          href="https://stremio-addons.net/addons/usa-tv"
          rel="noopener noreferrer"
          target="_blank">USA TV</a
        >: Provides access to channels including local channels, news, sports, entertainment, and
        more.
      </li>
      <li>
        <a
          href="https://chromewebstore.google.com/detail/imdb-trakt-open-in-stremi/jlmmgfkhpanoeigimlaadjcdjljihmfb"
          rel="noopener noreferrer"
          target="_blank">Open in Stremio</a
        >: Allow you to open movies you see on IMDB or Trakt straight to your Stremio.
      </li>
      <li>
        <a
          href="https://2ecbbd610840-trakt.baby-beamup.club/"
          rel="noopener noreferrer"
          target="_blank">Trakt TV</a
        >: Addon for getting Trakt's public user lists, recommendations, and watch list.
      </li>
      <li>
        <a
          href="https://mediafusion.elfhosted.com/configure/"
          rel="noopener noreferrer"
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

    <p>
      <em
        >Most of these are "Community Addons" and can be found in the Stremio "Community Addons"
        section of your client for quick install. Other unlisted addons can be downloaded from <a
          href="https://stremio-addons.net/"
          rel="noopener noreferrer"
          target="_blank">here</a
        >.</em>
    </p>

    <SectionHeading
      id="faq"
      level={2}
      numbered={true}
      number="4.">
      Troubleshooting &amp; FAQ
    </SectionHeading>
    <hr />

    <SectionHeading
      id="faq-no-streams"
      level={3}>
      "No Streams Found"
    </SectionHeading>
    <p>This is the most common issue. Here's what to check, in order:</p>
    <ol>
      <li>
        <strong>VPN is on:</strong> Turn off your VPN. Debrid providers restrict access to one IP address,
        and a VPN changes yours. This is the #1 cause.
      </li>
      <li>
        <strong>Torrentio misconfigured:</strong> Revisit
        <a
          href="https://torrentio.strem.fun/lite/configure"
          rel="noopener noreferrer"
          target="_blank">torrentio.strem.fun</a> and make sure your Debrid provider is selected and your
        API key is pasted correctly.
      </li>
      <li>
        <strong>ISP blocking:</strong> Some ISPs block addon domains. Try changing your DNS to
        Cloudflare (<code>1.1.1.1</code>) or Google (<code>8.8.8.8</code>). See Stremio's
        <a
          href="https://blog.stremio.com/change-dns-resolution/"
          rel="noopener noreferrer"
          target="_blank">DNS guide</a
        >.
      </li>
      <li>
        <strong>Content not available digitally:</strong> If the movie is still in theatres, no digital
        streams exist yet. You might only see CAM/Screener quality.
      </li>
      <li>
        <strong>Niche content not cached:</strong> The torrent exists but isn't cached on your
        Debrid provider. Use
        <a
          href="https://debridmediamanager.com/"
          rel="noopener noreferrer"
          target="_blank">Debrid Media Manager</a> to manually search and add it.
      </li>
    </ol>

    <SectionHeading
      id="faq-buffering"
      level={3}>
      Buffering &amp; Stuttering
    </SectionHeading>
    <ol>
      <li>
        <strong>Check your internet speed:</strong> Test at
        <a
          href="https://speed.cloudflare.com/"
          rel="noopener noreferrer"
          target="_blank">Cloudflare Speed Test</a
        >. You need ~25 Mbps for 4K, ~10 Mbps for 1080p.
      </li>
      <li>
        <strong>Test Debrid speed:</strong> Run the speed test on your Debrid provider's site. If it's
        slow, try changing the server/route in your Debrid settings.
      </li>
      <li>
        <strong>Enable hardware-accelerated decoding:</strong> Go to Stremio Settings → Player → Advanced
        and enable it (desktop only).
      </li>
      <li>
        <strong>Choose a smaller stream:</strong> If your device struggles, pick a lower quality or smaller
        file size stream rather than the 40GB+ 4K Remux.
      </li>
      <li>
        <strong>Increase cache size:</strong> In Settings → Streaming, increase the cache size. Set the
        torrent profile to "Ultra Fast" if you're not using a Debrid service.
      </li>
    </ol>

    <SectionHeading
      id="faq-addon-install"
      level={3}>
      Addon Won't Install
    </SectionHeading>
    <ol>
      <li>
        <strong>"Install" button does nothing:</strong> The browser can't communicate with the
        Stremio app. Right-click the Install button, copy the link, and paste it into Stremio's
        search bar. Replace <code>stremio://</code> with <code>https://</code> if needed.
      </li>
      <li>
        <strong>Addon appears broken after install:</strong> Check
        <a
          href="https://status.elfhosted.com/"
          rel="noopener noreferrer"
          target="_blank">ElfHosted Status</a>
        to see if the addon's server is down. Also check
        <a
          href="https://www.reddit.com/r/StremioAddons/"
          rel="noopener noreferrer"
          target="_blank">r/StremioAddons</a> for reports.
      </li>
      <li>
        <strong>Reconfigure after Debrid renewal:</strong> Some providers (especially Real-Debrid) regenerate
        your API token when your subscription renews after it expires. Reconfigure all addons with the
        new token.
      </li>
    </ol>

    <SectionHeading
      id="faq-sync"
      level={3}>
      Syncing Between Devices
    </SectionHeading>
    <p>Stremio stores your addons and library in the cloud tied to your account. To sync:</p>
    <ol>
      <li>
        <strong>Sign into the same account</strong> on all devices. Your addons will sync automatically.
      </li>
      <li>
        <strong>Click "Sync Addons"</strong> if prompted (common on FireStick/Android TV after first sign-in).
      </li>
      <li>
        <strong>Use Stremio Web as fallback:</strong> Visit
        <a
          href="https://web.stremio.com/"
          rel="noopener noreferrer"
          target="_blank">web.stremio.com</a> to manage addons from any browser, then sync to your device.
      </li>
    </ol>

    <Admonition
      id="adm-addon-order"
      type="info"
      title="Addon Order Doesn't Sync"
      href="https://addon-manager.elfhosted.com/"
      linkTitle="Stremio Addon Manager">
      While addons themselves sync, the <em>order</em> of addons may not transfer. Use the
      <a
        href="https://addon-manager.elfhosted.com/"
        rel="noopener noreferrer"
        target="_blank">Stremio Addon Manager</a> to reorder addons on any device.
    </Admonition>

    <SectionHeading
      id="faq-download"
      level={3}>
      Downloading Content via Debrid
    </SectionHeading>
    <p>You can download content through your Debrid provider's website after starting a stream:</p>
    <ol>
      <li>
        <strong>Start playing the content</strong> in Stremio. This sends the torrent to your Debrid provider's
        servers.
      </li>
      <li>
        <strong>Go to your Debrid dashboard:</strong>
        <a
          href="https://real-debrid.com/torrents"
          rel="noopener noreferrer"
          target="_blank">Real-Debrid Torrents</a>
        or
        <a
          href="https://torbox.app/dashboard"
          rel="noopener noreferrer"
          target="_blank">Torbox Dashboard</a
        >.
      </li>
      <li>
        <strong>Download the file</strong> directly from the Debrid provider at full speed.
      </li>
    </ol>
    <p>
      Alternatively, click the 3 dots in the Stremio player and select "Download this video." You
      can also use <a
        href="https://github.com/Viren070/stremio-downloader"
        rel="noopener noreferrer"
        target="_blank">Stremio Downloader</a> for batch downloads.
    </p>

    <SectionHeading
      id="faq-red-screen"
      level={3}>
      Red Screen / Stream Won't Play
    </SectionHeading>
    <ol>
      <li>
        <strong>Expired Debrid subscription:</strong> Check that your plan is still active. If you renewed
        after expiry, your API token may have changed requiring you to reconfigure your addons.
      </li>
      <li>
        <strong>Debrid service is down:</strong> Check your provider's status page or social media.
      </li>
      <li>
        <strong>DV/HDR10+ incompatibility:</strong> Some devices (e.g., FireStick 4K Max) can't play Dolby
        Vision Profile 7 streams. Choose a non-DV stream instead.
      </li>
      <li>
        <strong>Audio plays but black screen:</strong> Your device can't decode the video. Try a different
        stream or use an external player like VLC or MX Player.
      </li>
    </ol>

    <SectionHeading
      id="faq-copyright"
      level={3}>
      Real-Debrid DMCA Takedowns
    </SectionHeading>
    <p>
      Real-Debrid complies with DMCA takedown requests, which means some torrents may be removed
      from their servers. If you see this message: <em
        >"File was removed from debrid service due to copyright infringement"</em>
    </p>
    <ol>
      <li>
        <strong>Try a different stream:</strong> Select another torrent from the stream list. Different
        uploads of the same content may still be available.
      </li>
      <li>
        <strong>Use a different addon:</strong> Try MediaFusion or other addons that may source from different
        torrents than Torrentio.
      </li>
      <li>
        <strong>Use Debrid Media Manager:</strong> Search for alternative cached torrents and add them
        to your library manually.
      </li>
      <li>
        <strong>Consider Torbox:</strong> Torbox is based in South Africa and is generally less affected
        by DMCA takedowns compared to Real-Debrid.
      </li>
    </ol>

    <SectionHeading
      id="faq-subtitles"
      level={3}>
      Subtitle Issues
    </SectionHeading>
    <ol>
      <li>
        <strong>No subtitles appearing:</strong> Install the
        <a
          href="https://stremio-addons.net/addons/subhero-v2"
          rel="noopener noreferrer"
          target="_blank">SubHero</a> addon for automatic subtitle fetching.
      </li>
      <li>
        <strong>Subtitles display incorrectly:</strong> This usually happens with SSA/ASS subtitle formats.
        Stremio's default player (ExoPlayer) doesn't support them fully. Switch to an external player
        like Vimu Player or VLC.
      </li>
      <li>
        <strong>Use your own subtitles:</strong> Drag and drop a subtitle file (.srt, .vtt) directly into
        the Stremio player.
      </li>
    </ol>

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
          rel="noopener noreferrer"
          target="_blank">Guide to Stremio Torrentio</a>
      </li>
      <li>
        <a
          href="https://www.firesticktricks.com/stremio-firestick.html"
          rel="noopener noreferrer"
          target="_blank">FireStick Stremio Setup</a>
      </li>
      <li>
        <a
          href="https://guides.viren070.me/stremio"
          rel="noopener noreferrer"
          target="_blank">Stremio User Manual</a>
      </li>
      <li>
        <a
          href="https://www.comparitech.com/kodi/what-is-stremio/#:~:text=First%20you'll%20need%20a,allowed%20to%20access%20your%20account."
          rel="noopener noreferrer"
          target="_blank">Signing Into Trakt</a>
      </li>
      <li>
        <a
          href="https://www.reddit.com/r/Addons4Kodi/comments/1hfa8cp/comparison_of_debrid_services_for_streaming/"
          rel="noopener noreferrer"
          target="_blank">Debrid Services</a>
      </li>
      <li>
        <a
          href="https://stremio.zendesk.com/hc/en-us/categories/115000394751-Frequently-Asked-Questions"
          rel="noopener noreferrer"
          target="_blank">Stremio FAQ's</a>
      </li>
    </ul>

    <p class="dimmed">
      Please reach out to me if any issues arise. This guide's source code is available
      <a
        href="https://github.com/itzcozi/stremio-guide"
        rel="noopener noreferrer"
        target="_blank">here</a
      >. I'm open to additions and corrections via pull requests on Github. Join our community on{" "}
      <a
        href="https://t.me/+B3UIJrNsWf0wNzJh"
        rel="noopener noreferrer"
        target="_blank">Telegram</a> for discussions and support regarding Stremio!
    </p>

    <Footer />
  </div>
</div>
