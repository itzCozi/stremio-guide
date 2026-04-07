<script>
  import { ChevronRight } from "lucide-svelte";

  export let isOpen = false;
  export let onToggle;
</script>

<div class="toc {isOpen ? '' : 'collapsed'}">
  <div class="toc-content flex flex-col h-full">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <span class="font-bold">Table of Contents</span>
      <button
        type="button"
        aria-label="Close table of contents"
        on:click={onToggle}
        class="flex items-center p-1">
        <ChevronRight class="h-[1.25rem] w-auto cursor-pointer" />
      </button>
    </div>
    <hr class="sm" />

    <!-- TOC Links -->
    <div class="flex-grow overflow-y-auto">
      <a href="#how-to">Intro</a>
      <ul class="sm">
        <li><a href="#what-you-need">What You'll Need</a></li>
        <li><a href="#for-da-free">For Free?</a></li>
      </ul>
      <a href="#token">Debrid Service Token</a>
      <ul class="sm">
        <li><a href="#real-debrid-sub">Real-Debrid Subscription</a></li>
        <li><a href="#torbox-sub">Torbox Subscription</a></li>
        <li><a href="#adm-debrid-limits">Limits of Debrid Providers</a></li>
      </ul>
      <a href="#stremio">Stremio Setup</a>
      <ul class="sm">
        <li><a href="#install">Install</a></li>
        <li><a href="#adm-device-support">Device Support</a></li>
        <li><a href="#adm-vpn">Turn Off Your VPN</a></li>
        <li><a href="#manual-install">Manual Addon Install</a></li>
        <li><a href="#adm-hw-decode">HW-Accelerated Decoding</a></li>
        <li><a href="#more-addons">Additional Addons</a></li>
      </ul>
      <a href="#extra">Extra Setup</a>
      <ul class="sm">
        <li><a href="#firestick">FireStick Setup</a></li>
        <li><a href="#android">Android Setup</a></li>
        <li><a href="#samsung-lg">Samsung & LG TV</a></li>
        <li><a href="#usenet">Usenet Setup</a></li>
        <li><a href="#metadata">Metadata Addons</a></li>
        <li><a href="#trakt">Logging Into Trakt.tv</a></li>
        <li><a href="#debrid">Different Debrid Providers</a></li>
        <li><a href="#adm-legal">Legal Limitations</a></li>
        <li><a href="#speed-tests">Debrid Speed Tests</a></li>
        <li><a href="#adm-restricted">Restricted Access</a></li>
        <li><a href="#dmm">Debrid Media Manager</a></li>
        <li><a href="#addons">Other Addons</a></li>
        <li><a href="#rpdb">RPDB (Ratings)</a></li>
      </ul>
      <a href="#faq">Troubleshooting & FAQ</a>
      <ul class="sm">
        <li><a href="#faq-no-streams">No Streams Found</a></li>
        <li><a href="#faq-buffering">Buffering</a></li>
        <li><a href="#faq-addon-install">Addon Won't Install</a></li>
        <li><a href="#faq-sync">Syncing Devices</a></li>
        <li><a href="#faq-download">Downloading Content</a></li>
        <li><a href="#faq-red-screen">Red Screen / Won't Play</a></li>
        <li><a href="#faq-subtitles">Subtitle Issues</a></li>
      </ul>
      <a href="#more">More Questions?</a>
    </div>

    <!-- Footer -->
    <div class="toc-footer mt-2">
      <div class="flex justify-between items-center">
        <a
          href="https://t.me/+B3UIJrNsWf0wNzJh"
          target="_blank">Telegram</a>
        <a
          href="https://github.com/itzcozi/stremio-guide"
          target="_blank">Github</a>
      </div>
    </div>
  </div>
</div>
