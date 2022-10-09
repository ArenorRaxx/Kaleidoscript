import { NodeFile } from ".";
import type { NodeData } from "./types";

export default class TextFile extends NodeFile {
	constructor(file: File) {
		super(
			file.name,
			file,
			"textFile"
		);
	}

	protected get data(): Promise<string> {
		const data = this.file.text();
		return (data);
	}
}