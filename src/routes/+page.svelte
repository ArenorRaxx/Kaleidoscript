<script lang="ts">
	import Navbar from "./Navbar.svelte";
	import AddFile from "./AddFileElement.svelte";
</script>

<AddFile/>

<Navbar/>

<style global>
	body {
		background-color: bisque;
	}

	.iconButton:hover svg {
		fill: whitesmoke;
	}
</style>