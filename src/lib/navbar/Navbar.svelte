<script lang="ts">
	import { navOptions } from "./Nav.svelte"
	import NavElem from "./NavElem.svelte";
	import Tooltip from "./Tooltip.svelte";

	let tooltipText: string = "";
	let visible: boolean = false;

	function showTooltip(event: CustomEvent) {
		tooltipText = event.detail.description;
		visible = true;
	}

	function hideTooltip() {
		visible = false;
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
<Tooltip bind:visible>{tooltipText}</Tooltip>

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

</style>