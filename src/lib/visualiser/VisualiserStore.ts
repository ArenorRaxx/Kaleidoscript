import type { NodeFile } from "$lib/file_management/file_classes";

let currentSelectedFile: NodeFile;
const subscribers: Function[] = [];

interface Toggler {
	toggle: boolean,
	subscribers: Function[],
	subscribe: (callback: (toggle: boolean) => void) => Function,
	set: () => void,
}

export const toggleVisualiser: Toggler = {
	toggle: false,
	subscribers: [],
	subscribe: function (callback: (toggle: boolean) => void): Function{
		subscribers.push(callback);

		return () => {
			const index = subscribers.findIndex(
				(subscribed: Function) => subscribed === callback
			);
			subscribers.splice(index, 1);
		}
	},

	set: function () {
		this.toggle = !this.toggle;
		subscribers.forEach((toCall) => {
			console.log("yes");
			toCall(this.toggle);
		})
	}
}

export default {
	subscribe(callback: (file: NodeFile) => void): Function {
		subscribers.push(callback);

		return () => {
			const index = subscribers.findIndex((subscribed: Function) => subscribed === callback);
			subscribers.splice(index, 1);
		}
	},

	set(newSelectedFile: NodeFile) {
		currentSelectedFile = newSelectedFile;
		subscribers.forEach((toCall) => {
			toCall(currentSelectedFile)
		})
	},


	
}