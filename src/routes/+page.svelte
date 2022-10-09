<script context="module" lang="ts">
	import Navbar from "$lib/navbar/Navbar.svelte";
	import Diagram from "$lib/diagram/Diagram.svelte";
</script>

<div id="nav-container">
	<Navbar/></div>
<div id="action-zone">
	<Diagram/></div>

<style>
#nav-container {
	z-index: 100;
	width: 100%;
	position: absolute;
	top: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

#action-zone {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
}
</style>