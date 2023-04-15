<script lang="ts">
  import { onMount } from "svelte";

	let visible = false;
	export let value: string = ""
	export function toggle() { visible = !visible }
	function typewriter(node: HTMLElement , { speed = .3 }) {
		const valid = (
			node.childNodes.length === 1 &&
			node.childNodes[0].nodeType === Node.TEXT_NODE
		);

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text: string = node?.textContent || "";

		const duration = text.length / (speed * 0.01);
		setInterval(()=> {
				
				visible = !visible
		},duration + 2000)
			

		return {
			duration,
			tick: (t: number) => {

			
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}


	onMount(()=> {
		setTimeout(()=> {visible = true}, 2000)
	})

	
</script>

{#if visible}
	<span transition:typewriter={{speed: .3}} class=" underline">
		{value}
	</span>
{/if}