import type { NodeFile } from "./file_classes";
import TextFile from "./file_classes/TextFile";
import ImageFile from "./file_classes/ImageFile";

export default (fileToSort: File): NodeFile => {
	let newNodeFile: NodeFile;
	if (fileToSort.type.split("/")[0] === "image")
		newNodeFile = new ImageFile(fileToSort);
	//	- TextFile is the default NodeClass
	//	- here files should be sorted
	else
		newNodeFile = new TextFile(fileToSort);
	return (newNodeFile);
}