import { TypedNodeFile } from ".";
import type { types as fileTypes, NodeFile } from "./types";


export default class TextFile extends TypedNodeFile {

	public readonly category: fileTypes;

	constructor(file: File) {
		super(file.name, file);
		this.category = "textFile";
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