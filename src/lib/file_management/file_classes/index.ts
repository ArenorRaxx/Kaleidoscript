import type { AbstractFile } from "./AbstractFile";

export type types = "textFile" | "imageFile";

export type NodeFile = {
	name: string;
	data: string;
	category: types;
}

export interface FileClass {
	name: string;
	file: File;
	category: types;

	get data(): Promise<string>;
}

export interface NodeFileClass extends FileClass {
	get node(): Promise<NodeFile>;
	makeNodeFromFile(fileData: string): NodeFile;
}