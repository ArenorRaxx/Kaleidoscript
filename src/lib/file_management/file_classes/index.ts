import type { types as fileTypes, NodeData, PartialData, GenericFileClass, NodeFileClass, ImageNodeData } from "./types";

abstract class GenericFile implements GenericFileClass {
	protected constructor(
		public readonly name: string,
		public readonly file: File,
		public readonly category: fileTypes,
		public readonly visuComponent: ConstructorOfATypedSvelteComponent
	){};

	public abstract is(file: GenericFile): boolean;
}

export abstract class NodeFile extends GenericFile implements NodeFileClass {

	public is(file: NodeFile): boolean {
		if (this.file === file.file || this.name === file.name)
			return (true);
		return (false);
	}

	public get node(): Promise<NodeData> {
		return new Promise<NodeData>(async (resolve, reject) => {
			const partialData: PartialData = await this.getPartialData();
			resolve({
				name: this.name,
				data: await this.data,
				category: this.category,
				...partialData
			});
		});
	};

	public abstract get data(): Promise<string>;
	protected abstract getPartialData(): Promise<PartialData>;
}