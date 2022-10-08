import { AbstractFile } from "./AbstractFile";
import type { NodeFile, NodeFileClass, types as fileTypes } from "./";


export default class TextFile extends AbstractFile implements NodeFileClass {

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

	makeNodeFromFile(fileData: string): NodeFile {
		return {
			name: this.name,
			data: fileData,
			category: this.category
		}
	}
}