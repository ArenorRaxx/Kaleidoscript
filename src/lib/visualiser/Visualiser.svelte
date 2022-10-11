<script lang="ts">
	import type { Tweened } from "svelte/motion";
	import { tweened } from "svelte/motion";
	import { quintInOut } from "svelte/easing";

	export let toggleVisualiser = false;
	
	const widthOfVisu: Tweened<number> = tweened(50, {
		duration: 2000,
		easing: quintInOut
	})
	$: $widthOfVisu = 50 + (toggleVisualiser ? 50 : 0);
</script>

<div id="visu-container" style="right: -{$widthOfVisu}%">
</div>

<style>
	#visu-container {
		top: -100%;
		position: relative;
		height: 100%;
		z-index: 10;
		background-color: var(--visu-bg);
	}
</style>