import FileStore from "$lib/file_management/FileStoreModule";
import type { NodeFile } from "$lib/file_management/file_classes";
import type { Tweened } from "svelte/motion";
import { tweened } from "svelte/motion";
import { quartOut } from "svelte/easing";

interface Toggler {
	toggle: boolean,
	widthCursor: Tweened<number>
	subscribers: Function[],
	subscribe: (callback: (toggle: boolean) => void) => Function,
	set: () => void,
}

export const toggleVisualiser: Toggler = {
	toggle: false,
	widthCursor: tweened(100, {
		duration: 1000,
		easing: quartOut
	}),
	subscribers: [],
	subscribe: function (callback: (toggle: boolean) => void): Function{
		this.subscribers.push(callback);

		return () => {
			const index = this.subscribers.findIndex(
				(subscribed: Function) => subscribed === callback
			);
			subscribers.splice(index, 1);
		}
	},

	set: function () {
		this.toggle = !this.toggle;
		const newValueOfVisuWidth: number = 50 + (this.toggle ? 0 : 50);
		this.widthCursor.set(newValueOfVisuWidth);
		subscribers.forEach((toCall) => {
			toCall(this.toggle);
		})
	}
}

let currentSelectedFile: NodeFile;
const subscribers: Function[] = [];

export default {
	subscribe(callback: (file: NodeFile) => void): Function {
		subscribers.push(callback);
		callback(currentSelectedFile);

		return () => {
			const index = subscribers.findIndex((subscribed: Function) => subscribed === callback);
			subscribers.splice(index, 1);
		}
	},

	set(newSelectedFileName: string) {
		if (currentSelectedFile === undefined ||
			(currentSelectedFile !== undefined && newSelectedFileName !== currentSelectedFile.name)
		) { currentSelectedFile = FileStore.getFileByName(newSelectedFileName); }
		subscribers.forEach((toCall) => {
			toCall(currentSelectedFile)
		})
	},

	get(): NodeFile {
		return (currentSelectedFile);
	},
}