<script lang="ts">
	import FileStore from "$lib/file_management/FileStoreModule";
	import Navbar from "$lib/navbar/Navbar.svelte";
	import Diagram from "$lib/diagram/Diagram.svelte";
	import { onDestroy } from "svelte"; 

	const unsubscribe = FileStore.subscribe((value) => console.log("New File Added"));

	onDestroy(() => (unsubscribe()));

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