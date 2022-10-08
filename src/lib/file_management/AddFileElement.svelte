<script context="module" lang="ts">
	export function onAddFileClick() {
		const fileInputElement = document.getElementById("fileInputElement");
		fileInputElement?.click();
	}
</script>

<script lang="ts">
	import FileStore from "./FileStoreModule";
	import type { TypedNodeFile } from "./file_classes";
	import TextFile from "./file_classes/TextFile";

	interface FileInputElement extends HTMLInputElement {
		files: FileList;
	}

	function handleAddFile(event: Event){
		const inputElement = event.target as FileInputElement;
		const currentFile = inputElement.files[0];
		if (!FileStore.getFileByName(currentFile.name))
			storeFile(currentFile);
	}

	function storeFile(file: File) {
		const fileToAdd = typeFile(file);
		$FileStore = fileToAdd;
	}

	function typeFile(file: File): TypedNodeFile {
		return (new TextFile(file));
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