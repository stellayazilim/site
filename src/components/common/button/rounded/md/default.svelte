
<script lang="ts">
    export let type: "button" | "submit"
</script>
<button type={type || "button"} class="px-5 py-2 bg-blue-600 rounded-sm text-gray-200 font-semibold">
    <slot />
</button>