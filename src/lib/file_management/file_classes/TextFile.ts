import { NodeFile } from ".";
import type { PartialData } from "./types";

export default class TextFile extends NodeFile {
	public constructor(file: File) {
		super(
			file.name,
			file,
			"textFile"
		);
	}
	
	public get data(): Promise<string> {
		const data = this.file.text();
		return (data);
	}

	protected async getPartialData(): Promise<PartialData> {
		return new Promise<PartialData>((resolve, reject) => {
			resolve({});
		});
	}

}