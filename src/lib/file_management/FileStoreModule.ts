import type { NodeFile } from "./file_classes/";
import FileSorter from "./FileSortAndInit";

const fileList: NodeFile[] = [];
const subscribers: Function[] = [];

function check_and_store_file(newFile: File): NodeFile | null {
	const newNodeFile = FileSorter(newFile);

	for(const storedFile of fileList)
		if (storedFile.is(newNodeFile))
			return (null);
	fileList.push(newNodeFile);
	return (newNodeFile);
}

function get_file(indexOfFile: number): NodeFile {
	return (fileList[indexOfFile]);
}

export default {
	subscribe(callback: (file: NodeFile) => void): Function {
		if (fileList.length !== 0)
			fileList.forEach(storedFile => { callback(storedFile) })

		subscribers.push(callback);

		return () => {
			const index = subscribers.findIndex((subscribed: Function) => subscribed === callback);
			subscribers.splice(index, 1);
		}
	},

	set(newFile: File) {
		const nodeFile = check_and_store_file(newFile);
		if (!nodeFile)
		{
			setTimeout(() => alert("You can't add the same file multiple times !"), 200);
			return ;
		}
			subscribers.forEach((toCall) => {
			toCall(nodeFile);
		});
	},

	getFileByName(nameOfFileToSearch: string): NodeFile {
		const indexOfFile = fileList.findIndex(file => nameOfFileToSearch === file.name);
		const file = get_file(indexOfFile);
		return (file);
	}
}