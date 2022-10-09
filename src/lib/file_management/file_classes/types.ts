export type types = "textFile" | "imageFile";

export interface NodeData {
	name: string;
	data: string;
	category: types;
	width?: number;
	height?: number;
}

export interface PartialData {
}

export interface ImageNodeData {
	width: number;
	height: number;
}

export interface GenericFileClass {
	readonly name: string;
	readonly file: File;
	readonly category: types;
}

export interface NodeFileClass extends GenericFileClass {
	get node(): Promise<NodeData>;
	get data(): Promise<string>;
}