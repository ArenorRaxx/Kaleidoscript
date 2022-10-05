export const fileStore = initFileStore();

function initFileStore()  {
	let	fileList: File[] = [];
	const subscribers: Function[] = [];
	const currentFile = () => (fileList[0]);

	const subscribe = (callback: Function) => {
		subscribers.push(callback);

		return () => {
			const index = subscribers.findIndex((subscribed: Function) => subscribed === callback);
			subscribers.splice(index, 1);
		}
	}

	const set = (newFile: File) => {
		fileList = [ newFile, ...fileList ];
		subscribers.forEach((subscribed: Function) => subscribed(currentFile));
	}
}