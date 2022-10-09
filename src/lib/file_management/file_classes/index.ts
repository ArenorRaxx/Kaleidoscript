import type { types as fileTypes, NodeData, GenericFileClass, NodeFileClass } from "./types";

abstract class GenericFile implements GenericFileClass {
	protected constructor(
		public readonly name: string,
		public readonly file: File,
		public readonly category: fileTypes
	){};
}

export abstract class NodeFile extends GenericFile implements NodeFileClass {
	get node(): Promise<NodeData> {
		const promise = new Promise<NodeData>(async (resolve, reject) => {
			const fileData = await this.data;
			const fileNode: NodeData = this.makeNodeFromFile(fileData);
			resolve(fileNode); 
		});
		return (promise);
	}
	
	protected abstract get data(): Promise<string>;
	
	private makeNodeFromFile(fileData: string): NodeData {
		const newNodeData = {
			name: this.name,
			data: fileData,
			category: this.category
		}
		return (newNodeData);
	}
}