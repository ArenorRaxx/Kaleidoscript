<script context="module" lang="ts">
	export function onAddFileClick() {
		const fileInputElement = document.getElementById("fileInputElement");
		fileInputElement?.click();
	}
</script>

<script lang="ts">
	import { addFileStore } from "./file_list.js";

	function handleAddFile(event: Event){
		const inputElement = event.target as HTMLInputElement;
		if (inputElement.files)
			$addFileStore = inputElement.files[0];
	}
</script>

<input id="fileInputElement" type="file" on:change="{handleAddFile}"/>

<style>
	#fileInputElement {
		position: absolute;
		top: var(--nav-size);
		right: 0px;
		display: none;
	}
</style>