<script lang="ts">
	import { toggleVisualiser } from "./VisualiserStore";
	import type { Tweened } from "svelte/motion";
	import { tweened } from "svelte/motion";
	import { quartOut } from "svelte/easing";
	import { onDestroy } from "svelte";

	const widthOfVisu: Tweened<number> = tweened(100, {
		duration: 1000,
		easing: quartOut
	})

	const unsubscribeToggle = toggleVisualiser.subscribe((toggle: boolean): void => {
		const newValueOfVisuWidth: number = 50 + (toggle ? 0 : 50);
		widthOfVisu.set(newValueOfVisuWidth);
	})

	onDestroy(() => unsubscribeToggle);
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