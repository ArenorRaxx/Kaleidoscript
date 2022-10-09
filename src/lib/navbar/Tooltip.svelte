<script lang="ts">
	import { fade } from "svelte/transition";

	export let visible: boolean = false;
</script>

{#if visible}
<div id="tooltip-box" in:fade={{duration: 100}} out:fade={{duration: 200}}>
	<slot></slot>
</div>
{/if}

<style>
	#tooltip-box {
		height: calc(var(--nav-size) * 0.7);

		float: left;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 0 0 5px;
		padding: 0.5rem 1rem;

		font-family: "Monserrat", sans-serif;

		background-color: var(--tooltip-bg);
		color: whitesmoke;
	}
</style>