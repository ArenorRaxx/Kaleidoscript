<script context="module" lang="ts">

	import AddFileElement from "../file_management/AddFileElement.svelte";
	import { onAddFileClick } from "../file_management/AddFileElement.svelte"
	import plusIconUrl from "../../plus.svg?src";
	import cogIconUrl from "../../cog.svg?src";

	export type NavOption = {
		icon: string,
		description: string,
		data: {
			component?: ConstructorOfATypedSvelteComponent,
			handleClick?: any,
		}
	}

	export const navOptions: NavOption[] = [
		{ icon: cogIconUrl, description: "Settings", data: {} },
		{ icon: plusIconUrl, description: "Add file to diagram", data: { component: AddFileElement, handleClick: onAddFileClick } },
	]

</script>