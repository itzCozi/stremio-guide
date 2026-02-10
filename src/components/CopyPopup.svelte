<script>
  import { CopyCheck } from "lucide-svelte";

  export let visible = false;
</script>

{#if visible}
  <div class="popup">
    <div class="flex items-center justify-center flex-row gap-2">
      <CopyCheck class="h-5 w-auto" />
      Copied to clipboard
    </div>
  </div>
{/if}
