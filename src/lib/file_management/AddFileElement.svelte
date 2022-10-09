<script context="module" lang="ts">
	import FileStore from "./FileStoreModule";

	export function onAddFileClick() {
		const fileInputElement = document.getElementById("fileInputElement");
		fileInputElement?.click();
	}
	
	interface FileInputElement extends HTMLInputElement {
		files: FileList;
	}

	function handleAddFile(event: Event){
		const inputElement = event.target as FileInputElement;
		const fileToAdd = inputElement.files[0];
		FileStore.set(fileToAdd);
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