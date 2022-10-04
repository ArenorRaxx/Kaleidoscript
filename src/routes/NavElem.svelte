<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import type { NavOption } from "./Nav.svelte";
	
	export let element: NavOption;
	const { icon, description, data } = element;
	const component = data?.component;
	const handleClick = data?.handleClick;


	const dispatch = createEventDispatcher();

	function onSelectionTooltipChange() {
		dispatch("selected", {
			description
		})
	}
	function onUnselectionTooltipHide() {
		dispatch("unselected");
	}
</script>

<li class="navElem">
	{#if handleClick}
	<a href="/" class="iconButton"
		on:mouseenter={onSelectionTooltipChange}
		on:mouseleave={onUnselectionTooltipHide}
		on:click="{handleClick}">
		{@html icon}
	</a>
	{:else}
	<a href="/" class="iconButton"
		on:mouseenter={onSelectionTooltipChange}
		on:mouseleave={onUnselectionTooltipHide}>
		{@html icon}
	</a>
	{/if}
	{#if component}
	<svelte:component this={component}></svelte:component>
	{/if}
</li>

<style>
	:root {
		--button-size: calc(var(--nav-size) * 0.5);
	}

	.navElem {
		width: calc(var(--nav-size) * 0.8);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.iconButton {
		width: var(--button-size);
		height: var(--button-size);
		background-color: rgba(42, 42, 42);
		opacity: 30%;
		border-radius: 50%;
		padding: 5px;
		margin: 2px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: opacity 100ms ease-in;
	}

	.iconButton:hover {
		opacity: 100%;
		box-shadow: 0px 0px 2px 2px #333, 0px 0px 5px 6px rgba(245, 245, 245, 0.7);
	}

</style>