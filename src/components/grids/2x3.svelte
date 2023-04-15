<script>
    import { fly , slide} from 'svelte/transition';
</script>
<div in:slide={{axis: "x"}} class="grid grid-rows-2 grid-cols-3 gap-12 h-full w-full">

   
    <slot  />
</div>