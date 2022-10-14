<script lang="ts">
	import VisualiserStore from "$lib/visualiser/VisualiserStore";

	$: imageData = $VisualiserStore.data;
</script>

<div id="image-container">
	{#await imageData}
		...
	{:then src}
		<img {src} alt="random shit"/>
	{/await}
</div>

<style>
	#image-container {
		flex: 9;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#image-container img {
		max-width: 50%;
		height: auto;
	}
</style>