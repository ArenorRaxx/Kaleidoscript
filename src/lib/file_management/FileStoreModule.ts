import type { TypedNodeFile } from "./file_classes/";

let fileList: (TypedNodeFile)[] = [ ];
const subscribers: Function[] = [];

function set_currentFile(newFile: TypedNodeFile): TypedNodeFile {
	fileList = [newFile, ...fileList];
	return (newFile);
}

function get_currentFile(): TypedNodeFile | null {
	if (fileList.length == 0)
		return (null);
	return (fileList[0]);
}

function get_file(indexOfFile: number): TypedNodeFile | null {
	if (indexOfFile < 0)
		return (null);
	return (fileList[0]);
}

export default {

	subscribe(callback: (file: TypedNodeFile) => void): Function {
		let currentFile = get_currentFile();
		if (currentFile !== null)
			callback(currentFile);
		
		subscribers.push(callback);

		return () => {
			const index = subscribers.findIndex((subscribed: Function) => subscribed === callback);
			subscribers.splice(index, 1);
		}
	},

	set(newFile: TypedNodeFile) {
		subscribers.forEach((toCall) => {
			toCall(set_currentFile(newFile))
		});
	},

	get(): TypedNodeFile | null {
		return get_currentFile();
	},

	getFileByName(fileToSearch: string): TypedNodeFile | null {
		const indexOfFile = fileList.findIndex(file => fileToSearch === file.name);
		const file = get_file(indexOfFile);
		return (file);
	}
}