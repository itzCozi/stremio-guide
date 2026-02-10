<script>
  import { TriangleAlert, Info, BadgeInfo } from "lucide-svelte";

  export let type = "warning";
  export let title;
  export let href = "";
  export let linkTitle = "";
</script>

<div class="admonition {type === 'info' ? 'info' : ''}">
  <div class="flex flex-row gap-1">
    {#if href}
      <a
        {href}
        rel=""
        title={linkTitle}
        target="_blank">
        {#if type === "info"}
          <Info class="h-5 w-auto" />
        {:else if type === "badge-info"}
          <BadgeInfo class="h-5 w-auto" />
        {:else}
          <TriangleAlert class="h-5 w-auto" />
        {/if}
      </a>
    {:else if type === "info"}
      <Info class="h-5 w-auto" />
    {:else if type === "badge-info"}
      <BadgeInfo class="h-5 w-auto" />
    {:else}
      <TriangleAlert class="h-5 w-auto" />
    {/if}
    <p class="admonition-title">{title}</p>
  </div>
  <slot />
</div>
