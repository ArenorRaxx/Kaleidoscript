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
		flex: 1;
		background-color: bisque;
	}
</style>