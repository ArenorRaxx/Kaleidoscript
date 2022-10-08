import type { types as fileTypes, NodeFile, GenericFileClass, TypedFileClass, TypedNodeFileClass } from "./types";

abstract class GenericFile implements GenericFileClass {
	protected constructor(
		public readonly name: string,
		public readonly file: File
	){};
}

abstract class TypedFile extends GenericFile implements TypedFileClass {
	public readonly category: fileTypes;
	abstract get data(): Promise<string>;

	protected constructor(file: File) {
		super(file.name, file);
		this.category = this._category;
	};

	private get _category(): fileTypes {
		return ("textFile");
	} 

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