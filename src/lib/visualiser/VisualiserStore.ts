import FileStore from "$lib/file_management/FileStoreModule";
import type { NodeFile } from "$lib/file_management/file_classes";

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