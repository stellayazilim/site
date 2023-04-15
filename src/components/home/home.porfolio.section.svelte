<script lang="ts">
    import ProtfolioCard from "$components/cards/protfolio.card.svelte";
    import Grid2x3 from "$components/grids/2x3.svelte";
    import BtnRoundedMd from "$components/common/button/rounded/md/default.svelte"
    import { calculateGrid } from "src/misc/calculate-grid-layout";
    import Protfolio from "$components/cards/protfolio.card.svelte";
    import _ from "underscore"
    let active = "All"
    const categories = ["All", "Branding Strategy", "Digital Experinces", "eCommerce"]


  
    const portofolios = [
        {
            image: {
                src: "/image-8.jpg",
                alt: "image-8",
            },
            category: "Branding Strategy"
        },
        {
            image: {
                src: "/image-9.jpg",
                alt: "image-9",
            },
            category: "Digital Experinces"
        },
        {
            image: {
                src: "/image-10.jpg",
                alt: "image-10",
            },
            category: "eCommerce"
        },
        {
            image: {
                src: "/image-11.jpg",
                alt: "image-11",
            },
            category: "eCommerce"
        }
    ]

    $: items = active == "All" ? portofolios : portofolios.filter( x => x?.category == active)
    const handleChangeCategory = (category: string) => {
        
        active = category;
    }
</script>

<div class="container mx-auto">
    <ul class="flex items-center justify-center gap-4 my-24 text-gray-200 font-semibold">

        
        {#each Array.from(["All", ...new Set(portofolios.map(p => p.category))]) as category, i}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <li on:click={()=>handleChangeCategory(category)} class:active={active == category} class="cursor-pointer">{category}</li>
        {/each}
     
    </ul>

    <div class="h-[36rem]">

       
        <Grid2x3>

            {#each _.shuffle([...items, ...Array.from(new Array(4 - items.length))]) as portofolio, i}

                {#if portofolio}

                    <div class="bg-default-dark-primary {calculateGrid(active == "All" ? 1: 0,i)}">
                        
                        <ProtfolioCard image={{src: "/image-8.jpg", alt: "image"}} />
                    </div>
                {:else}
                     <div class="{calculateGrid((active == "All" ? 1: 0),i)}"></div>
                {/if}
             
            {/each}

         </Grid2x3>
          
      
    </div>

    
    <div class="flex mx-auto items-center justify-center p-12">
        <BtnRoundedMd type="button" >
            <span class="flex items-center gap-4 text-xl py-4 px-8">
                See More Product
                <i class="fa-solid fa-arrow-right"></i>
            </span>  
        </BtnRoundedMd>
    </div>
</div>



<style lang="less">

    .active {
        @apply underline underline-offset-2;
    }
</style>