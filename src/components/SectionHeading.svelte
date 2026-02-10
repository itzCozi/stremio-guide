<script>
  import { CopyCheck } from "lucide-svelte";

  export let id;
  export let level = 3;
  export let numbered = false;
  export let number = "";

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

  function handleClick() {
    const url = window.location.origin + "/#" + id;
    copyToClipboard(url);
    window.location.href = url;
  }
</script>

{#if level === 1}
  <h1
    {id}
    class="flex flex-row gap-2 justify-center items-center relative">
    <button
      class="jump-to absolute font-normal"
      type="button"
      on:click={handleClick}>#</button>
    <slot />
  </h1>
{:else if level === 2}
  <h2
    {id}
    class="flex flex-row gap-2 items-center relative">
    <button
      class={numbered ? "jump-to-2" : "jump-to"}
      type="button"
      on:click={handleClick}
      >{#if numbered}<em>{number}</em>{:else}#{/if}</button>
    <slot />
  </h2>
{:else if level === 3}
  <h3
    {id}
    class="flex flex-row gap-2 items-center relative">
    <button
      class="jump-to"
      type="button"
      on:click={handleClick}>#</button>
    <slot />
  </h3>
{:else}
  <p
    {id}
    class="flex flex-row gap-2 items-center relative">
    <button
      class="jump-to"
      type="button"
      on:click={handleClick}>#</button>
    <slot />
  </p>
{/if}
