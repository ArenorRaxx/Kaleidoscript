<script context="module" lang="ts">
</script>

<script lang="ts">
	import VisualiserStore, { toggleVisualiser } from "./VisualiserStore";
	import type { Tweened } from "svelte/motion";
	import { writable } from "svelte/store";
	import type { Writable } from "svelte/store";

	const visuWidth: Tweened<number> = toggleVisualiser.widthCursor;
	const loadFileComponent: Writable<boolean> = writable(false);

	$: $loadFileComponent = ($visuWidth === 50 ? true : false);
</script>

<div id="visu-container" style="right: -{$visuWidth}%">
	{#if $loadFileComponent && $VisualiserStore}
		<h1>{$VisualiserStore.name}</h1>
		<svelte:component this={$VisualiserStore.visuComponent}/>
	{/if}
</div>

<style>
	#visu-container {
		width: 50%;
		height: calc(100%);
		display: flex;
		flex-direction: column;
		position: relative;
		top: -100%;
		z-index: 10;
		background-color: var(--visu-bg);
	}
	
	h1 {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: "Monserrat", sans-serif;
		font-weight: 600;
		font-variant: small-caps;
		text-align: center;
		margin: 0;
	}
</style>