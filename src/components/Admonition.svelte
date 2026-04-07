<script>
  import { TriangleAlert, Info, BadgeInfo } from "lucide-svelte";

  export let type = "warning";
  export let title;
  export let id = "";
  export let href = "";
  export let linkTitle = "";
</script>

<div
  class="admonition {type}"
  id={id || undefined}>
  <div class="flex flex-row items-center gap-2 pb-2">
    {#if href}
      <a
        {href}
        rel="noopener noreferrer"
        title={linkTitle}
        target="_blank"
        class="flex items-center">
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
    <span class="admonition-title">{title}</span>
  </div>
  <slot />
</div>
