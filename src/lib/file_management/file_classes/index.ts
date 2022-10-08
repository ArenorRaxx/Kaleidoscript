import type { types as fileTypes, NodeFile, GenericFileClass, TypedFileClass, TypedNodeFileClass } from "./types";

export abstract class GenericFile implements GenericFileClass {
	protected constructor(
		public readonly name: string,
		public readonly file: File
	){};
}

export abstract class TypedFile extends GenericFile implements TypedFileClass {
	abstract readonly category: fileTypes;
	abstract get data(): Promise<string>;
}

export abstract class TypedNodeFile extends TypedFile implements TypedNodeFileClass {
	abstract get node(): Promise<NodeFile>;

	protected makeNodeFromFile(fileData: string): NodeFile {
		const newNodeData = {
			name: this.name,
			data: fileData,
			category: this.category
		}
		return (newNodeData);
	}
}