<script context="module" lang="ts">

	import AddFileElement from "./AddFileElement.svelte";
	import { onAddFileClick } from "./AddFileElement.svelte"
	import plusIconUrl from "../plus.svg?src";
	import cogIconUrl from "../cog.svg?src";

	export type NavOption = {
		icon: string,
		description: string,
		data: {
			handleClick?: any,
			component?: ConstructorOfATypedSvelteComponent,
		}
	}

	export const navOptions: NavOption[] = [
		{ icon: cogIconUrl, description: "Settings", data: {} },
		{ icon: plusIconUrl, description: "Add file to diagram", data: { component: AddFileElement, handleClick: onAddFileClick } }
	]

</script>