<script lang="ts">
	import FileStore from "./FileStoreModule";

	function handleAddFile(event: Event){
		const inputElement = event.target as HTMLInputElement;
		if (inputElement.files)
			$FileStore = inputElement.files[0];
	}
</script>

<script context="module" lang="ts">
	export function onAddFileClick() {
		const fileInputElement = document.getElementById("fileInputElement");
		fileInputElement?.click();
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