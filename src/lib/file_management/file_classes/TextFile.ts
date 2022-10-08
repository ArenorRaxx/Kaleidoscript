import { TypedNodeFile } from ".";
import type { NodeFile } from "./types";


export default class TextFile extends TypedNodeFile {
	constructor(file: File) {
		super(file);
	}

	get data(): Promise<string> {
		const data = this.file.text();
		return (data);
	}

	get node(): Promise<NodeFile> {
		const promise = new Promise<NodeFile>(async (resolve, reject) => {
			const fileData = await this.data;
			const fileNode: NodeFile = this.makeNodeFromFile(fileData);
			resolve(fileNode); 
		});
		return (promise);
	}
}