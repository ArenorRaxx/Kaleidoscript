<script lang="ts">
	import FileStore from "$lib/file_management/FileStoreModule";
	import Navbar from "$lib/navbar/Navbar.svelte";
	import Diagram from "$lib/diagram/Diagram.svelte";
	import { onDestroy } from "svelte"; 

	const unsubscribe = FileStore.subscribe((value) => console.log("New File Added"));

	onDestroy(() => (unsubscribe()));

</script>

<Navbar/>

<style global>
	body {
		background-color: bisque;
}

	.iconButton:hover svg {
		fill: whitesmoke;
}
</style>