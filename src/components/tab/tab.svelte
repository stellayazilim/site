
<script lang="ts">
    import { onMount, afterUpdate  } from "svelte";


    export let items: string[]

    let tabs: HTMLElement;
    let tabItems: Element[]
    export let currentTab: number = 0;


    onMount(()=> {
        tabItems =  Array.from(tabs.querySelectorAll(".tab-item"))

    })

    afterUpdate(()=> {
        tabItems.forEach((tabItem ) => (tabItem as HTMLDivElement).hidden = true);
        (tabItems[currentTab] as HTMLDivElement).hidden = false;
        
    } );


     
</script>

<div id="tab" class="tab container mx-auto flex flex-col h-[42rem] mt-20 bg-default-dark-primary px-24">

    <ul id="tab-menu" class="tab-menu flex flex-row  w-full  text-white text-lg font-semibold   ">
        {#each items as tabMenuItem, i}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <li 
            on:click={()=> currentTab = i}
            class:active={i == currentTab} class="py-8 flex w-full items-center cursor-pointer duration-300 justify-center border-solid border-opacity-50 border-gray-400 border-b-2 hover:border-blue-700">{tabMenuItem.replace(/#.+/, "")}</li>
        {/each}
       
    </ul>
   
    

    <div bind:this={tabs} class="flex-1">
        <slot />
    </div>

</div>  



<style lang="less">
    .active {
        @apply border-blue-700;
    }
</style>