
<script lang="ts">
  export let currentTab:string;
  export let tabName: string;
</script>

{#if tabName == currentTab}
<div class="tab-item h-full w-full">
  <slot />
</div>
{/if}