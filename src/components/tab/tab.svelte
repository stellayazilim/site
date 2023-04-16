
<script lang="ts">
    import { onMount, afterUpdate  } from "svelte";
  import { beforeUpdate } from "svelte/internal";

    import { fade , fly } from "svelte/transition";
    export let items: string[]
    export let currentTab: string;

     
</script>

<div id="tab" class="tab container mx-auto flex flex-col h-[42rem] mt-20 bg-default-dark-primary px-24 overflow-hidden">

    <ul id="tab-menu" class="tab-menu flex flex-row  w-full  text-white text-lg font-semibold   ">
        {#each items as tabMenuItem}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <li 
            on:click={()=> currentTab = tabMenuItem}
            class:active={tabMenuItem == currentTab} class="py-8 flex w-full items-center cursor-pointer duration-300 justify-center border-solid border-opacity-50 border-gray-400 border-b-2 hover:border-blue-700">{tabMenuItem.replace(/#.+/, "")}</li>
        {/each}
       
    </ul>
   
    
        {#key currentTab}
            <div in:fly={{ x: 1110, y: 0}}  class="flex-1">
                    <slot currentTab={currentTab} />
            </div>
        {/key}
</div>  



<style lang="less">
    .active {
        @apply border-blue-700;
    }
</style>