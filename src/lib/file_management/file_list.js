import { writable } from "svelte/store";

export const addFileStore = fileStoreInit();

function fileStoreInit()  {
	const currentFile = writable();

	function currentFile_set(file) {
		currentFile.set(file);
	}

	return { subscribe: currentFile.subscribe, set: currentFile_set }
}