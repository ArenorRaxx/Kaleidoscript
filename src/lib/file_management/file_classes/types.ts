export type types = "textFile" | "imageFile";

export type NodeData = {
	name: string;
	data: string;
	category: types;
}

export interface GenericFileClass {
	readonly name: string;
	readonly file: File;
}

export interface NodeFileClass extends GenericFileClass {
	readonly category: types;

	get node(): Promise<NodeData>;
}