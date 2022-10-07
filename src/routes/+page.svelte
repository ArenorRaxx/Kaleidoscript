<script lang="ts">
	import Navbar from "../lib/navbar/Navbar.svelte";
	import { fileStore } from "$lib/file_management/file_list";
	import { onMount } from "svelte"; 
	import { onAddFileClick } from "$lib/file_management/AddFileElement.svelte";

	function onAddFile(file: File) {
		console.log("yes");
	}

	onMount(fileStore.subscribe(onAddFile));

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