<script>
  import { ChevronRight } from "lucide-svelte";

  export let isOpen = false;
  export let onToggle;
</script>

<div class="toc {isOpen ? '' : 'collapsed'}">
  <div class="toc-content flex flex-col h-full">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <p class="font-bold text-center">Table of Contents</p>
      <div class="flex items-center">
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <span on:click={onToggle}>
          <ChevronRight class="h-[1.25rem] w-auto cursor-pointer" />
        </span>
      </div>
    </div>
    <hr class="sm" />

    <!-- TOC Links -->
    <div class="flex-grow overflow-y-auto">
      <a href="#how-to">Intro</a>
      <ul class="sm">
        <li><a href="#preview">Preview</a></li>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#for-da-free">For Free?</a></li>
      </ul>
      <a href="#token">Debrid Service Token</a>
      <ul class="sm">
        <li><a href="#real-debrid-sub">Real-Debrid Subscription</a></li>
        <li><a href="#torbox-sub">Torbox Subscription</a></li>
      </ul>
      <a href="#stremio">Stremio Setup</a>
      <ul class="sm">
        <li><a href="#install">Install</a></li>
        <li><a href="#manual-install">Manual Addon Install</a></li>
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
        <li><a href="#speed-tests">Debrid Speed Tests</a></li>
        <li><a href="#dmm">Debrid Media Manager</a></li>
        <li><a href="#addons">Other Addons</a></li>
        <li><a href="#rpdb">RPDB (Ratings)</a></li>
        <li><a href="#devices">Best Streaming Devices</a></li>
        <li><a href="#addon-manager">Addon Manager</a></li>
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
