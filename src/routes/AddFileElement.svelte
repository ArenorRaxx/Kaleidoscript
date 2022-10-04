<script context="module" lang="ts">
	export function onAddFileClick() {
		const fileInputElement = document.getElementById("fileInputElement");
		fileInputElement?.click();
	}
</script>

<input id="fileInputElement" type="file"/>

<style>
	#fileInputElement {
		position: absolute;
		top: var(--nav-size);
		right: 0px;
		display: none;
	}
</style>