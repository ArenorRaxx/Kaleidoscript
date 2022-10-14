<script lang="ts">
	import VisualiserStore from "$lib/visualiser/VisualiserStore";

	$: textOfFile = $VisualiserStore.data;
</script>

<div id="text-container">
	<pre id="text-zone">
	{#await textOfFile}
...
	{:then text}
{text}
	{/await}
	</pre>
</div>

<style>
	#text-zone {
		width: 80%;
		margin: auto;
		padding-top: 40px;
		font-size: 22px;
		font-family: "Monserrat", sans-serif;
		text-align: justify;
		word-break: break-all;
	}

	#text-container {
		flex: 9;
		width: 90%;
		margin: auto;
		overflow-x: hidden;
		background-color: whitesmoke;
	}
</style>