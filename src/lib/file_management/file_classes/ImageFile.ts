import { NodeFile } from ".";
import type { ImageNodeData } from "./types";

type Size = {
	width: number,
	height: number
}

export default class ImageFile extends NodeFile {
	constructor(file: File) {
		super(
			file.name,
			file,
			"imageFile"
		);
	}

	get data(): Promise<string> {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();

			reader.onload = () => {
				resolve(reader.result as string);
			}
			reader.readAsDataURL(this.file);
		})
	}
	
	protected async getPartialData(): Promise<ImageNodeData> {
		const imageUrl = await this.data;
		const sizeOfImage = await this.getSize(imageUrl);

		return new Promise<ImageNodeData>((resolve, reject) => {
			resolve({
				width: sizeOfImage.width,
				height: sizeOfImage.height
			});
		});
	}


	private getSize(src: string): Promise<Size> {
		return new Promise((resolve, reject) => {
			const img = new Image()
			img.onload = () => {
				const imageSize: Size = { width: img.width, height: img.height };
				const boundary: Size = { width: 256, height: 144 };
				const resized = this.resizeImageProportionally(imageSize, boundary);
				resolve(resized);
			}
			
			img.src = src;
		})
	}

	private resizeImageProportionally(realSize: Size, boundary: Size): Size {
		const widthRatio = boundary.width / realSize.width;
		const heightRatio = boundary.height / realSize.height;
		const ratioToApply = Math.min(widthRatio, heightRatio);
		return {
			width: realSize.width * ratioToApply,
			height: realSize.height * ratioToApply
		};
	}
}