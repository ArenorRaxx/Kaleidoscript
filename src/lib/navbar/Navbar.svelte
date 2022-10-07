<script lang="ts">
	import { navOptions } from "./Nav.svelte"
	import NavElem from "./NavElem.svelte";
	import { fade } from "svelte/transition";

	let tooltipText: string = "";

	function showTooltip(event: CustomEvent) {
		tooltipText = event.detail.description;
	}
	function hideTooltip() {
		tooltipText = "";
	}
</script>

<nav id="navBar">
	<ul id="navBar-nav">
		{#each navOptions as element}
		<NavElem {element} on:selected={showTooltip} on:unselected={hideTooltip}/>
		{/each}
	</ul>
</nav>
{#if tooltipText}
<div id="tooltip-box" in:fade={{duration: 100}} out:fade={{duration: 200}}>{tooltipText}</div>
{/if}

<style>
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	#navBar {
		height: var(--nav-size);
		float: left;

		padding: 0.5rem 1rem;
		border-bottom: var(--border);
		background-color: var(--bg);
	}

	#navBar-nav {
		max-width: 100%;
		height: 100%;

		display: flex;
		justify-content: flex-end;
	}

	#tooltip-box {
		height: calc(var(--nav-size) * 0.7);

		float: left;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 0 0 5px;
		padding: 0.5rem 1rem;

		background-color: var(--tooltip-bg);
		color: whitesmoke;
	}

</style>