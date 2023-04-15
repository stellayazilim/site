<script lang="ts">
    export let mainHeader: string;
    export let subHeader: string;
    export let text: string;
</script>

    <h2 data-aos="fade-left"  data-content={mainHeader} style="" class="text-6xl font-bold text-gray-200 w-[46rem] mx-auto text-center pt-20">
        {subHeader}
    </h2>

    <p class="text-center text-2xl mx-auto mt-6 w-[36rem] text-gray-400 ">
        {text}
    </p>




<style lang="less">
    h2 {
    @apply relative z-10;
    &::before {
        content: attr(data-content);
        @apply absolute top-3 left-0 mx-auto w-full text-8xl text-center text-gray-800 -z-10 opacity-60;
        
    }
}
</style>