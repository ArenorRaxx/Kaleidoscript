let fileList: (File | null)[] = [ null ];
const subscribers: Function[] = [];

function set_currentFile(newFile: File): File {
	fileList = [newFile, ...fileList];
	return newFile;
}

function get_currentFile(): File | null {
	return fileList[0]
}

export default {

	subscribe(callback: (file: File) => void): Function {
		let currentFile = get_currentFile();
		if (currentFile !== null)
			callback(currentFile);
		
		subscribers.push(callback);

		return () => {
			const index = subscribers.findIndex((subscribed: Function) => subscribed === callback);
			subscribers.splice(index, 1);
			return
		}
	},

	set(newFile: File) {
		subscribers.forEach((toCall) => {
			toCall(set_currentFile(newFile))
		});
	},

	get(): File | null {
		return get_currentFile();
	}
}