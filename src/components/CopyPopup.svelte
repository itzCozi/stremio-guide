<script>
  import { CopyCheck } from "lucide-svelte";
  import { fly } from "svelte/transition";

  export let visible = false;
</script>

{#if visible}
  <div
    class="popup"
    transition:fly={{ y: 10, duration: 300 }}>
    <div class="flex items-center justify-center flex-row gap-2">
      <CopyCheck class="h-5 w-auto" />
      Copied to clipboard
    </div>
  </div>
{/if}
