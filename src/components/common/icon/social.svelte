<script lang="ts">

    export let link: string;
</script>

<a href={link} class="inline-flex items-center justify-center bg-gray-500 bg-opacity-50 w-14 h-14 rounded-full hover:bg-blue-500 duration-300 transition-colors"> 
    <slot />
</a>
