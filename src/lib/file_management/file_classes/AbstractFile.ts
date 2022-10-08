import type { NodeFile, FileClass, types as fileTypes } from "./";

export abstract class AbstractFile implements FileClass {
	
	protected constructor(
		public readonly name: string,
		public readonly file: File
	){};

	abstract readonly category: fileTypes;

	abstract get data(): Promise<string>;
}
