import type { NodeFile } from "./file_classes/";
import FileSorter from "./FileSortAndInit";

let fileList: NodeFile[] = [];
const subscribers: Function[] = [];

function get_currentFile(): NodeFile | null {
	if (fileList.length == 0)
		return (null);
	return (fileList[0]);
}

function store_file(newFile: File): NodeFile {
	const newNodeFile = FileSorter(newFile);
	fileList = [newNodeFile, ...fileList];
	return (newNodeFile);
}

function get_file(indexOfFile: number): NodeFile {
	return (fileList[indexOfFile]);
}

export default {
	subscribe(callback: (file: NodeFile) => void): Function {
		let currentFile = get_currentFile();
		if (currentFile !== null)
			callback(currentFile);

		subscribers.push(callback);

		return () => {
			const index = subscribers.findIndex((subscribed: Function) => subscribed === callback);
			subscribers.splice(index, 1);
		}
	},

	set(newFile: File) {
		const nodeFile = store_file(newFile);
		subscribers.forEach((toCall) => {
			toCall(nodeFile);
		});
	},

	get(): NodeFile | null {
		return get_currentFile();
	},

	getFileByName(fileToSearch: string): NodeFile {
		const indexOfFile = fileList.findIndex(file => fileToSearch === file.name);
		const file = get_file(indexOfFile);
		return (file);
	}
}