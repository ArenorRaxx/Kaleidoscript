<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import FileStore from "$lib/file_management/FileStoreModule";
	import Diagram from "./DiagramModule";

	onMount(() => {
		const diagramDiv = document.getElementById("diagram") as HTMLDivElement;
		Diagram.init(diagramDiv);
	});

	const unsubscribe = FileStore.subscribe(Diagram.addFile);
	onDestroy(() => unsubscribe);
</script>

<div id="diagram">
</div>

<style>
	#diagram {
		width: 100%;
		height: 100%;
		position: relative;
		z-index: 0;
		background-color: bisque;
	}
</style>