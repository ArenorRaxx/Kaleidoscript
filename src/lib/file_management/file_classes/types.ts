export type types = "textFile" | "imageFile";

export type NodeFile = {
	name: string;
	data: string;
	category: types;
}

export interface GenericFileClass {
	readonly name: string;
	readonly file: File;
}

export interface TypedFileClass extends GenericFileClass {
	readonly category: types;

	get data(): Promise<string>;
}

export interface TypedNodeFileClass extends TypedFileClass {
	get node(): Promise<NodeFile>;
}