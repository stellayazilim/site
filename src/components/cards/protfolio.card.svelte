<script lang="ts">
    export let image: {
        src: string,
        alt: string
    };


</script>

<div class="w-full h-full  relative overflow-hidden  group ">
    <img src={image.src} class="w-full h-full object-cover rounded-lg group-hover:blur-sm" alt={image.alt}>

        <div class="absolute w-96 h-24 -bottom-24 group-hover:bottom-10 left-10 flex shadow-xl duration-300 shadow-gray-500">

            <div class="flex-1 flex flex-col justify-center items-start px-4 z-10  bg-gray-200 bg-opacity-90">
                <h3 class="text-gray-500  font-semibold text-2xl"> 
                    Photo Retouching
                </h3>
        
                <h4 class="text-gray-400 text-lg">
                    Branded Ecommerce
                </h4>
            </div>
            <div class=" row-span-2 border-l border-transparent  h-full bg-gray-200  bg-opacity-80 border-white flex items-center justify-center">
                <span class=" flex items-center w-14 h-14 justify-center bg-gray-400 rounded-full mx-6 cursor-pointer hover:bg-blue-400 duration-200">
                    <i class="fa-solid fa-arrow-right text-white text-2xl"></i>
                </span>
            </div>
    </div>
</div>