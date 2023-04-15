<script lang="ts">

export let image: { src: string, alt: string};
export let name: string;
export let position: string;
</script>


<div class="w-full">

    <div class="group relative w-full h-96 ed-400 overflow-hidden ">
        <img src={image?.src} class=" group-hover:blur-sm duration-300 w-full h-full objec-cover   rounded-lg"  alt={image?.alt}>
        <div class="absolute flex w-full justify-center items-center gap-4 -bottom-20 z-20  group-hover:bottom-16 duration-300">
            <slot  />
        </div>
    </div>

    <h3 class="mt-6 text-3xl text-gray-200 font-semibold text-center">
        {name}
    </h3>
    <p class="p-2 text-gray-500 text-xl text-center">
        {position}
    </p>
</div>